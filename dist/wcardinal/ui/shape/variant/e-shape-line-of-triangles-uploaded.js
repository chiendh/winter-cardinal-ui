/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildNullStep, buildNullUv, buildNullVertex } from "./build-null";
import { buildTriangleClipping, buildTriangleIndex, buildTriangleStep, buildTriangleUv, buildTriangleVertex, TRIANGLE_INDEX_COUNT, TRIANGLE_VERTEX_COUNT, TRIANGLE_WORLD_SIZE } from "./build-triangle";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";
var EShapeLineOfTrianglesUploaded = /** @class */ (function (_super) {
    __extends(EShapeLineOfTrianglesUploaded, _super);
    function EShapeLineOfTrianglesUploaded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeLineOfTrianglesUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        var buffer = this.buffer;
        buffer.updateClippings();
        buffer.updateIndices();
        var clippings = buffer.clippings;
        var indices = buffer.indices;
        var voffset = this.vertexOffset;
        var ioffset = this.indexOffset;
        var pointCountReserved = this.pointCountReserved;
        if (0 < pointCountReserved) {
            buildTriangleClipping(clippings, voffset);
            copyClipping(clippings, voffset, TRIANGLE_VERTEX_COUNT, pointCountReserved);
            buildTriangleIndex(indices, voffset, ioffset);
            copyIndex(indices, TRIANGLE_VERTEX_COUNT, ioffset, TRIANGLE_INDEX_COUNT, pointCountReserved);
        }
        // Text
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeLineOfTrianglesUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        var points = shape.points;
        if (points instanceof EShapeLineOfAnyPointsImpl) {
            this.updateVertexStepAndUvs(buffer, shape, points);
            this.updateLineOfAnyColorFill(buffer, shape, points, TRIANGLE_VERTEX_COUNT);
            this.updateLineOfAnyColorStroke(buffer, shape, points, TRIANGLE_VERTEX_COUNT);
            this.updateText(buffer, shape);
        }
    };
    EShapeLineOfTrianglesUploaded.prototype.updateVertexStepAndUvs = function (buffer, shape, points) {
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
        var texture = this.toTexture(shape);
        var textureTransformId = this.toTextureTransformId(texture);
        var isTextureChanged = (texture !== this.texture || textureTransformId !== this.textureTransformId);
        var isVertexChanged = isPointChanged || isPointSizeChanged || isSizeChanged || isStrokeChanged;
        if (isVertexChanged || isTransformChanged || isTextureChanged) {
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
            if (isVertexChanged || isTransformChanged) {
                buffer.updateSteps();
            }
            if (isVertexChanged || isTextureChanged) {
                buffer.updateUvs();
            }
            var pointCount = this.pointCount;
            var pointsValues = points.values;
            var voffset = this.vertexOffset;
            var vertices = buffer.vertices;
            var steps = buffer.steps;
            var clippings = buffer.clippings;
            var uvs = buffer.uvs;
            var textureUvs = this.toTextureUvs(texture);
            var internalTransform = shape.transform.internalTransform;
            var antialiasWeight = this.antialiasWeight;
            if (0 < pointCount && pointSize.isStaticX() && pointSize.isStaticY()) {
                var pointSizeX = pointSize.getX(0);
                var pointSizeY = pointSize.getY(0);
                buildTriangleVertex(vertices, voffset, 0, 0, pointSizeX, pointSizeY, strokeAlign, strokeWidth, internalTransform, TRIANGLE_WORLD_SIZE);
                copyVertex(vertices, internalTransform, voffset, TRIANGLE_VERTEX_COUNT, pointCount, pointsValues, pointOffset);
                if (isVertexChanged || isTransformChanged) {
                    buildTriangleStep(steps, clippings, voffset, TRIANGLE_VERTEX_COUNT, strokeWidth, antialiasWeight, TRIANGLE_WORLD_SIZE);
                    copyStep(steps, voffset, TRIANGLE_VERTEX_COUNT, pointCount);
                }
                if (isVertexChanged || isTextureChanged) {
                    buildTriangleUv(uvs, textureUvs, voffset, TRIANGLE_WORLD_SIZE);
                    copyUvs(uvs, voffset, TRIANGLE_VERTEX_COUNT, pointCount);
                }
            }
            else {
                for (var i = 0; i < pointCount; ++i) {
                    var ip = i << 1;
                    var px = pointsValues[ip] + pointOffset.getX(i);
                    var py = pointsValues[ip + 1] + pointOffset.getY(i);
                    var pointSizeX = pointSize.getX(i);
                    var pointSizeY = pointSize.getY(i);
                    var iv = voffset + i * TRIANGLE_VERTEX_COUNT;
                    buildTriangleVertex(vertices, iv, px, py, pointSizeX, pointSizeY, strokeAlign, strokeWidth, internalTransform, TRIANGLE_WORLD_SIZE);
                    if (isVertexChanged || isTransformChanged) {
                        buildTriangleStep(steps, clippings, iv, TRIANGLE_VERTEX_COUNT, strokeWidth, antialiasWeight, TRIANGLE_WORLD_SIZE);
                    }
                    if (isVertexChanged || isTextureChanged) {
                        buildTriangleUv(uvs, textureUvs, iv, TRIANGLE_WORLD_SIZE);
                    }
                }
            }
            // Fill the rest
            var pointCountReserved = this.pointCountReserved;
            var voffsetReserved = voffset + pointCount * TRIANGLE_VERTEX_COUNT;
            var vcountReserved = TRIANGLE_VERTEX_COUNT * (pointCountReserved - pointCount);
            buildNullVertex(vertices, voffsetReserved, vcountReserved);
            buildNullStep(steps, voffsetReserved, vcountReserved);
            buildNullUv(uvs, voffsetReserved, vcountReserved);
        }
    };
    return EShapeLineOfTrianglesUploaded;
}(EShapeLineOfAnyUploaded));
export { EShapeLineOfTrianglesUploaded };
//# sourceMappingURL=e-shape-line-of-triangles-uploaded.js.map