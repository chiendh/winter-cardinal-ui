/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformRotate } from "./e-shape-action-runtime-transform-rotate";
var EShapeActionRuntimeTransformRotateAbsolute = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformRotateAbsolute, _super);
    function EShapeActionRuntimeTransformRotateAbsolute(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.ROTATION) || this;
        _this.reset |= EShapeRuntimeReset.POSITION;
        return _this;
    }
    EShapeActionRuntimeTransformRotateAbsolute.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var amount = this.amount(shape, time);
            var transform = shape.transform;
            var writtenRotation = ((runtime.written & EShapeRuntimeReset.ROTATION) !== 0);
            var oldRotation = (writtenRotation ? transform.rotation : runtime.rotation);
            transform.rotation = amount;
            runtime.written |= EShapeRuntimeReset.ROTATION;
            this.adjustPosition(shape, runtime, oldRotation, amount, this.originX, this.originY);
        }
    };
    return EShapeActionRuntimeTransformRotateAbsolute;
}(EShapeActionRuntimeTransformRotate));
export { EShapeActionRuntimeTransformRotateAbsolute };
//# sourceMappingURL=e-shape-action-runtime-transform-rotate-absolute.js.map