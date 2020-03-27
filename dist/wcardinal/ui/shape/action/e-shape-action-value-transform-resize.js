/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeTransformResizeHeightAbsolute } from "./e-shape-action-runtime-transform-resize-height-absolute";
import { EShapeActionRuntimeTransformResizeHeightRelative } from "./e-shape-action-runtime-transform-resize-height-relative";
import { EShapeActionRuntimeTransformResizeSizeAbsolute } from "./e-shape-action-runtime-transform-resize-size-absolute";
import { EShapeActionRuntimeTransformResizeSizeRelative } from "./e-shape-action-runtime-transform-resize-size-relative";
import { EShapeActionRuntimeTransformResizeWidthAbsolute } from "./e-shape-action-runtime-transform-resize-width-absolute";
import { EShapeActionRuntimeTransformResizeWidthRelative } from "./e-shape-action-runtime-transform-resize-width-relative";
import { EShapeActionValueOpetyped } from "./e-shape-action-value-opetyped";
import { EShapeActionValueTransformResizeType } from "./e-shape-action-value-transform-resize-type";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueTransformResize = /** @class */ (function (_super) {
    __extends(EShapeActionValueTransformResize, _super);
    function EShapeActionValueTransformResize(opetype, condition, originX, originY, amount) {
        var _this = _super.call(this, EShapeActionValueType.TRANSFORM, condition, EShapeActionValueTransformType.RESIZE, opetype) || this;
        _this.originX = originX;
        _this.originY = originY;
        _this.amount = amount;
        return _this;
    }
    EShapeActionValueTransformResize.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueTransformResize) &&
            this.originX === value.originX &&
            this.originY === value.originY &&
            this.amount === value.amount);
    };
    EShapeActionValueTransformResize.prototype.toRuntime = function () {
        switch (this.opetype) {
            case EShapeActionValueTransformResizeType.ABSOLUTE_HEIGHT:
                return new EShapeActionRuntimeTransformResizeHeightAbsolute(this);
            case EShapeActionValueTransformResizeType.ABSOLUTE_WIDTH:
                return new EShapeActionRuntimeTransformResizeWidthAbsolute(this);
            case EShapeActionValueTransformResizeType.ABSOLUTE_SIZE:
                return new EShapeActionRuntimeTransformResizeSizeAbsolute(this);
            case EShapeActionValueTransformResizeType.RELATIVE_HEIGHT:
                return new EShapeActionRuntimeTransformResizeHeightRelative(this);
            case EShapeActionValueTransformResizeType.RELATIVE_WIDTH:
                return new EShapeActionRuntimeTransformResizeWidthRelative(this);
            case EShapeActionValueTransformResizeType.RELATIVE_SIZE:
                return new EShapeActionRuntimeTransformResizeSizeRelative(this);
        }
    };
    EShapeActionValueTransformResize.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        var amountId = manager.add(this.amount);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "," + this.opetype + "," + this.originX + "," + this.originY + "," + amountId + "]");
    };
    EShapeActionValueTransformResize.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        var amount = EShapeActionValues.toResource(6, serialized, manager.resources);
        return new EShapeActionValueTransformResize(serialized[3], condition, serialized[4], serialized[5], amount);
    };
    return EShapeActionValueTransformResize;
}(EShapeActionValueOpetyped));
export { EShapeActionValueTransformResize };
//# sourceMappingURL=e-shape-action-value-transform-resize.js.map