/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { toPadded } from "../to-padded";
var FormatNodePadding = /** @class */ (function () {
    function FormatNodePadding(length, character, node) {
        this.length = length;
        this.character = character;
        this.node = node;
    }
    FormatNodePadding.prototype.format = function (target, step, date) {
        return toPadded(this.node.format(target, step, date), this.length, this.character);
    };
    return FormatNodePadding;
}());
export { FormatNodePadding };
//# sourceMappingURL=format-node-padding.js.map