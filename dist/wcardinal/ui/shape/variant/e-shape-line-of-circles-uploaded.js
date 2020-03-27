/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildCircleClipping, buildCircleIndex, buildCircleStep, buildCircleUv, buildCircleVertex, CIRCLE_INDEX_COUNT, CIRCLE_VERTEX_COUNT, CIRCLE_WORLD_SIZE } from "./build-circle";
import { buildNullStep, buildNullVertex } from "./build-null";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";
var EShapeLineOfCirclesUploaded = /** @class */ (function (_super) {
    __extends(EShapeLineOfCirclesUploaded, _super);
    function EShapeLineOfCirclesUploaded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeLineOfCirclesUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        // Clippings & indices
        var buffer = this.buffer;
        buffer.updateClippings();
        buffer.updateIndices();
        var clippings = buffer.clippings;
        var indices = buffer.indices;
        var voffset = this.vertexOffset;
        var ioffset = this.indexOffset;
        var pointCountReserved = this.pointCountReserved;
        if (0 < pointCountReserved) {
            buildCircleClipping(clippings, voffset);
            copyClipping(clippings, voffset, CIRCLE_VERTEX_COUNT, pointCountReserved);
            buildCircleIndex(indices, voffset, ioffset);
            copyIndex(indices, CIRCLE_VERTEX_COUNT, ioffset, CIRCLE_INDEX_COUNT, pointCountReserved);
        }
        // Text
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeLineOfCirclesUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        var points = shape.points;
        if (points instanceof EShapeLineOfAnyPointsImpl) {
            this.updateVertexAndStep(buffer, shape, points);
            this.updateLineOfAnyColorFill(buffer, shape, points, CIRCLE_VERTEX_COUNT);
            this.updateLineOfAnyColorStroke(buffer, shape, points, CIRCLE_VERTEX_COUNT);
            this.updateUv(buffer, shape);
            this.updateText(buffer, shape);
        }
    };
    EShapeLineOfCirclesUploaded.prototype.updateVertexAndStep = function (buffer, shape, points) {
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
        var transformLocalId = this.toTransformLocalId(shape);
        var isTransformChanged = (this.transformLocalId !== transformLocalId);
        var stroke = shape.stroke;
        var strokeWidth = (stroke.enable ? stroke.width : 0);
        var strokeAlign = stroke.align;
        var isStrokeChanged = (this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth);
        if (isPointChanged || isPointSizeChanged || isSizeChanged || isTransformChanged || isStrokeChanged) {
            this.pointId = pointId;
            this.pointCount = points.length;
            this.pointOffsetId = pointOffsetId;
            this.pointSizeId = pointSizeId;
            this.sizeX = sizeX;
            this.sizeY = sizeY;
            this.transformLocalId = transformLocalId;
            this.strokeWidth = strokeWidth;
            this.strokeAlign = strokeAlign;
            if (isSizeChanged || isTransformChanged || isStrokeChanged) {
                // Invalidate the text layout to update the text layout.
                this.textSpacingHorizontal = NaN;
            }
            // Buffer
            buffer.updateVertices();
            buffer.updateSteps();
            var pointCount = this.pointCount;
            var pointsValues = points.values;
            var voffset = this.vertexOffset;
            var vertices = buffer.vertices;
            var steps = buffer.steps;
            var clippings = buffer.clippings;
            var internalTransform = shape.transform.internalTransform;
            var antialiasWeight = this.antialiasWeight;
            if (0 < pointCount && pointSize.isStaticX() && pointSize.isStaticY()) {
                var pointSizeX = pointSize.getX(0);
                var pointSizeY = pointSize.getY(0);
                buildCircleVertex(vertices, voffset, 0, 0, pointSizeX, pointSizeY, strokeAlign, strokeWidth, internalTransform, CIRCLE_WORLD_SIZE);
                copyVertex(vertices, internalTransform, voffset, CIRCLE_VERTEX_COUNT, pointCount, pointsValues, pointOffset);
                buildCircleStep(steps, clippings, voffset, strokeWidth, antialiasWeight, CIRCLE_WORLD_SIZE);
                copyStep(steps, voffset, CIRCLE_VERTEX_COUNT, pointCount);
            }
            else {
                for (var i = 0; i < pointCount; ++i) {
                    var ip = i << 1;
                    var px = pointsValues[ip] + pointOffset.getX(i);
                    var py = pointsValues[ip + 1] + pointOffset.getY(i);
                    var pointSizeX = pointSize.getX(i);
                    var pointSizeY = pointSize.getY(i);
                    var iv = voffset + i * CIRCLE_VERTEX_COUNT;
                    buildCircleVertex(vertices, iv, px, py, pointSizeX, pointSizeY, strokeAlign, strokeWidth, internalTransform, CIRCLE_WORLD_SIZE);
                    buildCircleStep(steps, clippings, iv, strokeWidth, antialiasWeight, CIRCLE_WORLD_SIZE);
                }
            }
            // Fill the rest
            var pointCountReserved = this.pointCountReserved;
            var voffsetReserved = voffset + pointCount * CIRCLE_VERTEX_COUNT;
            var vcountReserved = CIRCLE_VERTEX_COUNT * (pointCountReserved - pointCount);
            buildNullVertex(vertices, voffsetReserved, vcountReserved);
            buildNullStep(steps, voffsetReserved, vcountReserved);
        }
    };
    EShapeLineOfCirclesUploaded.prototype.updateUv = function (buffer, shape) {
        var texture = this.toTexture(shape);
        var textureTransformId = this.toTextureTransformId(texture);
        if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
            this.texture = texture;
            this.textureTransformId = textureTransformId;
            buffer.updateUvs();
            var uvs = buffer.uvs;
            var voffset = this.vertexOffset;
            var textureUvs = this.toTextureUvs(texture);
            var pointCountReserved = this.pointCountReserved;
            if (0 < pointCountReserved) {
                buildCircleUv(uvs, voffset, textureUvs);
                copyUvs(uvs, voffset, CIRCLE_VERTEX_COUNT, pointCountReserved);
            }
        }
    };
    return EShapeLineOfCirclesUploaded;
}(EShapeLineOfAnyUploaded));
export { EShapeLineOfCirclesUploaded };
//# sourceMappingURL=e-shape-line-of-circles-uploaded.js.map