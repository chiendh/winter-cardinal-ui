/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteCanvasContainer = /** @class */ (function (_super) {
    __extends(DThemeWhiteCanvasContainer, _super);
    function DThemeWhiteCanvasContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteCanvasContainer.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeWhiteCanvasContainer.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteCanvasContainer.prototype.getPaddingLeft = function () {
        return 32;
    };
    DThemeWhiteCanvasContainer.prototype.getPaddingTop = function () {
        return 32;
    };
    DThemeWhiteCanvasContainer.prototype.getPaddingRight = function () {
        return 32;
    };
    DThemeWhiteCanvasContainer.prototype.getPaddingBottom = function () {
        return 32;
    };
    DThemeWhiteCanvasContainer.prototype.isOverflowMaskEnabled = function () {
        return false;
    };
    DThemeWhiteCanvasContainer.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    DThemeWhiteCanvasContainer.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeWhiteCanvasContainer;
}(DThemeWhiteBase));
export { DThemeWhiteCanvasContainer };
//# sourceMappingURL=d-theme-white-canvas-container.js.map