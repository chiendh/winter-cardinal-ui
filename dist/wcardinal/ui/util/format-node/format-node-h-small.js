/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodeh = /** @class */ (function () {
    function FormatNodeh() {
    }
    FormatNodeh.prototype.format = function (target, step, date) {
        return String(date.getHours() % 12);
    };
    return FormatNodeh;
}());
export { FormatNodeh };
//# sourceMappingURL=format-node-h-small.js.map