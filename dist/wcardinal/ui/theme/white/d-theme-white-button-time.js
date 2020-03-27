/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerTimes } from "../../d-picker-times";
import { DThemeWhiteButton } from "./d-theme-white-button";
var formatter = function (value, caller) {
    return DPickerTimes.format(value, caller.getDatetimeMask());
};
var DThemeWhiteButtonTime = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonTime, _super);
    function DThemeWhiteButtonTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteButtonTime.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeWhiteButtonTime.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeWhiteButtonTime;
}(DThemeWhiteButton));
export { DThemeWhiteButtonTime };
//# sourceMappingURL=d-theme-white-button-time.js.map