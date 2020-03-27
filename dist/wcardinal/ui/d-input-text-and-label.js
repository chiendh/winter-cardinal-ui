/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DInputAndLabel } from "./d-input-and-label";
import { DInputText } from "./d-input-text";
var DInputTextAndLabel = /** @class */ (function (_super) {
    __extends(DInputTextAndLabel, _super);
    function DInputTextAndLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DInputTextAndLabel.prototype.createInput = function (options) {
        return new DInputText(options);
    };
    return DInputTextAndLabel;
}(DInputAndLabel));
export { DInputTextAndLabel };
//# sourceMappingURL=d-input-text-and-label.js.map