/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";
var DThemeDarkMenu = /** @class */ (function (_super) {
    __extends(DThemeDarkMenu, _super);
    function DThemeDarkMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenu.prototype.getBackgroundColor = function (state) {
        return 0x000000;
    };
    DThemeDarkMenu.prototype.getBorderColor = function (state) {
        return 0x646464;
    };
    DThemeDarkMenu.prototype.getOffsetX = function () {
        return 5;
    };
    DThemeDarkMenu.prototype.getOffsetY = function () {
        return 5;
    };
    DThemeDarkMenu.prototype.getPaddingTop = function () {
        return 5;
    };
    DThemeDarkMenu.prototype.getPaddingBottom = function () {
        return 5;
    };
    DThemeDarkMenu.prototype.getWidth = function () {
        return 200;
    };
    DThemeDarkMenu.prototype.getMargin = function () {
        return 0;
    };
    DThemeDarkMenu.prototype.getShadow = function () {
        return this.newShadowWeak();
    };
    DThemeDarkMenu.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkMenu;
}(DThemeDarkLayoutVertical));
export { DThemeDarkMenu };
//# sourceMappingURL=d-theme-dark-menu.js.map