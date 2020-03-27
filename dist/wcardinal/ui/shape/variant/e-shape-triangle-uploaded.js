/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildTriangleClipping, buildTriangleIndex, buildTriangleStep, buildTriangleUv, buildTriangleVertex, TRIANGLE_VERTEX_COUNT, TRIANGLE_WORLD_SIZE } from "./build-triangle";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
var EShapeTriangleUploaded = /** @class */ (function (_super) {
    __extends(EShapeTriangleUploaded, _super);
    function EShapeTriangleUploaded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeTriangleUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        var buffer = this.buffer;
        buffer.updateClippings();
        buffer.updateIndices();
        buildTriangleClipping(buffer.clippings, this.vertexOffset);
        buildTriangleIndex(buffer.indices, this.vertexOffset, this.indexOffset);
        // Text
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeTriangleUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        this.updateVertexStepAndUv(buffer, shape);
        this.updateColor(buffer, shape);
        this.updateText(buffer, shape);
    };
    EShapeTriangleUploaded.prototype.updateVertexStepAndUv = function (buffer, shape) {
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
        var isVertexChanged = isSizeChanged || isStrokeChanged;
        if (isVertexChanged || isTransformChanged || isTextureChanged) {
            this.sizeX = sizeX;
            this.sizeY = sizeY;
            this.transformLocalId = transformLocalId;
            this.strokeWidth = strokeWidth;
            this.strokeAlign = strokeAlign;
            this.texture = texture;
            this.textureTransformId = textureTransformId;
            if (isVertexChanged || isTransformChanged) {
                // Invalidate the text layout to update the text layout.
                this.textSpacingHorizontal = NaN;
            }
            var voffset = this.vertexOffset;
            buffer.updateVertices();
            buildTriangleVertex(buffer.vertices, voffset, 0, 0, sizeX, sizeY, strokeAlign, strokeWidth, shape.transform.internalTransform, TRIANGLE_WORLD_SIZE);
            if (isVertexChanged || isTransformChanged) {
                buffer.updateSteps();
                buildTriangleStep(buffer.steps, buffer.clippings, voffset, TRIANGLE_VERTEX_COUNT, strokeWidth, this.antialiasWeight, TRIANGLE_WORLD_SIZE);
            }
            if (isVertexChanged || isTextureChanged) {
                buffer.updateUvs();
                buildTriangleUv(buffer.uvs, this.toTextureUvs(texture), voffset, TRIANGLE_WORLD_SIZE);
            }
        }
    };
    return EShapeTriangleUploaded;
}(EShapeTextUploaded));
export { EShapeTriangleUploaded };
//# sourceMappingURL=e-shape-triangle-uploaded.js.map