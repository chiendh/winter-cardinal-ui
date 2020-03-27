/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseStates } from "../../d-base-states";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";
var DThemeWhiteSliderValue = /** @class */ (function (_super) {
    __extends(DThemeWhiteSliderValue, _super);
    function DThemeWhiteSliderValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteSliderValue.prototype.getX = function () {
        return "CENTER";
    };
    DThemeWhiteSliderValue.prototype.getY = function () {
        return "CENTER";
    };
    DThemeWhiteSliderValue.prototype.getWidth = function () {
        return "AUTO";
    };
    DThemeWhiteSliderValue.prototype.getHeight = function () {
        return 20;
    };
    DThemeWhiteSliderValue.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0xAAAAAA;
        }
        return 0x3399FF;
    };
    DThemeWhiteSliderValue.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteSliderValue.prototype.getColor = function (state) {
        return 0xFFFFFF;
    };
    DThemeWhiteSliderValue.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeWhiteSliderValue.prototype.getTextAlignVertical = function () {
        return DAlignVertical.TOP;
    };
    DThemeWhiteSliderValue.prototype.getPrecision = function () {
        return 0;
    };
    return DThemeWhiteSliderValue;
}(DThemeWhiteTextBase));
export { DThemeWhiteSliderValue };
//# sourceMappingURL=d-theme-white-slider-value.js.map