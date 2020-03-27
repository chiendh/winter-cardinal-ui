/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodeParenthesis = /** @class */ (function () {
    function FormatNodeParenthesis(node) {
        this.node = node;
    }
    FormatNodeParenthesis.prototype.format = function (target, step, date) {
        var result = this.node.format(target, step, date);
        if (0 < result.length && result[0] === "-") {
            return "(" + result.substring(1, result.length) + ")";
        }
        return result;
    };
    return FormatNodeParenthesis;
}());
export { FormatNodeParenthesis };
//# sourceMappingURL=format-node-parenthesis.js.map