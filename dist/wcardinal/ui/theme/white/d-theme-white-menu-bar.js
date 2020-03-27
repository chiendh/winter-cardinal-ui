/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";
var DThemeWhiteMenuBar = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuBar, _super);
    function DThemeWhiteMenuBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuBar.prototype.getBackgroundColor = function () {
        return 0xfdfdfd;
    };
    DThemeWhiteMenuBar.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteMenuBar.prototype.getHeight = function () {
        return 30;
    };
    DThemeWhiteMenuBar.prototype.getMargin = function () {
        return 0;
    };
    DThemeWhiteMenuBar.prototype.getPaddingLeft = function () {
        return 5;
    };
    DThemeWhiteMenuBar.prototype.getPaddingRight = function () {
        return 5;
    };
    DThemeWhiteMenuBar.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteMenuBar;
}(DThemeWhiteLayoutHorizontal));
export { DThemeWhiteMenuBar };
//# sourceMappingURL=d-theme-white-menu-bar.js.map