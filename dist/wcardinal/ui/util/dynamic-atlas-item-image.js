/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
var DynamicAtlasItemImage = /** @class */ (function (_super) {
    __extends(DynamicAtlasItemImage, _super);
    function DynamicAtlasItemImage(image, baseTexture) {
        var _this = _super.call(this, image.src, image.width / baseTexture.resolution, image.height / baseTexture.resolution, 0, baseTexture) || this;
        _this.image = image;
        return _this;
    }
    DynamicAtlasItemImage.prototype.render = function (context) {
        var frame = this.frame;
        var x = frame.x;
        var y = frame.y;
        var w = frame.width;
        var h = frame.height;
        var image = this.image;
        context.drawImage(image, x, y, w, h);
        context.drawImage(image, 0, 0, 1, h, x - 1, y - 1, 1, h + 2);
        context.drawImage(image, 0, 0, w, 1, x, y - 1, w, 1);
        context.drawImage(image, w - 1, 0, 1, h, x + w, y - 1, 1, h + 2);
        context.drawImage(image, 0, h - 1, w, 1, x, y + h, w, 1);
    };
    return DynamicAtlasItemImage;
}(DynamicAtlasItem));
export { DynamicAtlasItemImage };
//# sourceMappingURL=dynamic-atlas-item-image.js.map