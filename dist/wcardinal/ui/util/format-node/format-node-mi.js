/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodemi = /** @class */ (function () {
    function FormatNodemi() {
    }
    FormatNodemi.prototype.format = function (target, step, date) {
        return String(date.getMilliseconds());
    };
    return FormatNodemi;
}());
export { FormatNodemi };
//# sourceMappingURL=format-node-mi.js.map