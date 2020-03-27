/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeTransformMoveAbsoluteX } from "./e-shape-action-runtime-transform-move-absolute-x";
import { EShapeActionRuntimeTransformMoveAbsoluteY } from "./e-shape-action-runtime-transform-move-absolute-y";
import { EShapeActionRuntimeTransformMoveForwardOrBackward } from "./e-shape-action-runtime-transform-move-forward-or-backward";
import { EShapeActionRuntimeTransformMoveLeftOrRight } from "./e-shape-action-runtime-transform-move-left-or-right";
import { EShapeActionRuntimeTransformMoveRelativeX } from "./e-shape-action-runtime-transform-move-relative-x";
import { EShapeActionRuntimeTransformMoveRelativeY } from "./e-shape-action-runtime-transform-move-relative-y";
import { EShapeActionValueOpetyped } from "./e-shape-action-value-opetyped";
import { EShapeActionValueTransformMoveType } from "./e-shape-action-value-transform-move-type";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueTransformMove = /** @class */ (function (_super) {
    __extends(EShapeActionValueTransformMove, _super);
    function EShapeActionValueTransformMove(opetype, condition, amount) {
        var _this = _super.call(this, EShapeActionValueType.TRANSFORM, condition, EShapeActionValueTransformType.MOVE, opetype) || this;
        _this.amount = amount;
        return _this;
    }
    EShapeActionValueTransformMove.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueTransformMove) &&
            this.amount === value.amount);
    };
    EShapeActionValueTransformMove.prototype.toRuntime = function () {
        switch (this.opetype) {
            case EShapeActionValueTransformMoveType.ABSOLUTE_X:
                return new EShapeActionRuntimeTransformMoveAbsoluteX(this);
            case EShapeActionValueTransformMoveType.ABSOLUTE_Y:
                return new EShapeActionRuntimeTransformMoveAbsoluteY(this);
            case EShapeActionValueTransformMoveType.FORWARD_OR_BACKWARD:
                return new EShapeActionRuntimeTransformMoveForwardOrBackward(this);
            case EShapeActionValueTransformMoveType.LEFT_OR_RIGHT:
                return new EShapeActionRuntimeTransformMoveLeftOrRight(this);
            case EShapeActionValueTransformMoveType.RELATIVE_X:
                return new EShapeActionRuntimeTransformMoveRelativeX(this);
            case EShapeActionValueTransformMoveType.RELATIVE_Y:
                return new EShapeActionRuntimeTransformMoveRelativeY(this);
        }
    };
    EShapeActionValueTransformMove.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        var amountId = manager.add(this.amount);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "," + this.opetype + "," + amountId + "]");
    };
    EShapeActionValueTransformMove.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        var amount = EShapeActionValues.toResource(4, serialized, manager.resources);
        return new EShapeActionValueTransformMove(serialized[3], condition, amount);
    };
    return EShapeActionValueTransformMove;
}(EShapeActionValueOpetyped));
export { EShapeActionValueTransformMove };
//# sourceMappingURL=e-shape-action-value-transform-move.js.map