/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodeA = /** @class */ (function () {
    function FormatNodeA() {
    }
    FormatNodeA.prototype.format = function (target, step, date) {
        return (date.getHours() < 12 ? "AM" : "PM");
    };
    return FormatNodeA;
}());
export { FormatNodeA };
//# sourceMappingURL=format-node-a-large.js.map