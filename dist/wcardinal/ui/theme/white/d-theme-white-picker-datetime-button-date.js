/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
var DThemeWhitePickerDatetimeButtonDate = /** @class */ (function (_super) {
    __extends(DThemeWhitePickerDatetimeButtonDate, _super);
    function DThemeWhitePickerDatetimeButtonDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePickerDatetimeButtonDate.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeWhitePickerDatetimeButtonDate.prototype.getTextStyleClipping = function () {
        return false;
    };
    DThemeWhitePickerDatetimeButtonDate.prototype.getWidth = function () {
        return 30;
    };
    DThemeWhitePickerDatetimeButtonDate.prototype.getHeight = function () {
        return 30;
    };
    DThemeWhitePickerDatetimeButtonDate.prototype.isToggle = function () {
        return true;
    };
    return DThemeWhitePickerDatetimeButtonDate;
}(DThemeWhiteButtonAmbient));
export { DThemeWhitePickerDatetimeButtonDate };
//# sourceMappingURL=d-theme-white-picker-datetime-button-date.js.map