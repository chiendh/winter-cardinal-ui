/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDatetimes } from "../../d-picker-datetimes";
import { DThemeWhiteButton } from "./d-theme-white-button";
var formatter = function (value, caller) {
    return DPickerDatetimes.format(value, caller.getDatetimeMask());
};
var DThemeWhiteButtonDatetime = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonDatetime, _super);
    function DThemeWhiteButtonDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteButtonDatetime.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeWhiteButtonDatetime.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeWhiteButtonDatetime;
}(DThemeWhiteButton));
export { DThemeWhiteButtonDatetime };
//# sourceMappingURL=d-theme-white-button-datetime.js.map