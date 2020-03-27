/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildTriangleRoundedClipping, buildTriangleRoundedIndex, buildTriangleRoundedStep, buildTriangleRoundedUv, buildTriangleRoundedVertex, TRIANGLE_ROUNDED_WORLD_SIZE } from "./build-triangle-rounded";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
var EShapeTriangleRoundedUploaded = /** @class */ (function (_super) {
    __extends(EShapeTriangleRoundedUploaded, _super);
    function EShapeTriangleRoundedUploaded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeTriangleRoundedUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        // Indices
        var buffer = this.buffer;
        buffer.updateIndices();
        buildTriangleRoundedIndex(buffer.indices, this.vertexOffset, this.indexOffset);
        // Text
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeTriangleRoundedUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        this.updateVertexClippingStepAndUv(buffer, shape);
        this.updateColor(buffer, shape);
        this.updateText(buffer, shape);
    };
    EShapeTriangleRoundedUploaded.prototype.updateVertexClippingStepAndUv = function (buffer, shape) {
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
        var isCornerChanged = (corner !== this.corner);
        var texture = this.toTexture(shape);
        var textureTransformId = this.toTextureTransformId(texture);
        var isTextureChanged = (texture !== this.texture || textureTransformId !== this.textureTransformId);
        var isVertexChanged = isSizeChanged || isRadiusChanged || isStrokeChanged;
        if (isVertexChanged || isTransformChanged || isCornerChanged || isTextureChanged) {
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
            var voffset = this.vertexOffset;
            buffer.updateVertices();
            buildTriangleRoundedVertex(buffer.vertices, voffset, 0, 0, sizeX, sizeY, strokeAlign, strokeWidth, radius, shape.transform.internalTransform, TRIANGLE_ROUNDED_WORLD_SIZE);
            if (isRadiusChanged || isCornerChanged) {
                buffer.updateClippings();
                buildTriangleRoundedClipping(buffer.clippings, voffset, corner, radius);
            }
            if (isVertexChanged || isTransformChanged || isCornerChanged) {
                buffer.updateSteps();
                buildTriangleRoundedStep(buffer.steps, buffer.clippings, voffset, strokeWidth, shape.radius, this.antialiasWeight, TRIANGLE_ROUNDED_WORLD_SIZE);
            }
            if (isVertexChanged || isTextureChanged) {
                buffer.updateUvs();
                buildTriangleRoundedUv(buffer.uvs, voffset, this.toTextureUvs(texture), radius, TRIANGLE_ROUNDED_WORLD_SIZE);
            }
        }
    };
    return EShapeTriangleRoundedUploaded;
}(EShapeTextUploaded));
export { EShapeTriangleRoundedUploaded };
//# sourceMappingURL=e-shape-triangle-rounded-uploaded.js.map