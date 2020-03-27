/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
var DPickerTimeBoundHours = /** @class */ (function () {
    function DPickerTimeBoundHours(parent) {
        this._parent = parent;
    }
    DPickerTimeBoundHours.prototype.min = function (date) {
        var parent = this._parent;
        var lower = parent.lower;
        var lowerDate = lower.date;
        var constant = parent.constant;
        if (lowerDate != null) {
            var mask = parent.mask;
            if (mask & DPickerDatetimeMask.DATE) {
                if (lowerDate.getFullYear() < date.getFullYear()) {
                    return constant.hour.min;
                }
                if (lowerDate.getMonth() < date.getMonth()) {
                    return constant.hour.min;
                }
                if (lowerDate.getDate() < date.getDate()) {
                    return constant.hour.min;
                }
            }
            var lowerDateHours = lowerDate.getHours();
            if (lower.inclusive) {
                return lowerDateHours;
            }
            else {
                if (mask & DPickerDatetimeMask.SECONDS) {
                    if (lowerDate.getSeconds() < constant.second.max) {
                        return lowerDateHours;
                    }
                }
                if (mask & DPickerDatetimeMask.MINUTES) {
                    if (lowerDate.getMinutes() < constant.minute.max) {
                        return lowerDateHours;
                    }
                }
                return lowerDateHours + 1;
            }
        }
        return constant.hour.min;
    };
    DPickerTimeBoundHours.prototype.max = function (date) {
        var parent = this._parent;
        var upper = parent.upper;
        var upperDate = upper.date;
        var constant = parent.constant;
        if (upperDate != null) {
            var mask = parent.mask;
            if (mask & DPickerDatetimeMask.DATE) {
                if (date.getFullYear() < upperDate.getFullYear()) {
                    return constant.hour.max;
                }
                if (date.getMonth() < upperDate.getMonth()) {
                    return constant.hour.max;
                }
                if (date.getDate() < upperDate.getDate()) {
                    return constant.hour.max;
                }
            }
            var upperDateHours = upperDate.getHours();
            if (upper.inclusive) {
                return upperDateHours;
            }
            else {
                if (mask & DPickerDatetimeMask.SECONDS) {
                    if (constant.second.min < upperDate.getSeconds()) {
                        return upperDateHours;
                    }
                }
                if (mask & DPickerDatetimeMask.MINUTES) {
                    if (constant.minute.min < upperDate.getMinutes()) {
                        return upperDateHours;
                    }
                }
                return upperDateHours - 1;
            }
        }
        return constant.hour.max;
    };
    return DPickerTimeBoundHours;
}());
export { DPickerTimeBoundHours };
//# sourceMappingURL=d-picker-time-bound-hours.js.map