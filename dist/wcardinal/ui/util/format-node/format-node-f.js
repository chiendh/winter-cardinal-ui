/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { FormatNodePrecision } from "./format-node-precision";
var FormatNodef = /** @class */ (function (_super) {
    __extends(FormatNodef, _super);
    function FormatNodef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatNodef.prototype.format = function (target, step, date) {
        return target.toFixed(this.precision);
    };
    return FormatNodef;
}(FormatNodePrecision));
export { FormatNodef };
//# sourceMappingURL=format-node-f.js.map