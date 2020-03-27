/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildNullClipping, buildNullStep, buildNullUv, buildNullVertex } from "./build-null";
import { buildRectangleClipping, buildRectangleIndex, buildRectangleStep, buildRectangleUv, buildRectangleVertex, RECTANGLE_INDEX_COUNT, RECTANGLE_VERTEX_COUNT, RECTANGLE_WORLD_SIZE } from "./build-rectangle";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";
var EShapeLineOfRectanglesUploaded = /** @class */ (function (_super) {
    __extends(EShapeLineOfRectanglesUploaded, _super);
    function EShapeLineOfRectanglesUploaded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeLineOfRectanglesUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        // Indices
        var buffer = this.buffer;
        buffer.updateIndices();
        var indices = buffer.indices;
        var voffset = this.vertexOffset;
        var ioffset = this.indexOffset;
        var pointCountReserved = this.pointCountReserved;
        if (0 < pointCountReserved) {
            buildRectangleIndex(indices, voffset, ioffset);
            copyIndex(indices, RECTANGLE_VERTEX_COUNT, ioffset, RECTANGLE_INDEX_COUNT, pointCountReserved);
        }
        // Text
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeLineOfRectanglesUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        var points = shape.points;
        if (points instanceof EShapeLineOfAnyPointsImpl) {
            this.updateVertexClippingStepAndUv(buffer, shape, points);
            this.updateLineOfAnyColorFill(buffer, shape, points, RECTANGLE_VERTEX_COUNT);
            this.updateLineOfAnyColorStroke(buffer, shape, points, RECTANGLE_VERTEX_COUNT);
            this.updateText(buffer, shape);
        }
    };
    EShapeLineOfRectanglesUploaded.prototype.updateVertexClippingStepAndUv = function (buffer, shape, points) {
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
        var strokeSide = stroke.side;
        var isStrokeChanged = (this.strokeAlign !== strokeAlign ||
            this.strokeWidth !== strokeWidth || this.strokeSide !== strokeSide);
        var texture = this.toTexture(shape);
        var textureTransformId = this.toTextureTransformId(texture);
        var isTextureChanged = (texture !== this.texture || textureTransformId !== this.textureTransformId);
        var isVertexChanged = isPointChanged || isPointSizeChanged || isSizeChanged || isStrokeChanged;
        if (isVertexChanged || isTransformChanged || isTextureChanged) {
            this.pointId = pointId;
            this.pointCount = points.length;
            this.pointOffsetId = pointOffsetId;
            this.pointSizeId = pointSizeId;
            this.transformLocalId = transformLocalId;
            this.strokeWidth = strokeWidth;
            this.strokeAlign = strokeAlign;
            this.strokeSide = strokeSide;
            this.texture = texture;
            this.textureTransformId = textureTransformId;
            if (isSizeChanged || isTransformChanged || isStrokeChanged) {
                // Invalidate the text layout to update the text layout.
                this.textSpacingHorizontal = NaN;
            }
            // Buffer
            buffer.updateVertices();
            if (isVertexChanged || isTransformChanged) {
                buffer.updateSteps();
            }
            if (isVertexChanged) {
                buffer.updateClippings();
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
            var antialiasWeight = this.antialiasWeight;
            var textureUvs = this.toTextureUvs(texture);
            if (0 < pointCount && pointSize.isStaticX() && pointSize.isStaticY()) {
                var pointSizeX = pointSize.getX(0);
                var pointSizeY = pointSize.getY(0);
                // Vertices
                buildRectangleVertex(vertices, voffset, 0, 0, pointSizeX, pointSizeY, strokeAlign, strokeWidth, internalTransform, RECTANGLE_WORLD_SIZE);
                copyVertex(vertices, internalTransform, voffset, RECTANGLE_VERTEX_COUNT, pointCount, pointsValues, pointOffset);
                // Steps
                if (isVertexChanged || isTransformChanged) {
                    buildRectangleStep(voffset, steps, strokeWidth, strokeSide, antialiasWeight, RECTANGLE_WORLD_SIZE);
                    copyStep(steps, voffset, RECTANGLE_VERTEX_COUNT, pointCount);
                }
                // Clippings
                if (isVertexChanged) {
                    buildRectangleClipping(clippings, voffset, RECTANGLE_WORLD_SIZE);
                    copyClipping(clippings, voffset, RECTANGLE_VERTEX_COUNT, pointCount);
                }
                // UVs
                if (isVertexChanged || isTextureChanged) {
                    buildRectangleUv(uvs, voffset, textureUvs, RECTANGLE_WORLD_SIZE);
                    copyUvs(uvs, voffset, RECTANGLE_VERTEX_COUNT, pointCount);
                }
            }
            else {
                for (var i = 0; i < pointCount; ++i) {
                    var ip = i << 1;
                    var px = pointsValues[ip] + pointOffset.getX(i);
                    var py = pointsValues[ip + 1] + pointOffset.getY(i);
                    var pointSizeX = pointSize.getX(i);
                    var pointSizeY = pointSize.getY(i);
                    var iv = voffset + i * RECTANGLE_VERTEX_COUNT;
                    // Vertices
                    buildRectangleVertex(vertices, iv, px, py, pointSizeX, pointSizeY, strokeAlign, strokeWidth, internalTransform, RECTANGLE_WORLD_SIZE);
                    // Steps
                    if (isVertexChanged || isTransformChanged) {
                        buildRectangleStep(iv, steps, strokeWidth, strokeSide, antialiasWeight, RECTANGLE_WORLD_SIZE);
                    }
                    // Clippings
                    if (isVertexChanged) {
                        buildRectangleClipping(clippings, iv, RECTANGLE_WORLD_SIZE);
                    }
                    // UVs
                    if (isVertexChanged || isTextureChanged) {
                        buildRectangleUv(uvs, iv, textureUvs, RECTANGLE_WORLD_SIZE);
                    }
                }
            }
            // Fill the rest
            var pointCountReserved = this.pointCountReserved;
            var voffsetReserved = voffset + pointCount * RECTANGLE_VERTEX_COUNT;
            var vcountReserved = RECTANGLE_VERTEX_COUNT * (pointCountReserved - pointCount);
            buildNullVertex(vertices, voffsetReserved, vcountReserved);
            buildNullStep(steps, voffsetReserved, vcountReserved);
            buildNullClipping(clippings, voffsetReserved, vcountReserved);
            buildNullUv(uvs, voffsetReserved, vcountReserved);
        }
    };
    return EShapeLineOfRectanglesUploaded;
}(EShapeLineOfAnyUploaded));
export { EShapeLineOfRectanglesUploaded };
//# sourceMappingURL=e-shape-line-of-rectangles-uploaded.js.map