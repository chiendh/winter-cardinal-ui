/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeWhitePickerDatetime } from "./d-theme-white-picker-datetime";
var DThemeWhitePickerDate = /** @class */ (function (_super) {
    __extends(DThemeWhitePickerDate, _super);
    function DThemeWhitePickerDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePickerDate.prototype.getMask = function () {
        return DPickerDatetimeMask.DATE;
    };
    return DThemeWhitePickerDate;
}(DThemeWhitePickerDatetime));
export { DThemeWhitePickerDate };
//# sourceMappingURL=d-theme-white-picker-date.js.map