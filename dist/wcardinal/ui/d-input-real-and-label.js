/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DInputAndLabel } from "./d-input-and-label";
import { DInputReal } from "./d-input-real";
var DInputRealAndLabel = /** @class */ (function (_super) {
    __extends(DInputRealAndLabel, _super);
    function DInputRealAndLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DInputRealAndLabel.prototype.createInput = function (options) {
        return new DInputReal(options);
    };
    return DInputRealAndLabel;
}(DInputAndLabel));
export { DInputRealAndLabel };
//# sourceMappingURL=d-input-real-and-label.js.map