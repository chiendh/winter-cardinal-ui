/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Texture } from "pixi.js";
import { EShapeUploadedBase } from "../e-shape-uploaded";
import { buildColor } from "./build-color";
import { buildTextClipping, buildTextIndex, buildTextStep, buildTextVertex, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
var EShapeTextUploaded = /** @class */ (function (_super) {
    __extends(EShapeTextUploaded, _super);
    function EShapeTextUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight) {
        var _this = _super.call(this, buffer, voffset, ioffset, vcount, icount, antialiasWeight) || this;
        _this.textSize = NaN;
        _this.textFamily = "auto";
        _this.textValue = "";
        _this.textTexture = null;
        _this.textTextureTransformId = NaN;
        _this.textColor = NaN;
        _this.textAlpha = NaN;
        _this.textWeight = NaN;
        _this.textStyle = NaN;
        _this.textAlignHorizontal = NaN;
        _this.textAlignVertical = NaN;
        _this.textOffsetHorizontal = NaN;
        _this.textOffsetVertical = NaN;
        _this.textOutlineWidth = NaN;
        _this.textOutlineColor = NaN;
        _this.textOutlineAlpha = NaN;
        _this.textSpacingHorizontal = NaN;
        _this.textSpacingVertical = NaN;
        _this.textDirection = NaN;
        _this.textPaddingHorizontal = NaN;
        _this.textPaddingVertical = NaN;
        _this.textClipping = false;
        _this.textVertexOffset = _this.vertexOffset + _this.vertexCount - tvcount;
        _this.textIndexOffset = _this.indexOffset + _this.indexCount - ticount;
        _this.textVertexCount = tvcount;
        _this.textIndexCount = ticount;
        return _this;
    }
    EShapeTextUploaded.prototype.initText = function () {
        var vcount = this.textVertexCount;
        if (0 < vcount) {
            // Clippings
            var buffer = this.buffer;
            var voffset = this.textVertexOffset;
            buffer.updateClippings();
            buildTextClipping(buffer.clippings, voffset, vcount);
            // Indices
            buffer.updateIndices();
            buildTextIndex(buffer.indices, voffset, this.textIndexOffset, this.textIndexCount);
        }
    };
    EShapeTextUploaded.prototype.isCompatible = function (shape) {
        if (_super.prototype.isCompatible.call(this, shape)) {
            return (toTextBufferCount(shape) * TEXT_VERTEX_COUNT === this.textVertexCount);
        }
        return false;
    };
    EShapeTextUploaded.prototype.updateText = function (buffer, shape) {
        var vcount = this.textVertexCount;
        if (0 < vcount) {
            var textAtlas = shape.text.atlas;
            if (textAtlas != null) {
                this.updateTextVertex(buffer, shape, textAtlas);
                this.updateTextColorFill(buffer, shape);
                this.updateTextColorStroke(buffer, shape);
                this.updateTextStep(buffer, shape);
            }
        }
    };
    EShapeTextUploaded.prototype.updateColor = function (buffer, shape) {
        var vertexCount = this.vertexCount - this.textVertexCount;
        this.updateColorFillAndStroke(buffer, shape, vertexCount);
    };
    EShapeTextUploaded.prototype.updateTextVertex = function (buffer, shape, textAtlas) {
        var text = shape.text;
        var textSize = text.size;
        var textFamily = text.family;
        var textValue = text.value;
        var textStyle = text.style;
        var textAlignHorizontal = text.align.horizontal;
        var textAlignVertical = text.align.vertical;
        var textOffsetHorizontal = text.offset.horizontal;
        var textOffsetVertical = text.offset.vertical;
        var textSpacingHorizontal = text.spacing.horizontal;
        var textSpacingVertical = text.spacing.vertical;
        var textDirection = text.direction;
        var textPaddingHorizontal = text.padding.horizontal;
        var textPaddingVertical = text.padding.vertical;
        var textClipping = text.clipping;
        var textTexture = text.texture || Texture.WHITE;
        var textTextureTransformId = this.toTextureTransformId(textTexture);
        var isCharChanged = (textValue !== this.textValue || textFamily !== this.textFamily);
        var isCharSizeChanged = (textSize !== this.textSize);
        var isCharStyleChanged = (textStyle !== this.textStyle);
        var isCharAlignChanged = (textAlignHorizontal !== this.textAlignHorizontal ||
            textAlignVertical !== this.textAlignVertical);
        var isCharOffsetChanged = (textOffsetHorizontal !== this.textOffsetHorizontal ||
            textOffsetVertical !== this.textOffsetVertical);
        var isCharSpacingChanged = (textSpacingHorizontal !== this.textSpacingHorizontal ||
            textSpacingVertical !== this.textSpacingVertical ||
            textPaddingHorizontal !== this.textPaddingHorizontal ||
            textPaddingVertical !== this.textPaddingVertical);
        var isCharDirectionChanged = (textDirection !== this.textDirection);
        var isClippingChanged = (this.textClipping !== textClipping);
        var isTextureChanged = (textTexture !== this.textTexture ||
            textTextureTransformId !== this.textTextureTransformId);
        if (isCharChanged || isCharSizeChanged || isCharStyleChanged ||
            isCharAlignChanged || isCharOffsetChanged || isCharSpacingChanged ||
            isCharDirectionChanged || isClippingChanged || isTextureChanged) {
            this.textSize = textSize;
            this.textFamily = textFamily;
            this.textValue = textValue;
            this.textStyle = textStyle;
            this.textAlignHorizontal = textAlignHorizontal;
            this.textAlignVertical = textAlignVertical;
            this.textOffsetHorizontal = textOffsetHorizontal;
            this.textOffsetVertical = textOffsetVertical;
            this.textSpacingHorizontal = textSpacingHorizontal;
            this.textSpacingVertical = textSpacingVertical;
            this.textDirection = textDirection;
            this.textPaddingHorizontal = textPaddingHorizontal;
            this.textPaddingVertical = textPaddingVertical;
            this.textClipping = textClipping;
            this.textTexture = textTexture;
            this.textTextureTransformId = textTextureTransformId;
            if (isCharSizeChanged) {
                // Invalidate the text weight to update the text steps.
                this.textWeight = NaN;
            }
            // Vertices & UVs
            buffer.updateVertices();
            buffer.updateUvs();
            var shapeSize = shape.size;
            var textWorld = text.world = text.world || new Float32Array(8);
            buildTextVertex(buffer.vertices, buffer.uvs, this.textVertexOffset, this.textVertexCount, 0, 0, shapeSize.x, shapeSize.y, textAtlas, textSize, textValue, textStyle, textAlignHorizontal, textAlignVertical, textOffsetHorizontal, textOffsetVertical, textSpacingHorizontal, textSpacingVertical, textDirection, textPaddingHorizontal, textPaddingVertical, textClipping, textWorld, this.toTextureUvs(textTexture), shape.transform.internalTransform);
        }
    };
    EShapeTextUploaded.prototype.updateTextColorFill = function (buffer, shape) {
        var text = shape.text;
        var color = text.color;
        var alpha = (shape.visible && text.enable ? text.alpha : 0);
        if (color !== this.textColor || alpha !== this.textAlpha) {
            this.textColor = color;
            this.textAlpha = alpha;
            buffer.updateColorFills();
            buildColor(color, alpha, this.textVertexOffset, this.textVertexCount, buffer.colorFills);
        }
    };
    EShapeTextUploaded.prototype.updateTextColorStroke = function (buffer, shape) {
        var text = shape.text;
        var outline = text.outline;
        var color = outline.color;
        var alpha = (shape.visible && text.enable ? outline.alpha : 0);
        if (color !== this.textOutlineColor || alpha !== this.textOutlineAlpha) {
            this.textOutlineColor = color;
            this.textOutlineAlpha = alpha;
            buffer.updateColorStrokes();
            buildColor(color, alpha, this.textVertexOffset, this.textVertexCount, buffer.colorStrokes);
        }
    };
    EShapeTextUploaded.prototype.updateTextStep = function (buffer, shape) {
        var text = shape.text;
        var textOutline = text.outline;
        var textOutlineWidth = (textOutline.enable ? textOutline.width : 0);
        var textWeight = text.weight;
        if (textWeight !== this.textWeight || textOutlineWidth !== this.textOutlineWidth) {
            this.textWeight = textWeight;
            this.textOutlineWidth = textOutlineWidth;
            buffer.updateSteps();
            buildTextStep(buffer.steps, this.textVertexOffset, this.textVertexCount, text.atlas, text.size, textOutlineWidth, textWeight, this.antialiasWeight);
        }
    };
    EShapeTextUploaded.prototype.buildUnit = function (builder) {
        _super.prototype.buildUnit.call(this, builder);
        if (0 < this.textVertexCount) {
            var textTexture = this.textTexture || Texture.WHITE;
            var textBaseTexture = textTexture.baseTexture;
            if (textBaseTexture !== builder.baseTexture) {
                builder.baseTexture = textBaseTexture;
                builder.push(textTexture, this.textIndexOffset);
            }
        }
    };
    return EShapeTextUploaded;
}(EShapeUploadedBase));
export { EShapeTextUploaded };
//# sourceMappingURL=e-shape-text-uploaded.js.map