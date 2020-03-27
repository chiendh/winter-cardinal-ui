/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodea = /** @class */ (function () {
    function FormatNodea() {
    }
    FormatNodea.prototype.format = function (target, step, date) {
        return (date.getHours() < 12 ? "am" : "pm");
    };
    return FormatNodea;
}());
export { FormatNodea };
//# sourceMappingURL=format-node-a-small.js.map