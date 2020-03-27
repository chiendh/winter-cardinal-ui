/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButtonAmbient } from "./d-button-ambient";
var DPickerDatetimeButtonDate = /** @class */ (function (_super) {
    __extends(DPickerDatetimeButtonDate, _super);
    function DPickerDatetimeButtonDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DPickerDatetimeButtonDate.prototype.onToggleStart = function () {
        if (!this.isActive()) {
            this.setActive(true);
        }
    };
    DPickerDatetimeButtonDate.prototype.onToggleEnd = function () {
        this.emit(this.isActive() ? "active" : "inactive", this);
    };
    DPickerDatetimeButtonDate.prototype.getType = function () {
        return "DPickerDatetimeButtonDate";
    };
    return DPickerDatetimeButtonDate;
}(DButtonAmbient));
export { DPickerDatetimeButtonDate };
//# sourceMappingURL=d-picker-datetime-button-date.js.map