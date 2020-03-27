/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
var EShapeActionRuntimeTransformMoveAbsoluteY = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformMoveAbsoluteY, _super);
    function EShapeActionRuntimeTransformMoveAbsoluteY(value) {
        return _super.call(this, value, EShapeRuntimeReset.POSITION_Y) || this;
    }
    EShapeActionRuntimeTransformMoveAbsoluteY.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var amount = this.amount(shape, time);
            shape.transform.position.y = amount;
            runtime.written |= this.reset;
        }
    };
    return EShapeActionRuntimeTransformMoveAbsoluteY;
}(EShapeActionRuntimeTransformMove));
export { EShapeActionRuntimeTransformMoveAbsoluteY };
//# sourceMappingURL=e-shape-action-runtime-transform-move-absolute-y.js.map