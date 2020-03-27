/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DynamicAtlasItemFontAtlas } from "./dynamic-atlas-item-font-atlas";
import { DynamicSDFFontAtlas } from "./dynamic-sdf-font-atlas";
var DynamicSDFFontAtlases = /** @class */ (function () {
    function DynamicSDFFontAtlases() {
        this._atlases = {};
    }
    DynamicSDFFontAtlases.prototype.begin = function () {
        var atlases = this._atlases;
        for (var family in atlases) {
            var atlas = atlases[family];
            atlas.begin();
        }
    };
    DynamicSDFFontAtlases.prototype.end = function () {
        var atlases = this._atlases;
        for (var family in atlases) {
            var atlas = atlases[family];
            if (0 < atlas.length) {
                atlas.addAscii();
            }
            atlas.end();
            if (atlas.length <= 0) {
                atlas.destroy();
                delete atlases[family];
            }
        }
    };
    DynamicSDFFontAtlases.prototype.add = function (family, targets) {
        var atlas = this._atlases[family];
        if (atlas != null) {
            atlas.add(targets);
        }
        else {
            var newAtlas = new DynamicSDFFontAtlas(family);
            newAtlas.add(targets);
            this._atlases[family] = newAtlas;
        }
    };
    DynamicSDFFontAtlases.prototype.get = function (family) {
        var atlas = this._atlases[family];
        if (atlas != null) {
            return atlas;
        }
        return null;
    };
    DynamicSDFFontAtlases.prototype.update = function (baseAtlas) {
        var atlases = this._atlases;
        var baseTexture = baseAtlas.getBaseTexture();
        for (var family in atlases) {
            var atlas = atlases[family];
            if (atlas.update()) {
                var atlasId = atlas.id;
                var item = baseAtlas.get(atlasId);
                if (item != null) {
                    var width = atlas.width;
                    var height = atlas.height;
                    var resolution = baseTexture.resolution;
                    item.frame.width = width;
                    item.frame.height = height;
                    item.width = width / resolution;
                    item.height = height / resolution;
                    baseAtlas.toDirty();
                }
                else {
                    baseAtlas.set(atlasId, new DynamicAtlasItemFontAtlas(atlas, baseTexture));
                }
            }
        }
    };
    DynamicSDFFontAtlases.prototype.destroy = function () {
        var atlases = this._atlases;
        for (var family in atlases) {
            var atlas = atlases[family];
            atlas.destroy();
        }
        this._atlases = {};
    };
    return DynamicSDFFontAtlases;
}());
export { DynamicSDFFontAtlases };
//# sourceMappingURL=dynamic-sdf-font-atlases.js.map