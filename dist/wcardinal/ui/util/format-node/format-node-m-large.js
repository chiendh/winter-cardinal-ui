/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodeM = /** @class */ (function () {
    function FormatNodeM() {
    }
    FormatNodeM.prototype.format = function (target, step, date) {
        return String(date.getMonth() + 1);
    };
    return FormatNodeM;
}());
export { FormatNodeM };
//# sourceMappingURL=format-node-m-large.js.map