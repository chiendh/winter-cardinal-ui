/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
var EShapeActionRuntimeTransformMoveForwardOrBackward = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformMoveForwardOrBackward, _super);
    function EShapeActionRuntimeTransformMoveForwardOrBackward(value) {
        return _super.call(this, value, EShapeRuntimeReset.POSITION) || this;
    }
    EShapeActionRuntimeTransformMoveForwardOrBackward.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var amount = this.amount(shape, time);
            var transform = shape.transform;
            var position = transform.position;
            var writtenPositionX = ((runtime.written & EShapeRuntimeReset.POSITION_X) !== 0);
            var writtenPositionY = ((runtime.written & EShapeRuntimeReset.POSITION_Y) !== 0);
            var oldPositionX = (writtenPositionX ? position.x : runtime.x);
            var oldPositionY = (writtenPositionY ? position.y : runtime.y);
            shape.updateTransform();
            var localTransform = shape.transform.localTransform;
            position.set(oldPositionX - localTransform.c * amount, oldPositionY - localTransform.d * amount);
            runtime.written |= this.reset;
        }
    };
    return EShapeActionRuntimeTransformMoveForwardOrBackward;
}(EShapeActionRuntimeTransformMove));
export { EShapeActionRuntimeTransformMoveForwardOrBackward };
//# sourceMappingURL=e-shape-action-runtime-transform-move-forward-or-backward.js.map