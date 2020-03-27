/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
var amountDefault = function () { return 0; };
var EShapeActionRuntimeTransformRotate = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformRotate, _super);
    function EShapeActionRuntimeTransformRotate(value, reset) {
        var _this = _super.call(this, value, reset) || this;
        _this.originX = value.originX;
        _this.originY = value.originY;
        _this.amount = _this.toExpression("(" + value.amount + ") * (Math.PI / 180)", amountDefault, "0");
        return _this;
    }
    EShapeActionRuntimeTransformRotate.prototype.adjustPosition = function (shape, runtime, oldRotation, newRotation, originX, originY) {
        var writtenWidth = ((runtime.written & EShapeRuntimeReset.WIDTH) !== 0);
        var writtenHeight = ((runtime.written & EShapeRuntimeReset.HEIGHT) !== 0);
        var dx = (-0.5 + originX) * (writtenWidth ? shape.size.x : runtime.size.x);
        var dy = (-0.5 + originY) * (writtenHeight ? shape.size.y : runtime.size.y);
        var s = Math.sin(oldRotation) - Math.sin(newRotation);
        var c = Math.cos(oldRotation) - Math.cos(newRotation);
        var position = shape.transform.position;
        var writtenPositionX = ((runtime.written & EShapeRuntimeReset.POSITION_X) !== 0);
        var writtenPositionY = ((runtime.written & EShapeRuntimeReset.POSITION_Y) !== 0);
        var oldPositionX = (writtenPositionX ? position.x : runtime.x);
        var oldPositionY = (writtenPositionY ? position.y : runtime.y);
        runtime.written |= EShapeRuntimeReset.POSITION;
        position.set(oldPositionX + dx * c - dy * s, oldPositionY + dx * s + dy * c);
    };
    return EShapeActionRuntimeTransformRotate;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeTransformRotate };
//# sourceMappingURL=e-shape-action-runtime-transform-rotate.js.map