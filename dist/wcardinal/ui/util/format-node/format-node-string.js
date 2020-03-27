/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodeString = /** @class */ (function () {
    function FormatNodeString(str) {
        this.str = str;
    }
    FormatNodeString.prototype.format = function (target, step, date) {
        return this.str;
    };
    return FormatNodeString;
}());
export { FormatNodeString };
//# sourceMappingURL=format-node-string.js.map