/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DynamicFontAtlas } from "./dynamic-font-atlas";
var update = function (atlas) {
    atlas.update();
};
var updateAll = function (colorToAltas) {
    colorToAltas.forEach(update);
};
var destroy = function (atlas) {
    atlas.update();
};
var destroyAll = function (colorToAltas) {
    colorToAltas.forEach(destroy);
};
var DynamicFontAtlases = /** @class */ (function () {
    function DynamicFontAtlases(layer) {
        var _this = this;
        this._atlases = new Map();
        this._resolution = layer.renderer.resolution;
        layer.renderer.on("prerender", function () {
            _this.update();
        });
    }
    DynamicFontAtlases.prototype.add = function (fontId, fontSize, fontColor, targets) {
        var atlases = this._atlases;
        var colorToAtlas = atlases.get(fontId);
        if (colorToAtlas == null) {
            colorToAtlas = new Map();
            atlases.set(fontId, colorToAtlas);
        }
        var atlas = colorToAtlas.get(fontColor);
        if (atlas == null) {
            atlas = new DynamicFontAtlas(fontId, fontSize, fontColor, this._resolution);
            colorToAtlas.set(fontColor, atlas);
        }
        atlas.add(targets);
    };
    DynamicFontAtlases.prototype.remove = function (fontId, fontColor, targets) {
        var colorToAtlas = this._atlases.get(fontId);
        if (colorToAtlas != null) {
            var atlas = colorToAtlas.get(fontColor);
            if (atlas != null) {
                atlas.remove(targets);
            }
        }
    };
    DynamicFontAtlases.prototype.get = function (fontId, fontColor) {
        var atlases = this._atlases;
        var colorToAtlas = atlases.get(fontId);
        if (colorToAtlas == null) {
            return null;
        }
        var atlas = colorToAtlas.get(fontColor);
        if (atlas == null) {
            return null;
        }
        return atlas;
    };
    DynamicFontAtlases.prototype.update = function () {
        this._atlases.forEach(updateAll);
    };
    DynamicFontAtlases.prototype.destroy = function () {
        var atlases = this._atlases;
        atlases.forEach(destroyAll);
        atlases.clear();
    };
    return DynamicFontAtlases;
}());
export { DynamicFontAtlases };
//# sourceMappingURL=dynamic-font-atlases.js.map