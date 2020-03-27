/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
var EShapeActionRuntimeTransformMoveRelativeX = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformMoveRelativeX, _super);
    function EShapeActionRuntimeTransformMoveRelativeX(value) {
        return _super.call(this, value, EShapeRuntimeReset.POSITION_X) || this;
    }
    EShapeActionRuntimeTransformMoveRelativeX.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var amount = this.amount(shape, time);
            var writtenPositionX = ((runtime.written & EShapeRuntimeReset.POSITION_X) !== 0);
            var position = shape.transform.position;
            var oldPositionX = (writtenPositionX ? position.x : runtime.x);
            position.x = oldPositionX + amount;
            runtime.written |= this.reset;
        }
    };
    return EShapeActionRuntimeTransformMoveRelativeX;
}(EShapeActionRuntimeTransformMove));
export { EShapeActionRuntimeTransformMoveRelativeX };
//# sourceMappingURL=e-shape-action-runtime-transform-move-relative-x.js.map