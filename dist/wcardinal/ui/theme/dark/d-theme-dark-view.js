/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DDragMode } from "../../d-drag-mode";
import { DMouseModifier } from "../../d-mouse-modifier";
var DThemeDarkView = /** @class */ (function () {
    function DThemeDarkView() {
    }
    DThemeDarkView.prototype.isWheelZoomEnabled = function () {
        return true;
    };
    DThemeDarkView.prototype.getWheelZoomSpeed = function () {
        return 0.004;
    };
    DThemeDarkView.prototype.getWheelZoomModifier = function () {
        return DMouseModifier.NOT_NONE;
    };
    DThemeDarkView.prototype.isWheelTranslationEnabled = function () {
        return true;
    };
    DThemeDarkView.prototype.getWheelTranslationSpeed = function () {
        return 14 * 0.16;
    };
    DThemeDarkView.prototype.getWheelTranslationModifier = function () {
        return DMouseModifier.NONE;
    };
    DThemeDarkView.prototype.isDblClickZoomEnabled = function () {
        return true;
    };
    DThemeDarkView.prototype.getDblClickZoomSpeed = function () {
        return 2;
    };
    DThemeDarkView.prototype.getDblClickZoomModifier = function () {
        return DMouseModifier.NONE;
    };
    DThemeDarkView.prototype.getDblClickZoomDuration = function () {
        return 333;
    };
    DThemeDarkView.prototype.getZoomMin = function () {
        return 0.05;
    };
    DThemeDarkView.prototype.getZoomMax = function () {
        return 20;
    };
    DThemeDarkView.prototype.getZoomKeepRatio = function () {
        return true;
    };
    DThemeDarkView.prototype.getDragMode = function () {
        return DDragMode.ON;
    };
    DThemeDarkView.prototype.getDragModifier = function () {
        return DMouseModifier.NONE;
    };
    DThemeDarkView.prototype.getDragDurationPosition = function () {
        return 1;
    };
    DThemeDarkView.prototype.getDragDurationScale = function () {
        return 1;
    };
    return DThemeDarkView;
}());
export { DThemeDarkView };
//# sourceMappingURL=d-theme-dark-view.js.map