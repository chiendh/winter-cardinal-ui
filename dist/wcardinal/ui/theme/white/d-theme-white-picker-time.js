/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhitePickerTime = /** @class */ (function (_super) {
    __extends(DThemeWhitePickerTime, _super);
    function DThemeWhitePickerTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePickerTime.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    DThemeWhitePickerTime.prototype.getMargin = function () {
        return 8;
    };
    DThemeWhitePickerTime.prototype.getHoursOptions = function () {
        return {
            width: 100,
            title: "Hours"
        };
    };
    DThemeWhitePickerTime.prototype.getMinutesOptions = function () {
        return {
            width: 100,
            title: "Minutes"
        };
    };
    DThemeWhitePickerTime.prototype.getSecondsOptions = function () {
        return {
            width: 100,
            title: "Seconds"
        };
    };
    DThemeWhitePickerTime.prototype.getMask = function () {
        return DPickerDatetimeMask.HOURS | DPickerDatetimeMask.MINUTES;
    };
    DThemeWhitePickerTime.prototype.getWidth = function () {
        return "auto";
    };
    DThemeWhitePickerTime.prototype.getHeight = function () {
        return "auto";
    };
    DThemeWhitePickerTime.prototype.getLowerBound = function () {
        return null;
    };
    DThemeWhitePickerTime.prototype.isLowerBoundInclusive = function () {
        return false;
    };
    DThemeWhitePickerTime.prototype.getUpperBound = function () {
        return null;
    };
    DThemeWhitePickerTime.prototype.isUpperBoundInclusive = function () {
        return false;
    };
    return DThemeWhitePickerTime;
}(DThemeWhiteBase));
export { DThemeWhitePickerTime };
//# sourceMappingURL=d-theme-white-picker-time.js.map