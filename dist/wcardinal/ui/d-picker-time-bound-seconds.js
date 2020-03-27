/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
var DPickerTimeBoundSeconds = /** @class */ (function () {
    function DPickerTimeBoundSeconds(parent) {
        this._parent = parent;
    }
    DPickerTimeBoundSeconds.prototype.min = function (date) {
        var parent = this._parent;
        var lower = parent.lower;
        var lowerDate = lower.date;
        var constant = parent.constant;
        if (lowerDate != null) {
            var mask = parent.mask;
            if (mask & DPickerDatetimeMask.DATE) {
                if (lowerDate.getFullYear() < date.getFullYear()) {
                    return constant.second.min;
                }
                if (lowerDate.getMonth() < date.getMonth()) {
                    return constant.second.min;
                }
                if (lowerDate.getDate() < date.getDate()) {
                    return constant.second.min;
                }
            }
            if (mask & DPickerDatetimeMask.HOURS) {
                if (lowerDate.getHours() < date.getHours()) {
                    return constant.second.min;
                }
            }
            if (mask & DPickerDatetimeMask.MINUTES) {
                if (lowerDate.getMinutes() < date.getMinutes()) {
                    return constant.second.min;
                }
            }
            return lowerDate.getSeconds() + (lower.inclusive ? 0 : 1);
        }
        return constant.second.min;
    };
    DPickerTimeBoundSeconds.prototype.max = function (date) {
        var parent = this._parent;
        var upper = parent.upper;
        var upperDate = upper.date;
        var constant = parent.constant;
        if (upperDate != null) {
            var mask = parent.mask;
            if (mask & DPickerDatetimeMask.DATE) {
                if (date.getFullYear() < upperDate.getFullYear()) {
                    return constant.second.max;
                }
                if (date.getMonth() < upperDate.getMonth()) {
                    return constant.second.max;
                }
                if (date.getDate() < upperDate.getDate()) {
                    return constant.second.max;
                }
            }
            if (mask & DPickerDatetimeMask.HOURS) {
                if (date.getHours() < upperDate.getHours()) {
                    return constant.second.max;
                }
            }
            if (mask & DPickerDatetimeMask.MINUTES) {
                if (date.getMinutes() < upperDate.getMinutes()) {
                    return constant.second.max;
                }
            }
            return upperDate.getSeconds() - (upper.inclusive ? 0 : 1);
        }
        return constant.second.max;
    };
    return DPickerTimeBoundSeconds;
}());
export { DPickerTimeBoundSeconds };
//# sourceMappingURL=d-picker-time-bound-seconds.js.map