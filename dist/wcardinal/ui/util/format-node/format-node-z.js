/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { toPadded } from "../to-padded";
var FormatNodez = /** @class */ (function () {
    function FormatNodez() {
    }
    FormatNodez.prototype.format = function (target, step, date) {
        var z = date.getTimezoneOffset();
        var tzs = (z <= 0 ? "+" : "-");
        var tzh = toPadded(String(Math.floor(Math.abs(z) / 60)), 2, "0");
        var tzm = toPadded(String(Math.floor(Math.abs(z) % 60)), 2, "0");
        return "" + tzs + tzh + ":" + tzm;
    };
    return FormatNodez;
}());
export { FormatNodez };
//# sourceMappingURL=format-node-z.js.map