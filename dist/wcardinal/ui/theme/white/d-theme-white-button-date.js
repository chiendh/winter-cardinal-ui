/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDates } from "../../d-picker-dates";
import { DThemeWhiteButton } from "./d-theme-white-button";
var formatter = function (value) {
    return DPickerDates.format(value);
};
var DThemeWhiteButtonDate = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonDate, _super);
    function DThemeWhiteButtonDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteButtonDate.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeWhiteButtonDate.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeWhiteButtonDate;
}(DThemeWhiteButton));
export { DThemeWhiteButtonDate };
//# sourceMappingURL=d-theme-white-button-date.js.map