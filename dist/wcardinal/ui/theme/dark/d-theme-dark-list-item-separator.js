/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImage } from "./d-theme-dark-image";
var DThemeDarkListItemSeparator = /** @class */ (function (_super) {
    __extends(DThemeDarkListItemSeparator, _super);
    function DThemeDarkListItemSeparator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x383838;
        return _this;
    }
    DThemeDarkListItemSeparator.prototype.getBorderColor = function (state) {
        return this.COLOR;
    };
    DThemeDarkListItemSeparator.prototype.getBorderAlpha = function (state) {
        return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
    };
    DThemeDarkListItemSeparator.prototype.getHeight = function () {
        return 15;
    };
    DThemeDarkListItemSeparator.prototype.getWidth = function () {
        return "padding";
    };
    DThemeDarkListItemSeparator.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeDarkListItemSeparator.prototype.getPaddingRight = function () {
        return 10;
    };
    return DThemeDarkListItemSeparator;
}(DThemeDarkImage));
export { DThemeDarkListItemSeparator };
//# sourceMappingURL=d-theme-dark-list-item-separator.js.map