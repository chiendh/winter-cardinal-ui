/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DInputNumber } from "./d-input-number";
var DInputInteger = /** @class */ (function (_super) {
    __extends(DInputInteger, _super);
    function DInputInteger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DInputInteger.prototype.getType = function () {
        return "DInputInteger";
    };
    return DInputInteger;
}(DInputNumber));
export { DInputInteger };
//# sourceMappingURL=d-input-integer.js.map