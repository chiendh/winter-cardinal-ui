/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteLayout = /** @class */ (function (_super) {
    __extends(DThemeWhiteLayout, _super);
    function DThemeWhiteLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteLayout.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeWhiteLayout.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteLayout.prototype.getMargin = function () {
        return 5;
    };
    DThemeWhiteLayout.prototype.getInteractive = function () {
        return DBaseInteractive.CHILDREN;
    };
    DThemeWhiteLayout.prototype.getDirection = function () {
        return DLayoutDirection.VERTICAL;
    };
    DThemeWhiteLayout.prototype.getCornerAdjust = function () {
        return false;
    };
    DThemeWhiteLayout.prototype.getMultiplicity = function () {
        return 1;
    };
    DThemeWhiteLayout.prototype.getReverse = function () {
        return false;
    };
    return DThemeWhiteLayout;
}(DThemeWhiteBase));
export { DThemeWhiteLayout };
//# sourceMappingURL=d-theme-white-layout.js.map