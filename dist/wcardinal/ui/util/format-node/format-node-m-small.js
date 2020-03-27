/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodem = /** @class */ (function () {
    function FormatNodem() {
    }
    FormatNodem.prototype.format = function (target, step, date) {
        return String(date.getMinutes());
    };
    return FormatNodem;
}());
export { FormatNodem };
//# sourceMappingURL=format-node-m-small.js.map