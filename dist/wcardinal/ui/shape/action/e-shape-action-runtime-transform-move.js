/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
var amountDefault = function () { return 0; };
var EShapeActionRuntimeTransformMove = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformMove, _super);
    function EShapeActionRuntimeTransformMove(value, reset) {
        var _this = _super.call(this, value, reset) || this;
        _this.amount = _this.toExpression(value.amount, amountDefault, "0");
        return _this;
    }
    return EShapeActionRuntimeTransformMove;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeTransformMove };
//# sourceMappingURL=e-shape-action-runtime-transform-move.js.map