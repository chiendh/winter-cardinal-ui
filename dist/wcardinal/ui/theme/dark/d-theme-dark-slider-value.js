/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";
var DThemeDarkSliderValue = /** @class */ (function (_super) {
    __extends(DThemeDarkSliderValue, _super);
    function DThemeDarkSliderValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkSliderValue.prototype.getX = function () {
        return "CENTER";
    };
    DThemeDarkSliderValue.prototype.getY = function () {
        return "CENTER";
    };
    DThemeDarkSliderValue.prototype.getWidth = function () {
        return "AUTO";
    };
    DThemeDarkSliderValue.prototype.getHeight = function () {
        return 20;
    };
    DThemeDarkSliderValue.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0x646464;
        }
        return DThemeDarkConstants.HIGHLIGHT_COLOR;
    };
    DThemeDarkSliderValue.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkSliderValue.prototype.getColor = function (state) {
        return 0x000000;
    };
    DThemeDarkSliderValue.prototype.getAlpha = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0.38;
        }
        return 1;
    };
    DThemeDarkSliderValue.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeDarkSliderValue.prototype.getTextAlignVertical = function () {
        return DAlignVertical.TOP;
    };
    DThemeDarkSliderValue.prototype.getPrecision = function () {
        return 0;
    };
    return DThemeDarkSliderValue;
}(DThemeDarkTextBase));
export { DThemeDarkSliderValue };
//# sourceMappingURL=d-theme-dark-slider-value.js.map