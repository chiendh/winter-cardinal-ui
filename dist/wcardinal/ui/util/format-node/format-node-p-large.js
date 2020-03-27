/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodeP = /** @class */ (function () {
    function FormatNodeP() {
    }
    FormatNodeP.prototype.format = function (target, step, date) {
        return ((target * 100) | 0) + "%";
    };
    return FormatNodeP;
}());
export { FormatNodeP };
//# sourceMappingURL=format-node-p-large.js.map