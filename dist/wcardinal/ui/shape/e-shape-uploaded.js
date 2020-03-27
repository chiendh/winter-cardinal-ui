/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Texture } from "pixi.js";
import { buildColor } from "./variant/build-color";
var EShapeUploadedBase = /** @class */ (function () {
    function EShapeUploadedBase(buffer, voffset, ioffset, vcount, icount, antialiasWeight) {
        this.buffer = buffer;
        this.transformLocalId = -1;
        this.vertexOffset = voffset;
        this.vertexCount = vcount;
        this.indexOffset = ioffset;
        this.indexCount = icount;
        this.colorFill = NaN;
        this.alphaFill = -1;
        this.colorStroke = NaN;
        this.alphaStroke = -1;
        this.sizeX = NaN;
        this.sizeY = NaN;
        this.strokeWidth = NaN;
        this.strokeAlign = NaN;
        this.strokeSide = NaN;
        this.radius = NaN;
        this.corner = NaN;
        this.texture = null;
        this.textureTransformId = NaN;
        this.antialiasWeight = antialiasWeight;
    }
    EShapeUploadedBase.prototype.init = function (shape) {
        shape.uploaded = this;
        return this;
    };
    EShapeUploadedBase.prototype.isCompatible = function (shape) {
        return true;
    };
    EShapeUploadedBase.prototype.getBuffer = function () {
        return this.buffer;
    };
    EShapeUploadedBase.prototype.getVertexOffset = function () {
        return this.vertexOffset;
    };
    EShapeUploadedBase.prototype.getVertexCount = function () {
        return this.vertexCount;
    };
    EShapeUploadedBase.prototype.getIndexOffset = function () {
        return this.indexOffset;
    };
    EShapeUploadedBase.prototype.getIndexCount = function () {
        return this.indexCount;
    };
    EShapeUploadedBase.prototype.toTransformLocalId = function (shape) {
        shape.updateTransform();
        return shape.transform.getLocalId();
    };
    EShapeUploadedBase.prototype.toTexture = function (shape) {
        return shape.texture || Texture.WHITE;
    };
    EShapeUploadedBase.prototype.toTextureTransformId = function (texture) {
        var textureAny = texture;
        if (textureAny._uvs == null) {
            texture.updateUvs();
        }
        return textureAny._updateID;
    };
    EShapeUploadedBase.prototype.toTextureUvs = function (texture) {
        return texture._uvs;
    };
    EShapeUploadedBase.prototype.updateColorFill = function (buffer, shape, vertexCount) {
        var fill = shape.fill;
        var isEnabled = shape.visible && fill.enable;
        var color = fill.color;
        var alpha = (isEnabled ? fill.alpha : 0);
        if (color !== this.colorFill || alpha !== this.alphaFill) {
            this.colorFill = color;
            this.alphaFill = alpha;
            buffer.updateColorFills();
            buildColor(color, alpha, this.vertexOffset, vertexCount, buffer.colorFills);
        }
    };
    EShapeUploadedBase.prototype.updateColorStroke = function (buffer, shape, vertexCount) {
        var stroke = shape.stroke;
        var isEnabled = shape.visible && stroke.enable && 0 < stroke.width;
        var color = stroke.color;
        var alpha = (isEnabled ? stroke.alpha : 0);
        if (color !== this.colorStroke || alpha !== this.alphaStroke) {
            this.colorStroke = color;
            this.alphaStroke = alpha;
            buffer.updateColorStrokes();
            buildColor(color, alpha, this.vertexOffset, vertexCount, buffer.colorStrokes);
        }
    };
    EShapeUploadedBase.prototype.updateColorFillAndStroke = function (buffer, shape, vertexCount) {
        this.updateColorFill(buffer, shape, vertexCount);
        this.updateColorStroke(buffer, shape, vertexCount);
    };
    EShapeUploadedBase.prototype.buildUnit = function (builder) {
        var texture = this.texture || Texture.WHITE;
        var baseTexture = texture.baseTexture;
        if (baseTexture !== builder.baseTexture) {
            builder.baseTexture = baseTexture;
            var indexOffset = this.indexOffset;
            builder.push(texture, indexOffset);
        }
    };
    return EShapeUploadedBase;
}());
export { EShapeUploadedBase };
//# sourceMappingURL=e-shape-uploaded.js.map