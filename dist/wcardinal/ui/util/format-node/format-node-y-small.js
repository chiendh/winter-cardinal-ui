/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodey = /** @class */ (function () {
    function FormatNodey() {
    }
    FormatNodey.prototype.format = function (target, step, date) {
        return String(date.getFullYear() % 100);
    };
    return FormatNodey;
}());
export { FormatNodey };
//# sourceMappingURL=format-node-y-small.js.map