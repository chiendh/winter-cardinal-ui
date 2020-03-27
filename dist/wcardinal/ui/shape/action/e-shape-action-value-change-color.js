/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeChangeColorAll } from "./e-shape-action-runtime-change-color-all";
import { EShapeActionRuntimeChangeColorFill } from "./e-shape-action-runtime-change-color-fill";
import { EShapeActionRuntimeChangeColorFillAndStroke } from "./e-shape-action-runtime-change-color-fill-and-stroke";
import { EShapeActionRuntimeChangeColorStroke } from "./e-shape-action-runtime-change-color-stroke";
import { EShapeActionRuntimeChangeColorText } from "./e-shape-action-runtime-change-color-text";
import { EShapeActionRuntimeChangeColorTextOutline } from "./e-shape-action-runtime-change-color-text-outline";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueChangeColor = /** @class */ (function (_super) {
    __extends(EShapeActionValueChangeColor, _super);
    function EShapeActionValueChangeColor(subtype, condition, target, color, alpha, blend) {
        var _this = _super.call(this, EShapeActionValueType.CHANGE_COLOR, condition, subtype) || this;
        _this.target = target;
        _this.color = color;
        _this.alpha = alpha;
        _this.blend = blend;
        return _this;
    }
    EShapeActionValueChangeColor.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueChangeColor) &&
            this.target === value.target &&
            this.color === value.color &&
            this.alpha === value.alpha &&
            this.blend === value.blend);
    };
    EShapeActionValueChangeColor.prototype.toRuntime = function () {
        switch (this.subtype) {
            case EShapeActionValueChangeColorType.FILL:
                return new EShapeActionRuntimeChangeColorFill(this);
            case EShapeActionValueChangeColorType.STROKE:
                return new EShapeActionRuntimeChangeColorStroke(this);
            case EShapeActionValueChangeColorType.FILL_AND_STROKE:
                return new EShapeActionRuntimeChangeColorFillAndStroke(this);
            case EShapeActionValueChangeColorType.TEXT:
                return new EShapeActionRuntimeChangeColorText(this);
            case EShapeActionValueChangeColorType.TEXT_OUTLINE:
                return new EShapeActionRuntimeChangeColorTextOutline(this);
            case EShapeActionValueChangeColorType.ALL:
                return new EShapeActionRuntimeChangeColorAll(this);
        }
    };
    EShapeActionValueChangeColor.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        var blendId = manager.add(this.blend);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "," + this.target + "," + this.color + "," + this.alpha + "," + blendId + "]");
    };
    EShapeActionValueChangeColor.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        var blend = EShapeActionValues.toResource(6, serialized, manager.resources);
        return new EShapeActionValueChangeColor(serialized[2], condition, serialized[3], serialized[4], serialized[5], blend);
    };
    return EShapeActionValueChangeColor;
}(EShapeActionValueSubtyped));
export { EShapeActionValueChangeColor };
//# sourceMappingURL=e-shape-action-value-change-color.js.map