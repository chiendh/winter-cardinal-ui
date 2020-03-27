/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
var EShapeActionRuntimeTransformMoveAbsoluteX = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformMoveAbsoluteX, _super);
    function EShapeActionRuntimeTransformMoveAbsoluteX(value) {
        return _super.call(this, value, EShapeRuntimeReset.POSITION_X) || this;
    }
    EShapeActionRuntimeTransformMoveAbsoluteX.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var amount = this.amount(shape, time);
            shape.transform.position.x = amount;
            runtime.written |= this.reset;
        }
    };
    return EShapeActionRuntimeTransformMoveAbsoluteX;
}(EShapeActionRuntimeTransformMove));
export { EShapeActionRuntimeTransformMoveAbsoluteX };
//# sourceMappingURL=e-shape-action-runtime-transform-move-absolute-x.js.map