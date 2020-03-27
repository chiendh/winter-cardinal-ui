/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeTransformRotateAbsolute } from "./e-shape-action-runtime-transform-rotate-absolute";
import { EShapeActionRuntimeTransformRotateRelative } from "./e-shape-action-runtime-transform-rotate-relative";
import { EShapeActionValueOpetyped } from "./e-shape-action-value-opetyped";
import { EShapeActionValueTransformRotateType } from "./e-shape-action-value-transform-rotate-type";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueTransformRotate = /** @class */ (function (_super) {
    __extends(EShapeActionValueTransformRotate, _super);
    function EShapeActionValueTransformRotate(opetype, condition, originX, originY, amount) {
        var _this = _super.call(this, EShapeActionValueType.TRANSFORM, condition, EShapeActionValueTransformType.ROTATE, opetype) || this;
        _this.originX = originX;
        _this.originY = originY;
        _this.amount = amount;
        return _this;
    }
    EShapeActionValueTransformRotate.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueTransformRotate) &&
            this.originX === value.originX &&
            this.originY === value.originY &&
            this.amount === value.amount);
    };
    EShapeActionValueTransformRotate.prototype.toRuntime = function () {
        switch (this.opetype) {
            case EShapeActionValueTransformRotateType.ABSOLUTE:
                return new EShapeActionRuntimeTransformRotateAbsolute(this);
            case EShapeActionValueTransformRotateType.RELATIVE:
                return new EShapeActionRuntimeTransformRotateRelative(this);
        }
    };
    EShapeActionValueTransformRotate.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        var amountId = manager.add(this.amount);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "," + this.opetype + "," + this.originX + "," + this.originY + "," + amountId + "]");
    };
    EShapeActionValueTransformRotate.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        var amount = EShapeActionValues.toResource(6, serialized, manager.resources);
        return new EShapeActionValueTransformRotate(serialized[3], condition, serialized[4], serialized[5], amount);
    };
    return EShapeActionValueTransformRotate;
}(EShapeActionValueOpetyped));
export { EShapeActionValueTransformRotate };
//# sourceMappingURL=e-shape-action-value-transform-rotate.js.map