/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound } from "./d-picker-time-bound";
import { DPickerTimeBoundHours } from "./d-picker-time-bound-hours";
import { DPickerTimeBoundMinutes } from "./d-picker-time-bound-minutes";
import { DPickerTimeBoundSeconds } from "./d-picker-time-bound-seconds";
var DPickerTimeBounds = /** @class */ (function () {
    function DPickerTimeBounds(options, onChange) {
        this.constant = this.newConstant();
        this.lower = new DPickerTimeBound(options && options.lower, onChange);
        this.upper = new DPickerTimeBound(options && options.upper, onChange);
        this.mask = DPickerDatetimeMask.ALL;
        this.hours = new DPickerTimeBoundHours(this);
        this.minutes = new DPickerTimeBoundMinutes(this);
        this.seconds = new DPickerTimeBoundSeconds(this);
    }
    DPickerTimeBounds.prototype.newConstant = function () {
        return {
            second: {
                min: 0,
                max: 59
            },
            minute: {
                min: 0,
                max: 59
            },
            hour: {
                min: 0,
                max: 23
            }
        };
    };
    DPickerTimeBounds.prototype.adjust = function (date) {
        var result = this.test(date);
        if (result < 0) {
            var lower = this.lower;
            var lowerDate = lower.date;
            if (lowerDate) {
                date.setTime(lowerDate.getTime());
                if (!lower.inclusive) {
                    var mask = this.mask;
                    if (mask & DPickerDatetimeMask.SECONDS) {
                        date.setSeconds(lowerDate.getSeconds() + 1);
                    }
                    else if (mask & DPickerDatetimeMask.MINUTES) {
                        date.setMinutes(lowerDate.getMinutes() + 1);
                    }
                    else if (mask & DPickerDatetimeMask.HOURS) {
                        date.setHours(lowerDate.getHours() + 1);
                    }
                    else if (mask & DPickerDatetimeMask.DATE) {
                        date.setDate(lowerDate.getDate() + 1);
                    }
                }
                return true;
            }
        }
        else if (0 < result) {
            var upper = this.upper;
            var upperDate = upper.date;
            if (upperDate) {
                date.setTime(upperDate.getTime());
                if (!upper.inclusive) {
                    var mask = this.mask;
                    if (mask & DPickerDatetimeMask.SECONDS) {
                        date.setSeconds(upperDate.getSeconds() - 1);
                    }
                    else if (mask & DPickerDatetimeMask.MINUTES) {
                        date.setMinutes(upperDate.getMinutes() - 1);
                    }
                    else if (mask & DPickerDatetimeMask.HOURS) {
                        date.setHours(upperDate.getHours() - 1);
                    }
                    else if (mask & DPickerDatetimeMask.DATE) {
                        date.setDate(upperDate.getDate() - 1);
                    }
                }
                return true;
            }
        }
        return false;
    };
    DPickerTimeBounds.prototype.compare = function (a, b) {
        var mask = this.mask;
        if (mask & DPickerDatetimeMask.DATE) {
            var ay = a.getFullYear();
            var by = b.getFullYear();
            if (ay !== by) {
                return (ay < by ? -1 : +1);
            }
            var am = a.getMonth();
            var bm = b.getMonth();
            if (am !== bm) {
                return (am < bm ? -1 : +1);
            }
            var ad = a.getDate();
            var bd = b.getDate();
            if (ad !== bd) {
                return (ad < bd ? -1 : +1);
            }
        }
        if (mask & DPickerDatetimeMask.HOURS) {
            var ah = a.getHours();
            var bh = b.getHours();
            if (ah !== bh) {
                return (ah < bh ? -1 : +1);
            }
        }
        if (mask & DPickerDatetimeMask.MINUTES) {
            var am = a.getMinutes();
            var bm = b.getMinutes();
            if (am !== bm) {
                return (am < bm ? -1 : +1);
            }
        }
        if (mask & DPickerDatetimeMask.SECONDS) {
            var ad = a.getSeconds();
            var bd = b.getSeconds();
            if (ad !== bd) {
                return (ad < bd ? -1 : +1);
            }
        }
        return 0;
    };
    DPickerTimeBounds.prototype.test = function (date) {
        // Lower bound
        var lower = this.lower;
        var lowerDate = lower.date;
        if (lowerDate != null) {
            var result = this.compare(lowerDate, date);
            if (lower.inclusive) {
                return (result <= 0 ? 0 : -1);
            }
            else {
                return (result < 0 ? 0 : -1);
            }
        }
        // Upper bound
        var upper = this.upper;
        var upperDate = upper.date;
        if (upperDate != null) {
            var result = this.compare(date, upperDate);
            if (upper.inclusive) {
                return (result <= 0 ? 0 : +1);
            }
            else {
                return (result < 0 ? 0 : +1);
            }
        }
        return 0;
    };
    DPickerTimeBounds.prototype.contains = function (date) {
        return this.test(date) === 0;
    };
    return DPickerTimeBounds;
}());
export { DPickerTimeBounds };
//# sourceMappingURL=d-picker-time-bounds.js.map