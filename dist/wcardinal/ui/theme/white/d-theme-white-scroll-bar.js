/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteScrollBar = /** @class */ (function (_super) {
    __extends(DThemeWhiteScrollBar, _super);
    function DThemeWhiteScrollBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteScrollBar.prototype.getBackgroundColor = function (state) {
        return 0x000000;
    };
    DThemeWhiteScrollBar.prototype.getBackgroundAlpha = function (state) {
        return 0;
    };
    DThemeWhiteScrollBar.prototype.getWidth = function () {
        return 13;
    };
    DThemeWhiteScrollBar.prototype.getHeight = function () {
        return 13;
    };
    DThemeWhiteScrollBar.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteScrollBar;
}(DThemeWhiteBase));
export { DThemeWhiteScrollBar };
//# sourceMappingURL=d-theme-white-scroll-bar.js.map