/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDates } from "../../d-picker-dates";
import { DThemeDarkButton } from "./d-theme-dark-button";
var formatter = function (value) {
    return DPickerDates.format(value);
};
var DThemeDarkButtonDate = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonDate, _super);
    function DThemeDarkButtonDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkButtonDate.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeDarkButtonDate.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeDarkButtonDate;
}(DThemeDarkButton));
export { DThemeDarkButtonDate };
//# sourceMappingURL=d-theme-dark-button-date.js.map