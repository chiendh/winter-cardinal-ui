/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { toPadded } from "./util/to-padded";
var DPickerDates = /** @class */ (function () {
    function DPickerDates() {
    }
    DPickerDates.format = function (date) {
        var y = toPadded(String(date.getFullYear()), 4, "0");
        var M = toPadded(String(date.getMonth() + 1), 2, "0");
        var S = toPadded(String(date.getDate()), 2, "0");
        return y + "/" + M + "/" + S;
    };
    return DPickerDates;
}());
export { DPickerDates };
//# sourceMappingURL=d-picker-dates.js.map