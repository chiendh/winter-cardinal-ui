/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDatetimes } from "../../d-picker-datetimes";
import { DThemeDarkButton } from "./d-theme-dark-button";
var formatter = function (value, caller) {
    return DPickerDatetimes.format(value, caller.getDatetimeMask());
};
var DThemeDarkButtonDatetime = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonDatetime, _super);
    function DThemeDarkButtonDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkButtonDatetime.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeDarkButtonDatetime.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeDarkButtonDatetime;
}(DThemeDarkButton));
export { DThemeDarkButtonDatetime };
//# sourceMappingURL=d-theme-dark-button-datetime.js.map