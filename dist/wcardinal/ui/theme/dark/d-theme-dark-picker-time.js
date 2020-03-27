/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkPickerTime = /** @class */ (function (_super) {
    __extends(DThemeDarkPickerTime, _super);
    function DThemeDarkPickerTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkPickerTime.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    DThemeDarkPickerTime.prototype.getMargin = function () {
        return 8;
    };
    DThemeDarkPickerTime.prototype.getHoursOptions = function () {
        return {
            width: 100,
            title: "Hours"
        };
    };
    DThemeDarkPickerTime.prototype.getMinutesOptions = function () {
        return {
            width: 100,
            title: "Minutes"
        };
    };
    DThemeDarkPickerTime.prototype.getSecondsOptions = function () {
        return {
            width: 100,
            title: "Seconds"
        };
    };
    DThemeDarkPickerTime.prototype.getMask = function () {
        return DPickerDatetimeMask.HOURS | DPickerDatetimeMask.MINUTES;
    };
    DThemeDarkPickerTime.prototype.getWidth = function () {
        return "auto";
    };
    DThemeDarkPickerTime.prototype.getHeight = function () {
        return "auto";
    };
    DThemeDarkPickerTime.prototype.getLowerBound = function () {
        return null;
    };
    DThemeDarkPickerTime.prototype.isLowerBoundInclusive = function () {
        return false;
    };
    DThemeDarkPickerTime.prototype.getUpperBound = function () {
        return null;
    };
    DThemeDarkPickerTime.prototype.isUpperBoundInclusive = function () {
        return false;
    };
    return DThemeDarkPickerTime;
}(DThemeDarkBase));
export { DThemeDarkPickerTime };
//# sourceMappingURL=d-theme-dark-picker-time.js.map