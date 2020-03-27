/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
var DThemeDarkPickerDatetimeButtonDate = /** @class */ (function (_super) {
    __extends(DThemeDarkPickerDatetimeButtonDate, _super);
    function DThemeDarkPickerDatetimeButtonDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkPickerDatetimeButtonDate.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isActive(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        return _super.prototype.getBackgroundColor.call(this, state);
    };
    DThemeDarkPickerDatetimeButtonDate.prototype.getColor = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0x000000;
        }
        return _super.prototype.getColor.call(this, state);
    };
    DThemeDarkPickerDatetimeButtonDate.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeDarkPickerDatetimeButtonDate.prototype.getTextStyleClipping = function () {
        return false;
    };
    DThemeDarkPickerDatetimeButtonDate.prototype.getWidth = function () {
        return 30;
    };
    DThemeDarkPickerDatetimeButtonDate.prototype.getHeight = function () {
        return 30;
    };
    DThemeDarkPickerDatetimeButtonDate.prototype.isToggle = function () {
        return true;
    };
    return DThemeDarkPickerDatetimeButtonDate;
}(DThemeDarkButtonAmbient));
export { DThemeDarkPickerDatetimeButtonDate };
//# sourceMappingURL=d-theme-dark-picker-datetime-button-date.js.map