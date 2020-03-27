/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DInputAndLabel } from "./d-input-and-label";
import { DInputInteger } from "./d-input-integer";
var DInputIntegerAndLabel = /** @class */ (function (_super) {
    __extends(DInputIntegerAndLabel, _super);
    function DInputIntegerAndLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DInputIntegerAndLabel.prototype.createInput = function (options) {
        return new DInputInteger(options);
    };
    return DInputIntegerAndLabel;
}(DInputAndLabel));
export { DInputIntegerAndLabel };
//# sourceMappingURL=d-input-integer-and-label.js.map