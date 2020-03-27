/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";
var DThemeWhiteMenu = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenu, _super);
    function DThemeWhiteMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenu.prototype.getBackgroundColor = function (state) {
        return 0xffffff;
    };
    DThemeWhiteMenu.prototype.getOffsetX = function () {
        return 5;
    };
    DThemeWhiteMenu.prototype.getOffsetY = function () {
        return 5;
    };
    DThemeWhiteMenu.prototype.getPaddingTop = function () {
        return 5;
    };
    DThemeWhiteMenu.prototype.getPaddingBottom = function () {
        return 5;
    };
    DThemeWhiteMenu.prototype.getWidth = function () {
        return 200;
    };
    DThemeWhiteMenu.prototype.getMargin = function () {
        return 0;
    };
    DThemeWhiteMenu.prototype.getShadow = function () {
        return this.newShadowWeak();
    };
    DThemeWhiteMenu.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteMenu;
}(DThemeWhiteLayoutVertical));
export { DThemeWhiteMenu };
//# sourceMappingURL=d-theme-white-menu.js.map