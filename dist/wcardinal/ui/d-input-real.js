/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DInputNumber } from "./d-input-number";
var DInputReal = /** @class */ (function (_super) {
    __extends(DInputReal, _super);
    function DInputReal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DInputReal.prototype.getType = function () {
        return "DInputReal";
    };
    return DInputReal;
}(DInputNumber));
export { DInputReal };
//# sourceMappingURL=d-input-real.js.map