/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodeRP = /** @class */ (function () {
    function FormatNodeRP() {
    }
    FormatNodeRP.prototype.format = function (target, step, date) {
        return Math.round(target * 100) + "%";
    };
    return FormatNodeRP;
}());
export { FormatNodeRP };
//# sourceMappingURL=format-node-rp-large.js.map