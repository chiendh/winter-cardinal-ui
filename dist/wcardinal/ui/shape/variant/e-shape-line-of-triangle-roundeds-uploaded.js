/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildNullClipping, buildNullStep, buildNullUv, buildNullVertex } from "./build-null";
import { buildTriangleRoundedClipping, buildTriangleRoundedIndex, buildTriangleRoundedStep, buildTriangleRoundedUv, buildTriangleRoundedVertex, TRIANGLE_ROUNDED_INDEX_COUNT, TRIANGLE_ROUNDED_VERTEX_COUNT, TRIANGLE_ROUNDED_WORLD_SIZE } from "./build-triangle-rounded";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";
var EShapeLineOfTriangleRoundedsUploaded = /** @class */ (function (_super) {
    __extends(EShapeLineOfTriangleRoundedsUploaded, _super);
    function EShapeLineOfTriangleRoundedsUploaded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeLineOfTriangleRoundedsUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        // Indices
        var buffer = this.buffer;
        buffer.updateIndices();
        var voffset = this.vertexOffset;
        var ioffset = this.indexOffset;
        var pointCountReserved = this.pointCountReserved;
        if (0 < pointCountReserved) {
            buildTriangleRoundedIndex(buffer.indices, voffset, ioffset);
            copyIndex(buffer.indices, TRIANGLE_ROUNDED_VERTEX_COUNT, ioffset, TRIANGLE_ROUNDED_INDEX_COUNT, pointCountReserved);
        }
        // Text
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeLineOfTriangleRoundedsUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        var points = shape.points;
        if (points instanceof EShapeLineOfAnyPointsImpl) {
            this.updateVertexClippingStepAndUv(buffer, shape, points);
            this.updateLineOfAnyColorFill(buffer, shape, points, TRIANGLE_ROUNDED_VERTEX_COUNT);
            this.updateLineOfAnyColorStroke(buffer, shape, points, TRIANGLE_ROUNDED_VERTEX_COUNT);
            this.updateText(buffer, shape);
        }
    };
    EShapeLineOfTriangleRoundedsUploaded.prototype.updateVertexClippingStepAndUv = function (buffer, shape, points) {
        var pointId = points.id;
        var pointOffset = points.offset;
        var pointOffsetId = pointOffset.id;
        var isPointChanged = (pointId !== this.pointId || pointOffsetId !== this.pointOffsetId);
        var pointSize = points.size;
        var pointSizeId = pointSize.id;
        var isPointSizeChanged = (pointSizeId !== this.pointSizeId);
        var size = shape.size;
        var sizeX = size.x;
        var sizeY = size.y;
        var isSizeChanged = (sizeX !== this.sizeX || sizeY !== this.sizeY);
        var radius = shape.radius;
        var isRadiusChanged = (radius !== this.radius);
        var transformLocalId = this.toTransformLocalId(shape);
        var isTransformChanged = (this.transformLocalId !== transformLocalId);
        var stroke = shape.stroke;
        var strokeWidth = (stroke.enable ? stroke.width : 0);
        var strokeAlign = stroke.align;
        var isStrokeChanged = (this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth);
        var corner = shape.corner;
        var isCornerChanged = (this.corner !== corner);
        var texture = this.toTexture(shape);
        var textureTransformId = this.toTextureTransformId(texture);
        var isTextureChanged = (texture !== this.texture || textureTransformId !== this.textureTransformId);
        var isVertexChanged = isPointChanged || isPointSizeChanged || isSizeChanged || isRadiusChanged || isStrokeChanged;
        if (isVertexChanged || isTransformChanged || isCornerChanged || isTextureChanged) {
            this.pointId = pointId;
            this.pointCount = points.length;
            this.pointOffsetId = pointOffsetId;
            this.pointSizeId = pointSizeId;
            this.sizeX = sizeX;
            this.sizeY = sizeY;
            this.radius = radius;
            this.transformLocalId = transformLocalId;
            this.strokeWidth = strokeWidth;
            this.strokeAlign = strokeAlign;
            this.corner = corner;
            this.texture = texture;
            this.textureTransformId = textureTransformId;
            if (isSizeChanged || isTransformChanged || isStrokeChanged) {
                // Invalidate the text layout to update the text layout.
                this.textSpacingHorizontal = NaN;
            }
            // Buffer
            buffer.updateVertices();
            if (isVertexChanged || isCornerChanged) {
                buffer.updateClippings();
            }
            if (isVertexChanged || isTransformChanged || isCornerChanged) {
                buffer.updateSteps();
            }
            if (isVertexChanged || isTextureChanged) {
                buffer.updateUvs();
            }
            var pointCount = this.pointCount;
            var pointsValues = points.values;
            var voffset = this.vertexOffset;
            var vertices = buffer.vertices;
            var clippings = buffer.clippings;
            var steps = buffer.steps;
            var uvs = buffer.uvs;
            var internalTransform = shape.transform.internalTransform;
            var textureUvs = this.toTextureUvs(texture);
            var antialiasWeight = this.antialiasWeight;
            if (0 < pointCount && pointSize.isStaticX() && pointSize.isStaticY()) {
                var pointSizeX = pointSize.getX(0);
                var pointSizeY = pointSize.getY(0);
                // Vertices
                buildTriangleRoundedVertex(vertices, voffset, 0, 0, pointSizeX, pointSizeY, strokeAlign, strokeWidth, radius, internalTransform, TRIANGLE_ROUNDED_WORLD_SIZE);
                copyVertex(vertices, internalTransform, voffset, TRIANGLE_ROUNDED_VERTEX_COUNT, pointCount, pointsValues, pointOffset);
                // Clippings
                if (isVertexChanged || isCornerChanged) {
                    buildTriangleRoundedClipping(clippings, voffset, corner, radius);
                    copyClipping(clippings, voffset, TRIANGLE_ROUNDED_VERTEX_COUNT, pointCount);
                }
                // Steps
                if (isVertexChanged || isTransformChanged || isCornerChanged) {
                    buildTriangleRoundedStep(steps, clippings, voffset, strokeWidth, radius, antialiasWeight, TRIANGLE_ROUNDED_WORLD_SIZE);
                    copyStep(steps, voffset, TRIANGLE_ROUNDED_VERTEX_COUNT, pointCount);
                }
                // UVs
                if (isVertexChanged || isTextureChanged) {
                    buildTriangleRoundedUv(uvs, voffset, textureUvs, radius, TRIANGLE_ROUNDED_WORLD_SIZE);
                    copyUvs(uvs, voffset, TRIANGLE_ROUNDED_VERTEX_COUNT, pointCount);
                }
            }
            else {
                for (var i = 0; i < pointCount; ++i) {
                    var ip = i << 1;
                    var px = pointsValues[ip] + pointOffset.getX(i);
                    var py = pointsValues[ip + 1] + pointOffset.getY(i);
                    var pointSizeX = pointSize.getX(i);
                    var pointSizeY = pointSize.getY(i);
                    var iv = voffset + i * TRIANGLE_ROUNDED_VERTEX_COUNT;
                    // Vertices
                    buildTriangleRoundedVertex(vertices, iv, px, py, pointSizeX, pointSizeY, strokeAlign, strokeWidth, radius, internalTransform, TRIANGLE_ROUNDED_WORLD_SIZE);
                    // Clippings
                    if (isVertexChanged || isCornerChanged) {
                        buildTriangleRoundedClipping(clippings, iv, corner, radius);
                    }
                    // Steps
                    if (isVertexChanged || isTransformChanged || isCornerChanged) {
                        buildTriangleRoundedStep(steps, clippings, iv, strokeWidth, radius, antialiasWeight, TRIANGLE_ROUNDED_WORLD_SIZE);
                    }
                    // UVs
                    if (isVertexChanged || isTextureChanged) {
                        buildTriangleRoundedUv(uvs, iv, textureUvs, radius, TRIANGLE_ROUNDED_WORLD_SIZE);
                    }
                }
            }
            // Fill the rest
            var pointCountReserved = this.pointCountReserved;
            var voffsetReserved = voffset + pointCount * TRIANGLE_ROUNDED_VERTEX_COUNT;
            var vcountReserved = TRIANGLE_ROUNDED_VERTEX_COUNT * (pointCountReserved - pointCount);
            buildNullVertex(vertices, voffsetReserved, vcountReserved);
            buildNullStep(steps, voffsetReserved, vcountReserved);
            buildNullClipping(clippings, voffsetReserved, vcountReserved);
            buildNullUv(uvs, voffsetReserved, vcountReserved);
        }
    };
    return EShapeLineOfTriangleRoundedsUploaded;
}(EShapeLineOfAnyUploaded));
export { EShapeLineOfTriangleRoundedsUploaded };
//# sourceMappingURL=e-shape-line-of-triangle-roundeds-uploaded.js.map