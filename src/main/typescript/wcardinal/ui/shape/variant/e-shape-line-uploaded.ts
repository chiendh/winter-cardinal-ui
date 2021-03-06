/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsStyle } from "../e-shape-points-style";
import {
	buildLineClipping, buildLineIndex, buildLineUv,
	buildLineVertexStepAndColorFill, toLineVertexCount
} from "./build-line";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeLineUploaded extends EShapeTextUploaded {
	protected pointCount: number;
	protected pointId: number;
	protected pointsClosed: boolean;
	protected length: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number, ioffset: number,
		tvcount: number, ticount: number,
		vcount: number, icount: number,
		antialiasWeight: number
	) {
		super( buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight );
		this.pointId = -1;
		this.pointCount = 0;
		this.pointsClosed = false;
		this.length = 1;
	}

	init( shape: EShape ): this {
		super.init( shape );

		// Clipping & indices
		const buffer = this.buffer;
		buffer.updateIndices();
		buildLineIndex(
			buffer.indices,
			this.vertexOffset,
			this.indexOffset,
			this.indexCount - this.textIndexCount
		);

		// Text
		this.initText();

		//
		this.update( shape );

		return this;
	}

	isCompatible( shape: EShape ): boolean {
		if( super.isCompatible( shape ) ) {
			const points = shape.points;
			const vcount = toLineVertexCount( points ? points.length : 0 );
			return vcount === this.vertexCount - this.textVertexCount;
		}
		return false;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		this.updateLineClipping( buffer, shape );
		this.updateLineVertexStepAndColorFill( buffer, shape );
		this.updateColor( buffer, shape );
		this.updateLineUv( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateLineClipping( buffer: EShapeBuffer, shape: EShape ): void {
		const points = shape.points;
		if( points ) {
			const pointCount = points.length;
			const pointsClosed = (!! (points.style & EShapePointsStyle.CLOSED));
			if( this.pointCount !== pointCount || this.pointsClosed !== pointsClosed ) {
				this.pointCount = pointCount;
				this.pointsClosed = pointsClosed;

				// Invalidate the pointId to update the vertices
				this.pointId = -1;

				buffer.updateClippings();
				buildLineClipping(
					buffer.clippings,
					this.vertexOffset,
					this.vertexCount - this.textVertexCount,
					pointCount,
					pointsClosed
				);
			}
		}
	}

	protected updateLineVertexStepAndColorFill( buffer: EShapeBuffer, shape: EShape ): void {
		const points = shape.points;
		if( points ) {
			const pointId = points.id;
			const isPointChanged = ( pointId !== this.pointId );

			const stroke = shape.stroke;
			const strokeWidth = ( stroke.enable ? stroke.width : 0 );
			const isStrokeWidthChanged = ( strokeWidth !== this.strokeWidth );

			const transformLocalId = this.toTransformLocalId( shape );
			const isTransformChanged = ( this.transformLocalId !== transformLocalId );

			if( isPointChanged || isTransformChanged || isStrokeWidthChanged ) {
				this.pointId = pointId;
				this.strokeWidth = strokeWidth;
				this.transformLocalId = transformLocalId;

				if( isPointChanged || isTransformChanged ) {
					// Invalidate the text layout to update the text layout.
					this.textSpacingHorizontal = NaN;
				}
				if( isPointChanged ) {
					// Invalidate the texture transform ID to update the UVs
					this.textureTransformId = NaN;
				}

				buffer.updateVertices();
				buffer.updateSteps();
				buffer.updateColorFills();
				this.length = buildLineVertexStepAndColorFill(
					buffer.vertices,
					buffer.steps,
					buffer.colorFills,
					this.vertexOffset,
					this.vertexCount - this.textVertexCount,
					this.pointCount,
					this.pointsClosed,
					points.values,
					points.segments,
					points.style,
					strokeWidth,
					shape.transform.internalTransform
				);
			}
		}
	}

	protected updateColorFillAndStroke( buffer: EShapeBuffer, shape: EShape, vertexCount: number ) {
		this.updateColorStroke( buffer, shape, vertexCount );
	}

	updateLineUv( buffer: EShapeBuffer, shape: EShape ): void {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			const pointCount = this.pointCount;
			buffer.updateUvs();
			buildLineUv(
				buffer.uvs,
				buffer.colorFills,
				this.vertexOffset,
				this.vertexCount - this.textVertexCount,
				pointCount,
				this.pointsClosed,
				this.toTextureUvs( texture ),
				this.length
			);
		}
	}
}
