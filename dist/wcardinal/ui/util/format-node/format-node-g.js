/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { FormatNodePrecision } from "./format-node-precision";
var FormatNodeg = /** @class */ (function (_super) {
    __extends(FormatNodeg, _super);
    function FormatNodeg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatNodeg.prototype.format = function (target, step, date) {
        return target.toPrecision(this.precision);
    };
    return FormatNodeg;
}(FormatNodePrecision));
export { FormatNodeg };
//# sourceMappingURL=format-node-g.js.map