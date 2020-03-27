/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
var conditionDefault = function () { return true; };
var EShapeActionRuntimeConditional = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeConditional, _super);
    function EShapeActionRuntimeConditional(value, reset) {
        var _this = _super.call(this, reset) || this;
        _this.condition = _this.toExpression(value.condition, conditionDefault, "true");
        return _this;
    }
    return EShapeActionRuntimeConditional;
}(EShapeActionRuntime));
export { EShapeActionRuntimeConditional };
//# sourceMappingURL=e-shape-action-runtime-conditional.js.map