/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildRectangleClipping, buildRectangleIndex, buildRectangleStep, buildRectangleUv, buildRectangleVertex, RECTANGLE_WORLD_SIZE } from "./build-rectangle";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
var EShapeRectangleUploaded = /** @class */ (function (_super) {
    __extends(EShapeRectangleUploaded, _super);
    function EShapeRectangleUploaded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeRectangleUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        // Indices
        var buffer = this.buffer;
        buffer.updateIndices();
        buildRectangleIndex(buffer.indices, this.vertexOffset, this.indexOffset);
        // Text
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeRectangleUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        this.updateVertexClippingStepAndUv(buffer, shape);
        this.updateColor(buffer, shape);
        this.updateText(buffer, shape);
    };
    EShapeRectangleUploaded.prototype.updateVertexClippingStepAndUv = function (buffer, shape) {
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
        var isVertexChanged = isSizeChanged || isStrokeChanged;
        if (isVertexChanged || isTransformChanged || isTextureChanged) {
            this.sizeX = sizeX;
            this.sizeY = sizeY;
            this.transformLocalId = transformLocalId;
            this.strokeWidth = strokeWidth;
            this.strokeAlign = strokeAlign;
            this.strokeSide = strokeSide;
            this.texture = texture;
            this.textureTransformId = textureTransformId;
            if (isVertexChanged || isTransformChanged) {
                // Invalidate the text layout to update the text layout.
                this.textSpacingHorizontal = NaN;
            }
            // Vertices
            var voffset = this.vertexOffset;
            buffer.updateVertices();
            buildRectangleVertex(buffer.vertices, voffset, 0, 0, sizeX, sizeY, strokeAlign, strokeWidth, shape.transform.internalTransform, RECTANGLE_WORLD_SIZE);
            // Steps
            if (isVertexChanged || isTransformChanged) {
                buffer.updateSteps();
                buildRectangleStep(voffset, buffer.steps, strokeWidth, strokeSide, this.antialiasWeight, RECTANGLE_WORLD_SIZE);
            }
            // Clippings
            if (isVertexChanged) {
                buffer.updateClippings();
                buildRectangleClipping(buffer.clippings, voffset, RECTANGLE_WORLD_SIZE);
            }
            // UVs
            if (isVertexChanged || isTextureChanged) {
                buffer.updateUvs();
                buildRectangleUv(buffer.uvs, voffset, this.toTextureUvs(texture), RECTANGLE_WORLD_SIZE);
            }
        }
    };
    return EShapeRectangleUploaded;
}(EShapeTextUploaded));
export { EShapeRectangleUploaded };
//# sourceMappingURL=e-shape-rectangle-uploaded.js.map