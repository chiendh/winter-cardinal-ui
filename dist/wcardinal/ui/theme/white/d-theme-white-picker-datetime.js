/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeWhitePickerTime } from "./d-theme-white-picker-time";
var MONTH_LABELS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var DAY_LABELS = [
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa"
];
var defaultLabelFormatter = function (date) {
    return MONTH_LABELS[date.getMonth()] + " " + date.getFullYear();
};
var defaultDateDecorator = function () { };
var DThemeWhitePickerDatetime = /** @class */ (function (_super) {
    __extends(DThemeWhitePickerDatetime, _super);
    function DThemeWhitePickerDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePickerDatetime.prototype.getDayLabels = function () {
        return DAY_LABELS;
    };
    DThemeWhitePickerDatetime.prototype.getDayStart = function () {
        return 0;
    };
    DThemeWhitePickerDatetime.prototype.getLabelFormatter = function () {
        return defaultLabelFormatter;
    };
    DThemeWhitePickerDatetime.prototype.getDateDecorator = function () {
        return defaultDateDecorator;
    };
    DThemeWhitePickerDatetime.prototype.getBackButtonOptions = function () {
        return {
            title: "Previous"
        };
    };
    DThemeWhitePickerDatetime.prototype.getNextButtonOptions = function () {
        return {
            title: "Next"
        };
    };
    DThemeWhitePickerDatetime.prototype.getMask = function () {
        return DPickerDatetimeMask.DATE | _super.prototype.getMask.call(this);
    };
    return DThemeWhitePickerDatetime;
}(DThemeWhitePickerTime));
export { DThemeWhitePickerDatetime };
//# sourceMappingURL=d-theme-white-picker-datetime.js.map