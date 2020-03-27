/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Mesh, MeshMaterial, Texture } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DDynamicTextGeometry } from "./d-dynamic-text-geometry";
import { DDynamicTextStyle } from "./d-dynamic-text-style";
var DDynamicText = /** @class */ (function (_super) {
    __extends(DDynamicText, _super);
    function DDynamicText(text, options) {
        var _this = _super.call(this, new DDynamicTextGeometry(), new MeshMaterial(Texture.EMPTY)) || this;
        _this._style = new DDynamicTextStyle(options, function () {
            _this._isDirty = true;
            _this._isGeometryDirty = true;
            _this._atlas = null;
            _this.update_();
        });
        _this._text = text;
        _this._textApproved = "";
        _this._isDirty = true;
        _this._isGeometryDirty = true;
        _this._atlas = null;
        _this._atlasRevisionUpdated = 0;
        _this._width = 0;
        _this._height = 0;
        _this._clippingWidthDelta = 0;
        _this.update_();
        return _this;
    }
    DDynamicText.prototype.update_ = function () {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var style = this._style;
            if (this._isDirty) {
                this._isDirty = false;
                var text = this._text;
                var textApproved = this._textApproved;
                this._textApproved = text;
                var fontId = style.fontId;
                var fontIdApproved = style.fontIdApproved;
                var fontSize = style.fontSize;
                var fill = style.fill;
                var fillApproved = style.fillApproved;
                style.approve();
                var atlases = layer.getDynamicFontAtlases();
                if (text !== textApproved || fontId !== fontIdApproved || fill !== fillApproved) {
                    atlases.add(fontId, fontSize, fill, text);
                    atlases.remove(fontIdApproved, fillApproved, textApproved);
                }
            }
        }
    };
    Object.defineProperty(DDynamicText.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            if (this._text !== text) {
                this._text = text;
                this._isDirty = true;
                this._isGeometryDirty = true;
                this.update_();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicText.prototype, "width", {
        get: function () {
            this.update();
            return Math.abs(this.scale.x) * this.geometry.width;
        },
        set: function (width) {
            this.update();
            var geometryWidth = this.geometry.width;
            if (+1e-4 < geometryWidth) {
                var newScale = width / geometryWidth;
                this.scale.x = (0 <= this.scale.x ? +newScale : -newScale);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicText.prototype, "height", {
        get: function () {
            this.update();
            return Math.abs(this.scale.y) * this.geometry.height;
        },
        set: function (height) {
            this.update();
            var geometryHeight = this.geometry.height;
            if (+1e-4 < geometryHeight) {
                var newScale = height / geometryHeight;
                this.scale.y = (0 <= this.scale.y ? +newScale : -newScale);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicText.prototype, "clipped", {
        get: function () {
            return this.geometry.clipped;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDynamicText.prototype, "style", {
        get: function () {
            return this._style;
        },
        enumerable: true,
        configurable: true
    });
    DDynamicText.prototype.update = function () {
        this.update_();
        var atlas = this._atlas;
        if (atlas == null) {
            var layer = DApplications.getLayer(this);
            if (layer) {
                var style = this._style;
                atlas = layer.getDynamicFontAtlases().get(style.fontId, style.fill);
                if (atlas != null) {
                    this._atlasRevisionUpdated = atlas.getRevisionUpdate();
                    this._atlas = atlas;
                    this.texture = atlas.texture;
                    this._isGeometryDirty = true;
                }
            }
        }
        else {
            var revisionUpdate = atlas.getRevisionUpdate();
            if (revisionUpdate !== this._atlasRevisionUpdated) {
                this._atlasRevisionUpdated = revisionUpdate;
                this._isGeometryDirty = true;
            }
        }
        var clippingWidth = this._clippingWidth;
        var newClippingWidth = this.getClippingWidth();
        if (clippingWidth !== newClippingWidth) {
            this._clippingWidth = newClippingWidth;
            this._isGeometryDirty = true;
        }
        if (this._isGeometryDirty) {
            this._isGeometryDirty = false;
            this.geometry.update(this._text, atlas, newClippingWidth);
        }
    };
    DDynamicText.prototype.getClippingWidth = function () {
        if (this._style.clipping) {
            var parent_1 = this.parent;
            if (parent_1 instanceof DBase) {
                return parent_1.width - parent_1.padding.getLeft() - parent_1.padding.getRight() - this._clippingWidthDelta;
            }
        }
        return undefined;
    };
    DDynamicText.prototype.setClippingWidthDelta = function (width) {
        this._clippingWidthDelta = width;
    };
    DDynamicText.prototype._calculateBounds = function () {
        this.update();
        _super.prototype._calculateBounds.call(this);
    };
    DDynamicText.prototype._render = function (renderer) {
        this.update();
        _super.prototype._render.call(this, renderer);
    };
    return DDynamicText;
}(Mesh));
export { DDynamicText };
//# sourceMappingURL=d-dynamic-text.js.map