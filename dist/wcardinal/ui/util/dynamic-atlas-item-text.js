/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
var DynamicAtlasItemText = /** @class */ (function (_super) {
    __extends(DynamicAtlasItemText, _super);
    function DynamicAtlasItemText(id, text, baseTexture) {
        var _this = _super.call(this, id, text.width, text.height, 0, baseTexture) || this;
        _this._text = text;
        return _this;
    }
    DynamicAtlasItemText.prototype.render = function (context) {
        var frame = this.frame;
        context.drawImage(this._text.canvas, frame.x, frame.y, frame.width, frame.height);
    };
    return DynamicAtlasItemText;
}(DynamicAtlasItem));
export { DynamicAtlasItemText };
//# sourceMappingURL=dynamic-atlas-item-text.js.map