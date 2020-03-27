/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodes = /** @class */ (function () {
    function FormatNodes() {
    }
    FormatNodes.prototype.format = function (target, step, date) {
        return String(date.getSeconds());
    };
    return FormatNodes;
}());
export { FormatNodes };
//# sourceMappingURL=format-nodes.js.map