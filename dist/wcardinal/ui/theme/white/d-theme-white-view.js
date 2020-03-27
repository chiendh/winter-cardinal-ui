/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DDragMode } from "../../d-drag-mode";
import { DMouseModifier } from "../../d-mouse-modifier";
var DThemeWhiteView = /** @class */ (function () {
    function DThemeWhiteView() {
    }
    DThemeWhiteView.prototype.isWheelZoomEnabled = function () {
        return true;
    };
    DThemeWhiteView.prototype.getWheelZoomSpeed = function () {
        return 0.004;
    };
    DThemeWhiteView.prototype.getWheelZoomModifier = function () {
        return DMouseModifier.NOT_NONE;
    };
    DThemeWhiteView.prototype.isWheelTranslationEnabled = function () {
        return true;
    };
    DThemeWhiteView.prototype.getWheelTranslationSpeed = function () {
        return 14 * 0.16;
    };
    DThemeWhiteView.prototype.getWheelTranslationModifier = function () {
        return DMouseModifier.NONE;
    };
    DThemeWhiteView.prototype.isDblClickZoomEnabled = function () {
        return true;
    };
    DThemeWhiteView.prototype.getDblClickZoomSpeed = function () {
        return 2;
    };
    DThemeWhiteView.prototype.getDblClickZoomModifier = function () {
        return DMouseModifier.NONE;
    };
    DThemeWhiteView.prototype.getDblClickZoomDuration = function () {
        return 333;
    };
    DThemeWhiteView.prototype.getZoomMin = function () {
        return 0.05;
    };
    DThemeWhiteView.prototype.getZoomMax = function () {
        return 20;
    };
    DThemeWhiteView.prototype.getZoomKeepRatio = function () {
        return true;
    };
    DThemeWhiteView.prototype.getDragMode = function () {
        return DDragMode.ON;
    };
    DThemeWhiteView.prototype.getDragModifier = function () {
        return DMouseModifier.NONE;
    };
    DThemeWhiteView.prototype.getDragDurationPosition = function () {
        return 1;
    };
    DThemeWhiteView.prototype.getDragDurationScale = function () {
        return 1;
    };
    return DThemeWhiteView;
}());
export { DThemeWhiteView };
//# sourceMappingURL=d-theme-white-view.js.map