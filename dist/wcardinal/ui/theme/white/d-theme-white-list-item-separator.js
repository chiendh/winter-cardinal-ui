/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImage } from "./d-theme-white-image";
var DThemeWhiteListItemSeparator = /** @class */ (function (_super) {
    __extends(DThemeWhiteListItemSeparator, _super);
    function DThemeWhiteListItemSeparator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteListItemSeparator.prototype.getBorderColor = function (state) {
        return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
    };
    DThemeWhiteListItemSeparator.prototype.getBorderAlpha = function (state) {
        return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
    };
    DThemeWhiteListItemSeparator.prototype.getHeight = function () {
        return 15;
    };
    DThemeWhiteListItemSeparator.prototype.getWidth = function () {
        return "padding";
    };
    DThemeWhiteListItemSeparator.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeWhiteListItemSeparator.prototype.getPaddingRight = function () {
        return 10;
    };
    return DThemeWhiteListItemSeparator;
}(DThemeWhiteImage));
export { DThemeWhiteListItemSeparator };
//# sourceMappingURL=d-theme-white-list-item-separator.js.map