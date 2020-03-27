/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DInput } from "./d-input";
var DInputText = /** @class */ (function (_super) {
    __extends(DInputText, _super);
    function DInputText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DInputText.prototype.toValue = function (valueAsString) {
        return this._editingUnformatter(valueAsString, this);
    };
    DInputText.prototype.getInputType = function () {
        return "text";
    };
    DInputText.prototype.getType = function () {
        return "DInputText";
    };
    return DInputText;
}(DInput));
export { DInputText };
//# sourceMappingURL=d-input-text.js.map