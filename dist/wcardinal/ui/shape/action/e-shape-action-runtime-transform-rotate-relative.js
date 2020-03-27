/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformRotate } from "./e-shape-action-runtime-transform-rotate";
var EShapeActionRuntimeTransformRotateRelative = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformRotateRelative, _super);
    function EShapeActionRuntimeTransformRotateRelative(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.ROTATION) || this;
        _this.reset |= EShapeRuntimeReset.POSITION;
        return _this;
    }
    EShapeActionRuntimeTransformRotateRelative.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var amount = this.amount(shape, time);
            var transform = shape.transform;
            var writtenRotation = ((runtime.written & EShapeRuntimeReset.ROTATION) !== 0);
            var oldRotation = (writtenRotation ? transform.rotation : runtime.rotation);
            transform.rotation = oldRotation + amount;
            runtime.written |= EShapeRuntimeReset.ROTATION;
            this.adjustPosition(shape, runtime, oldRotation, transform.rotation, this.originX, this.originY);
        }
    };
    return EShapeActionRuntimeTransformRotateRelative;
}(EShapeActionRuntimeTransformRotate));
export { EShapeActionRuntimeTransformRotateRelative };
//# sourceMappingURL=e-shape-action-runtime-transform-rotate-relative.js.map