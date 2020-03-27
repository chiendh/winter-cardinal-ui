/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkCanvasContainer = /** @class */ (function (_super) {
    __extends(DThemeDarkCanvasContainer, _super);
    function DThemeDarkCanvasContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkCanvasContainer.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeDarkCanvasContainer.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkCanvasContainer.prototype.getPaddingLeft = function () {
        return 50;
    };
    DThemeDarkCanvasContainer.prototype.getPaddingTop = function () {
        return 50;
    };
    DThemeDarkCanvasContainer.prototype.getPaddingRight = function () {
        return 50;
    };
    DThemeDarkCanvasContainer.prototype.getPaddingBottom = function () {
        return 50;
    };
    DThemeDarkCanvasContainer.prototype.isOverflowMaskEnabled = function () {
        return false;
    };
    DThemeDarkCanvasContainer.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkCanvasContainer;
}(DThemeDarkBase));
export { DThemeDarkCanvasContainer };
//# sourceMappingURL=d-theme-dark-canvas-container.js.map