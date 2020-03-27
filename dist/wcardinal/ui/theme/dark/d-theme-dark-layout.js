/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkLayout = /** @class */ (function (_super) {
    __extends(DThemeDarkLayout, _super);
    function DThemeDarkLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkLayout.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeDarkLayout.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkLayout.prototype.getMargin = function () {
        return 5;
    };
    DThemeDarkLayout.prototype.getInteractive = function () {
        return DBaseInteractive.CHILDREN;
    };
    DThemeDarkLayout.prototype.getDirection = function () {
        return DLayoutDirection.VERTICAL;
    };
    DThemeDarkLayout.prototype.getCornerAdjust = function () {
        return false;
    };
    DThemeDarkLayout.prototype.getMultiplicity = function () {
        return 1;
    };
    DThemeDarkLayout.prototype.getReverse = function () {
        return false;
    };
    return DThemeDarkLayout;
}(DThemeDarkBase));
export { DThemeDarkLayout };
//# sourceMappingURL=d-theme-dark-layout.js.map