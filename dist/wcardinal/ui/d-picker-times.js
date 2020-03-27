/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DThemes } from "./theme/d-themes";
import { toPadded } from "./util/to-padded";
var DPickerTimes = /** @class */ (function () {
    function DPickerTimes() {
    }
    DPickerTimes.format = function (date, mask) {
        var result = "";
        if (mask & DPickerDatetimeMask.HOURS) {
            result += toPadded(String(date.getHours()), 2, "0");
        }
        if (mask & DPickerDatetimeMask.MINUTES) {
            if (0 < result.length) {
                result += ":";
            }
            result += toPadded(String(date.getMinutes()), 2, "0");
        }
        if (mask & DPickerDatetimeMask.SECONDS) {
            if (0 < result.length) {
                result += ":";
            }
            result += toPadded(String(date.getSeconds()), 2, "0");
        }
        return result;
    };
    DPickerTimes.toMask = function (options) {
        return (options && options.mask != null ? options.mask :
            DThemes.getInstance().get("DPickerTime").getMask());
    };
    return DPickerTimes;
}());
export { DPickerTimes };
//# sourceMappingURL=d-picker-times.js.map