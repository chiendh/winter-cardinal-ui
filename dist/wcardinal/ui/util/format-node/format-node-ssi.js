/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { FormatNodefsi } from "./format-node-fsi";
var FormatNodessi = /** @class */ (function (_super) {
    __extends(FormatNodessi, _super);
    function FormatNodessi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatNodessi.prototype.toAbs = function (target, step, date) {
        return Math.abs(step);
    };
    return FormatNodessi;
}(FormatNodefsi));
export { FormatNodessi };
//# sourceMappingURL=format-node-ssi.js.map