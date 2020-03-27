/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeDarkPickerDatetime } from "./d-theme-dark-picker-datetime";
var DThemeDarkPickerDate = /** @class */ (function (_super) {
    __extends(DThemeDarkPickerDate, _super);
    function DThemeDarkPickerDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkPickerDate.prototype.getMask = function () {
        return DPickerDatetimeMask.DATE;
    };
    return DThemeDarkPickerDate;
}(DThemeDarkPickerDatetime));
export { DThemeDarkPickerDate };
//# sourceMappingURL=d-theme-dark-picker-date.js.map