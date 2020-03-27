/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
var EShapeActionRuntimeTransformMoveRelativeY = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformMoveRelativeY, _super);
    function EShapeActionRuntimeTransformMoveRelativeY(action) {
        return _super.call(this, action, EShapeRuntimeReset.POSITION_Y) || this;
    }
    EShapeActionRuntimeTransformMoveRelativeY.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var amount = this.amount(shape, time);
            var writtenPositionY = ((runtime.written & EShapeRuntimeReset.POSITION_Y) !== 0);
            var position = shape.transform.position;
            var oldPositionY = (writtenPositionY ? position.y : runtime.y);
            position.y = oldPositionY + amount;
            runtime.written |= this.reset;
        }
    };
    return EShapeActionRuntimeTransformMoveRelativeY;
}(EShapeActionRuntimeTransformMove));
export { EShapeActionRuntimeTransformMoveRelativeY };
//# sourceMappingURL=e-shape-action-runtime-transform-move-relative-y.js.map