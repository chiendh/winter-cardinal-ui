/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { FormatNodePrecision } from "./format-node-precision";
var FormatNodee = /** @class */ (function (_super) {
    __extends(FormatNodee, _super);
    function FormatNodee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatNodee.prototype.format = function (target, step, date) {
        return target.toExponential(this.precision);
    };
    return FormatNodee;
}(FormatNodePrecision));
export { FormatNodee };
//# sourceMappingURL=format-node-e.js.map