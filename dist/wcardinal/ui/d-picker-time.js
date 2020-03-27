/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DInputInteger } from "./d-input-integer";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBounds } from "./d-picker-time-bounds";
import { DText } from "./d-text";
var toBoundOptions = function (options, date, inclusive) {
    if (options) {
        return {
            date: (options.date !== undefined ? options.date : date),
            inclusive: (options.inclusive !== undefined ? options.inclusive : inclusive)
        };
    }
    return {
        date: date,
        inclusive: inclusive
    };
};
var toBoundsOptions = function (theme, options) {
    if (options) {
        return {
            lower: toBoundOptions(options.lower, theme.getLowerBound(), theme.isLowerBoundInclusive()),
            upper: toBoundOptions(options.upper, theme.getUpperBound(), theme.isUpperBoundInclusive())
        };
    }
    return {
        lower: {
            date: theme.getLowerBound(),
            inclusive: theme.isLowerBoundInclusive()
        },
        upper: {
            date: theme.getUpperBound(),
            inclusive: theme.isUpperBoundInclusive()
        }
    };
};
var DPickerTime = /** @class */ (function (_super) {
    __extends(DPickerTime, _super);
    function DPickerTime(options) {
        var _this = _super.call(this, options) || this;
        _this.onNewChanged();
        return _this;
    }
    DPickerTime.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.UNFOCUSABLE, true);
        var theme = this.theme;
        this._dateCurrent = new Date();
        var dateCurrentTime = this._dateCurrent.getTime();
        this._dateNew = new Date(dateCurrentTime);
        this._dateBounds = new DPickerTimeBounds(toBoundsOptions(theme, options && options.bounds), function () { _this.onNewChanged(); });
        var margin = (options && options.margin != null ?
            options.margin : theme.getMargin());
        new DLayoutVertical({
            parent: this,
            x: "padding", y: "padding",
            width: "auto", height: "auto",
            margin: margin,
            children: this.newChildren(theme, options, margin)
        });
    };
    Object.defineProperty(DPickerTime.prototype, "current", {
        get: function () {
            return this._dateCurrent;
        },
        set: function (dateCurrent) {
            if (this._dateCurrent.getTime() !== dateCurrent.getTime()) {
                this._dateCurrent = dateCurrent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerTime.prototype, "new", {
        get: function () {
            return this._dateNew;
        },
        set: function (dateNew) {
            if (this._dateNew.getTime() !== dateNew.getTime()) {
                this._dateNew = dateNew;
                this.onNewChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerTime.prototype, "bounds", {
        get: function () {
            return this._dateBounds;
        },
        enumerable: true,
        configurable: true
    });
    DPickerTime.prototype.hasHours = function () {
        return this._inputHours != null;
    };
    DPickerTime.prototype.hasMinutes = function () {
        return this._inputMinutes != null;
    };
    DPickerTime.prototype.hasSeconds = function () {
        return this._inputSeconds != null;
    };
    DPickerTime.prototype.reset = function () {
        var currentTime = this._dateCurrent.getTime();
        this._dateNew.setTime(currentTime);
        this.onReset();
    };
    DPickerTime.prototype.onReset = function () {
        this.onNewChanged();
    };
    DPickerTime.prototype.onNewChanged = function () {
        var dateNew = this._dateNew;
        var dateBounds = this._dateBounds;
        dateBounds.adjust(this._dateNew);
        var inputHours = this._inputHours;
        if (inputHours) {
            var hours = dateBounds.hours;
            inputHours.value = dateNew.getHours();
            inputHours.min = hours.min(dateNew);
            inputHours.max = hours.max(dateNew);
        }
        var inputMinutes = this._inputMinutes;
        if (inputMinutes) {
            var minutes = dateBounds.minutes;
            inputMinutes.value = dateNew.getMinutes();
            inputMinutes.min = minutes.min(dateNew);
            inputMinutes.max = minutes.max(dateNew);
        }
        var inputSeconds = this._inputSeconds;
        if (inputSeconds) {
            var seconds = dateBounds.seconds;
            inputSeconds.value = dateNew.getSeconds();
            inputSeconds.min = seconds.min(dateNew);
            inputSeconds.max = seconds.max(dateNew);
        }
    };
    DPickerTime.prototype.newChildren = function (theme, options, margin) {
        var mask = ((options && options.mask != null) ? options.mask : theme.getMask());
        this._dateBounds.mask = mask;
        this._inputHours = ((mask & DPickerDatetimeMask.HOURS) ? this.newInputHours(theme, options) : null);
        this._inputMinutes = ((mask & DPickerDatetimeMask.MINUTES) ? this.newInputMinutes(theme, options) : null);
        this._inputSeconds = ((mask & DPickerDatetimeMask.SECONDS) ? this.newInputSeconds(theme, options) : null);
        return [
            this.newTimeLayout(this._inputHours, this._inputMinutes, this._inputSeconds, margin)
        ];
    };
    DPickerTime.prototype.newTimeLayout = function (hours, minutes, seconds, margin) {
        var children = this.newTimeLayoutChildren(hours, minutes, seconds);
        if (0 < children.length) {
            return new DLayoutHorizontal({
                width: this.getTimeLayoutWidth(),
                height: this.getTimeLayoutHeight(),
                margin: margin,
                children: children
            });
        }
        return null;
    };
    DPickerTime.prototype.getTimeLayoutWidth = function () {
        return "auto";
    };
    DPickerTime.prototype.getTimeLayoutHeight = function () {
        return "auto";
    };
    DPickerTime.prototype.newTimeLayoutChildren = function (hours, minutes, seconds) {
        var result = [];
        if (hours != null) {
            result.push(hours);
        }
        if (minutes != null) {
            if (0 < result.length) {
                result.push(this.newMinuteSeparator());
            }
            result.push(minutes);
        }
        if (seconds != null) {
            if (0 < result.length) {
                result.push(this.newSecondSeparator());
            }
            result.push(seconds);
        }
        return result;
    };
    DPickerTime.prototype.newMinuteSeparator = function () {
        return new DText({
            width: "auto",
            text: {
                value: this.getMinuteSeparator()
            }
        });
    };
    DPickerTime.prototype.getMinuteSeparator = function () {
        return ":";
    };
    DPickerTime.prototype.newSecondSeparator = function () {
        return new DText({
            width: "auto",
            text: {
                value: this.getSecondSeparator()
            }
        });
    };
    DPickerTime.prototype.getSecondSeparator = function () {
        return ":";
    };
    DPickerTime.prototype.adjustInputOptions = function (theme, options, max) {
        if (options.step == null) {
            options.step = 1;
        }
        if (options.min == null) {
            options.min = 0;
        }
        if (options.max == null) {
            options.max = max;
        }
        return options;
    };
    DPickerTime.prototype.newInputHours = function (theme, options) {
        var _this = this;
        var inputOptions = (options && options.hours) || theme.getHoursOptions();
        var max = this._dateBounds.constant.hour.max;
        var input = new DInputInteger(this.adjustInputOptions(theme, inputOptions, max));
        input.on("change", function (value) {
            _this.onHoursChanged(value);
        });
        return input;
    };
    DPickerTime.prototype.onHoursChanged = function (value) {
        var dateNew = this._dateNew;
        dateNew.setHours(value);
        this.onNewChanged();
    };
    DPickerTime.prototype.newInputMinutes = function (theme, options) {
        var _this = this;
        var inputOptions = (options && options.minutes) || theme.getMinutesOptions();
        var max = this._dateBounds.constant.minute.max;
        var input = new DInputInteger(this.adjustInputOptions(theme, inputOptions, max));
        input.on("change", function (value) {
            _this.onMinutesChanged(value);
        });
        return input;
    };
    DPickerTime.prototype.onMinutesChanged = function (value) {
        var dateNew = this._dateNew;
        dateNew.setMinutes(value);
        this.onNewChanged();
    };
    DPickerTime.prototype.newInputSeconds = function (theme, options) {
        var _this = this;
        var inputOptions = (options && options.seconds) || theme.getSecondsOptions();
        var max = this._dateBounds.constant.second.max;
        var input = new DInputInteger(this.adjustInputOptions(theme, inputOptions, max));
        input.on("change", function (value) {
            _this.onSecondsChanged(value);
        });
        return input;
    };
    DPickerTime.prototype.onSecondsChanged = function (value) {
        this._dateNew.setSeconds(value);
    };
    DPickerTime.prototype.getType = function () {
        return "DPickerTime";
    };
    return DPickerTime;
}(DBase));
export { DPickerTime };
//# sourceMappingURL=d-picker-time.js.map