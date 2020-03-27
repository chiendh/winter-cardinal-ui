/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildImageSdfClipping, buildImageSdfIndex, buildImageSdfStep, buildImageSdfUv, buildImageSdfVertex, IMAGE_SDF_WORLD_SIZE } from "./build-image-sdf";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
var EShapeImageSdfUploaded = /** @class */ (function (_super) {
    __extends(EShapeImageSdfUploaded, _super);
    function EShapeImageSdfUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight) {
        var _this = _super.call(this, buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight) || this;
        _this.textureWidth = -1;
        _this.textureHeight = -1;
        return _this;
    }
    EShapeImageSdfUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        // Clippings & indices
        var buffer = this.buffer;
        var voffset = this.vertexOffset;
        buffer.updateClippings();
        buffer.updateIndices();
        buildImageSdfClipping(buffer.clippings, voffset);
        buildImageSdfIndex(buffer.indices, voffset, this.indexOffset);
        // Text
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeImageSdfUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        this.updateVertexAndStep(buffer, shape);
        this.updateColor(buffer, shape);
        this.updateUv(buffer, shape);
        this.updateText(buffer, shape);
    };
    EShapeImageSdfUploaded.prototype.updateVertexAndStep = function (buffer, shape) {
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
        var textureWidth = texture.width * texture.resolution;
        var textureHeight = texture.height * texture.resolution;
        var isTextureSizeChanged = (this.textureWidth !== textureWidth || this.textureHeight !== textureHeight);
        if (isSizeChanged || isTransformChanged || isStrokeChanged || isTextureSizeChanged) {
            this.sizeX = sizeX;
            this.sizeY = sizeY;
            this.transformLocalId = transformLocalId;
            this.strokeWidth = strokeWidth;
            this.strokeAlign = strokeAlign;
            this.textureWidth = textureWidth;
            this.textureHeight = textureHeight;
            // Invalidate the text layout to update the text layout.
            this.textSpacingHorizontal = NaN;
            // Vertices
            buffer.updateVertices();
            buildImageSdfVertex(buffer.vertices, this.vertexOffset, 0, 0, sizeX, sizeY, shape.transform.internalTransform, IMAGE_SDF_WORLD_SIZE);
            // Steps
            buffer.updateSteps();
            buildImageSdfStep(buffer.steps, this.vertexOffset, strokeAlign, strokeWidth, textureWidth, textureHeight, this.antialiasWeight, IMAGE_SDF_WORLD_SIZE);
        }
    };
    EShapeImageSdfUploaded.prototype.updateUv = function (buffer, shape) {
        var texture = this.toTexture(shape);
        var textureTransformId = this.toTextureTransformId(texture);
        if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
            this.texture = texture;
            this.textureTransformId = textureTransformId;
            buffer.updateUvs();
            buildImageSdfUv(buffer.uvs, this.vertexOffset, this.toTextureUvs(texture));
        }
    };
    return EShapeImageSdfUploaded;
}(EShapeTextUploaded));
export { EShapeImageSdfUploaded };
//# sourceMappingURL=e-shape-image-sdf-uploaded.js.map