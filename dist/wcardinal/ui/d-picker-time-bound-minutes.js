/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
var DPickerTimeBoundMinutes = /** @class */ (function () {
    function DPickerTimeBoundMinutes(parent) {
        this._parent = parent;
    }
    DPickerTimeBoundMinutes.prototype.min = function (date) {
        var parent = this._parent;
        var lower = parent.lower;
        var lowerDate = lower.date;
        var constant = parent.constant;
        if (lowerDate != null) {
            var mask = parent.mask;
            if (mask & DPickerDatetimeMask.DATE) {
                if (lowerDate.getFullYear() < date.getFullYear()) {
                    return constant.minute.min;
                }
                if (lowerDate.getMonth() < date.getMonth()) {
                    return constant.minute.min;
                }
                if (lowerDate.getDate() < date.getDate()) {
                    return constant.minute.min;
                }
            }
            if (mask & DPickerDatetimeMask.HOURS) {
                if (lowerDate.getHours() < date.getHours()) {
                    return constant.minute.min;
                }
            }
            var lowerDateMinutes = lowerDate.getMinutes();
            if (lower.inclusive) {
                return lowerDateMinutes;
            }
            else {
                if (mask & DPickerDatetimeMask.SECONDS) {
                    if (lowerDate.getSeconds() < constant.second.max) {
                        return lowerDateMinutes;
                    }
                }
                return lowerDateMinutes + 1;
            }
        }
        return constant.minute.min;
    };
    DPickerTimeBoundMinutes.prototype.max = function (date) {
        var parent = this._parent;
        var upper = parent.upper;
        var upperDate = upper.date;
        var constant = parent.constant;
        if (upperDate != null) {
            var mask = parent.mask;
            if (mask & DPickerDatetimeMask.DATE) {
                if (date.getFullYear() < upperDate.getFullYear()) {
                    return constant.minute.max;
                }
                if (date.getMonth() < upperDate.getMonth()) {
                    return constant.minute.max;
                }
                if (date.getDate() < upperDate.getDate()) {
                    return constant.minute.max;
                }
            }
            if (mask & DPickerDatetimeMask.HOURS) {
                if (date.getHours() < upperDate.getHours()) {
                    return constant.minute.max;
                }
            }
            var upperDateMinutes = upperDate.getMinutes();
            if (upper.inclusive) {
                return upperDateMinutes;
            }
            else {
                if (mask & DPickerDatetimeMask.SECONDS) {
                    if (constant.second.min < upperDate.getSeconds()) {
                        return upperDateMinutes;
                    }
                }
                return upperDateMinutes - 1;
            }
        }
        return constant.minute.max;
    };
    return DPickerTimeBoundMinutes;
}());
export { DPickerTimeBoundMinutes };
//# sourceMappingURL=d-picker-time-bound-minutes.js.map