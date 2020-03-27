/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerTimes } from "../../d-picker-times";
import { DThemeDarkButton } from "./d-theme-dark-button";
var formatter = function (value, caller) {
    return DPickerTimes.format(value, caller.getDatetimeMask());
};
var DThemeDarkButtonTime = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonTime, _super);
    function DThemeDarkButtonTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkButtonTime.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeDarkButtonTime.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeDarkButtonTime;
}(DThemeDarkButton));
export { DThemeDarkButtonTime };
//# sourceMappingURL=d-theme-dark-button-time.js.map