/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeDarkPickerTime } from "./d-theme-dark-picker-time";
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
var DThemeDarkPickerDatetime = /** @class */ (function (_super) {
    __extends(DThemeDarkPickerDatetime, _super);
    function DThemeDarkPickerDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkPickerDatetime.prototype.getDayLabels = function () {
        return DAY_LABELS;
    };
    DThemeDarkPickerDatetime.prototype.getDayStart = function () {
        return 0;
    };
    DThemeDarkPickerDatetime.prototype.getLabelFormatter = function () {
        return defaultLabelFormatter;
    };
    DThemeDarkPickerDatetime.prototype.getDateDecorator = function () {
        return defaultDateDecorator;
    };
    DThemeDarkPickerDatetime.prototype.getBackButtonOptions = function () {
        return {
            title: "Previous"
        };
    };
    DThemeDarkPickerDatetime.prototype.getNextButtonOptions = function () {
        return {
            title: "Next"
        };
    };
    DThemeDarkPickerDatetime.prototype.getMask = function () {
        return DPickerDatetimeMask.DATE | _super.prototype.getMask.call(this);
    };
    return DThemeDarkPickerDatetime;
}(DThemeDarkPickerTime));
export { DThemeDarkPickerDatetime };
//# sourceMappingURL=d-theme-dark-picker-datetime.js.map