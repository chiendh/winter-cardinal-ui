/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodePlus = /** @class */ (function () {
    function FormatNodePlus(node) {
        this.node = node;
    }
    FormatNodePlus.prototype.format = function (target, step, date) {
        var result = this.node.format(target, step, date);
        if (0 < result.length && result[0] !== "-") {
            return "+" + result;
        }
        return result;
    };
    return FormatNodePlus;
}());
export { FormatNodePlus };
//# sourceMappingURL=format-node-plus.js.map