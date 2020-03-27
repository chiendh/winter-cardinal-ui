/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueTransformResizeType } from "./e-shape-action-value-transform-resize-type";
var sizeRelativeDefault = function () { return 1; };
var sizeAbsoluteDefault = function () { return 100; };
var EShapeActionRuntimeTransformResize = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformResize, _super);
    function EShapeActionRuntimeTransformResize(value, reset) {
        var _this = _super.call(this, value, reset) || this;
        switch (value.opetype) {
            case EShapeActionValueTransformResizeType.RELATIVE_SIZE:
                _this.size = _this.toExpression(value.amount, sizeRelativeDefault, "1");
                break;
            case EShapeActionValueTransformResizeType.ABSOLUTE_SIZE:
                _this.size = _this.toExpression(value.amount, sizeAbsoluteDefault, "100");
                break;
            case EShapeActionValueTransformResizeType.RELATIVE_HEIGHT:
                _this.size = _this.toExpression(value.amount, sizeRelativeDefault, "1");
                break;
            case EShapeActionValueTransformResizeType.ABSOLUTE_HEIGHT:
                _this.size = _this.toExpression(value.amount, sizeAbsoluteDefault, "100");
                break;
            case EShapeActionValueTransformResizeType.RELATIVE_WIDTH:
                _this.size = _this.toExpression(value.amount, sizeRelativeDefault, "1");
                break;
            case EShapeActionValueTransformResizeType.ABSOLUTE_WIDTH:
                _this.size = _this.toExpression(value.amount, sizeAbsoluteDefault, "100");
                break;
            default:
                _this.size = sizeRelativeDefault;
        }
        return _this;
    }
    EShapeActionRuntimeTransformResize.prototype.adjustPosition = function (shape, runtime, dsx, dsy, originX, originY) {
        var dx = (-0.5 + originX) * dsx;
        var dy = (-0.5 + originY) * dsy;
        shape.updateTransform();
        var transform = shape.transform;
        var position = transform.position;
        var localTransform = transform.localTransform;
        var writtenPositionX = ((runtime.written & EShapeRuntimeReset.POSITION_X) !== 0);
        var writtenPositionY = ((runtime.written & EShapeRuntimeReset.POSITION_Y) !== 0);
        var oldPositionX = (writtenPositionX ? position.x : runtime.x);
        var oldPositionY = (writtenPositionY ? position.y : runtime.y);
        runtime.written |= EShapeRuntimeReset.POSITION;
        position.set(oldPositionX + dx * localTransform.a + dy * localTransform.c, oldPositionY + dx * localTransform.b + dy * localTransform.d);
    };
    return EShapeActionRuntimeTransformResize;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeTransformResize };
//# sourceMappingURL=e-shape-action-runtime-transform-resize.js.map