/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
var DynamicAtlasItemFontAtlas = /** @class */ (function (_super) {
    __extends(DynamicAtlasItemFontAtlas, _super);
    function DynamicAtlasItemFontAtlas(atlas, baseTexture) {
        var _this = _super.call(this, atlas.id, atlas.width / baseTexture.resolution, atlas.height / baseTexture.resolution, 0, baseTexture) || this;
        _this.canvas = atlas.canvas;
        return _this;
    }
    DynamicAtlasItemFontAtlas.prototype.render = function (context) {
        var canvas = this.canvas;
        if (canvas != null) {
            var frame = this.frame;
            context.drawImage(canvas, frame.x, frame.y, frame.width, frame.height);
        }
    };
    return DynamicAtlasItemFontAtlas;
}(DynamicAtlasItem));
export { DynamicAtlasItemFontAtlas };
//# sourceMappingURL=dynamic-atlas-item-font-atlas.js.map