/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
var textDefault = function () { return ""; };
var EShapeActionRuntimeChangeTextText = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeTextText, _super);
    function EShapeActionRuntimeChangeTextText(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.TEXT) || this;
        _this.text = _this.toExpression(value.value, textDefault, "\"\"");
        return _this;
    }
    EShapeActionRuntimeChangeTextText.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            shape.text.value = String(this.text(shape, time));
            runtime.written |= this.reset;
        }
    };
    return EShapeActionRuntimeChangeTextText;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeChangeTextText };
//# sourceMappingURL=e-shape-action-runtime-change-text-text.js.map