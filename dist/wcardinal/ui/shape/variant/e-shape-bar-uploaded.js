/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapePointsStyle } from "../e-shape-points-style";
import { buildBarClipping, buildBarIndex, buildBarUv, buildBarVertexStepAndColorFill } from "./build-bar";
import { EShapeBar } from "./e-shape-bar";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
var EShapeBarUploaded = /** @class */ (function (_super) {
    __extends(EShapeBarUploaded, _super);
    function EShapeBarUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight) {
        var _this = _super.call(this, buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight) || this;
        _this.pointsId = NaN;
        _this.pointsStyle = EShapePointsStyle.NONE;
        return _this;
    }
    EShapeBarUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        // Clipping & indices
        var buffer = this.buffer;
        var voffset = this.vertexOffset;
        var ioffset = this.indexOffset;
        buffer.updateClippings();
        buffer.updateIndices();
        buildBarClipping(buffer.clippings, voffset);
        buildBarIndex(buffer.indices, voffset, ioffset);
        // Text
        this.initText();
        //
        this.update(shape);
        return this;
    };
    EShapeBarUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        this.updateVertexStepAndColorFill(buffer, shape);
        this.updateColor(buffer, shape);
        this.updateUv(buffer, shape);
        this.updateText(buffer, shape);
    };
    EShapeBarUploaded.prototype.updateVertexStepAndColorFill = function (buffer, shape) {
        if (shape instanceof EShapeBar) {
            var size = shape.size;
            var sizeX = size.x;
            var sizeY = size.y;
            var isSizeChanged = (sizeX !== this.sizeX || sizeY !== this.sizeY);
            var stroke = shape.stroke;
            var strokeWidth = (stroke.enable ? stroke.width : 0);
            var isStrokeWidthChanged = (strokeWidth !== this.strokeWidth);
            var transformLocalId = this.toTransformLocalId(shape);
            var isTransformChanged = (this.transformLocalId !== transformLocalId);
            var points = shape.points;
            var pointsId = points.id;
            var isPointsIdChanged = (pointsId !== this.pointsId);
            var pointsStyle = points.style;
            var isPointsStyleChanged = (pointsStyle !== this.pointsStyle);
            if (isSizeChanged || isTransformChanged || isStrokeWidthChanged || isPointsIdChanged || isPointsStyleChanged) {
                this.sizeX = sizeX;
                this.sizeY = sizeY;
                this.strokeWidth = strokeWidth;
                this.transformLocalId = transformLocalId;
                this.pointsId = pointsId;
                this.pointsStyle = pointsStyle;
                if (isSizeChanged || isTransformChanged) {
                    // Invalidate the text layout to update the text layout.
                    this.textSpacingHorizontal = NaN;
                }
                if (isPointsIdChanged) {
                    // Invalidate the texture transform ID to update the UVs
                    this.textureTransformId = NaN;
                }
                buffer.updateVertices();
                buffer.updateSteps();
                buffer.updateColorFills();
                buildBarVertexStepAndColorFill(buffer.vertices, buffer.steps, buffer.colorFills, this.vertexOffset, points.values, pointsStyle, points.size, strokeWidth, shape.transform.internalTransform);
            }
        }
    };
    EShapeBarUploaded.prototype.updateColorFillAndStroke = function (buffer, shape, vertexCount) {
        this.updateColorStroke(buffer, shape, vertexCount);
    };
    EShapeBarUploaded.prototype.updateUv = function (buffer, shape) {
        var texture = this.toTexture(shape);
        var textureTransformId = this.toTextureTransformId(texture);
        if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
            this.texture = texture;
            this.textureTransformId = textureTransformId;
            buildBarUv(buffer.uvs, this.vertexOffset, this.toTextureUvs(texture));
        }
    };
    return EShapeBarUploaded;
}(EShapeTextUploaded));
export { EShapeBarUploaded };
//# sourceMappingURL=e-shape-bar-uploaded.js.map