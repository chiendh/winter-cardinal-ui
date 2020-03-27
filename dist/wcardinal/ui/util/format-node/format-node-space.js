/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodeSpace = /** @class */ (function () {
    function FormatNodeSpace(node) {
        this.node = node;
    }
    FormatNodeSpace.prototype.format = function (target, step, date) {
        var result = this.node.format(target, step, date);
        if (0 < result.length && result[0] !== "-") {
            return " " + result;
        }
        return result;
    };
    return FormatNodeSpace;
}());
export { FormatNodeSpace };
//# sourceMappingURL=format-node-space.js.map