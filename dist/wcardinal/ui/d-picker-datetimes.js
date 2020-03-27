/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DPickerDates } from "./d-picker-dates";
import { DPickerTimes } from "./d-picker-times";
import { DThemes } from "./theme/d-themes";
var DPickerDatetimes = /** @class */ (function () {
    function DPickerDatetimes() {
    }
    DPickerDatetimes.format = function (date, mask) {
        var hms = DPickerTimes.format(date, mask);
        if (0 < hms.length) {
            return DPickerDates.format(date) + " " + hms;
        }
        else {
            return "" + DPickerDates.format(date);
        }
    };
    DPickerDatetimes.toMask = function (options) {
        return (options && options.mask != null ? options.mask :
            DThemes.getInstance().get("DPickerDatetime").getMask());
    };
    return DPickerDatetimes;
}());
export { DPickerDatetimes };
//# sourceMappingURL=d-picker-datetimes.js.map