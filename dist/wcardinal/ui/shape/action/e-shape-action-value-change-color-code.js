/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeChangeColorCodeAll } from "./e-shape-action-runtime-change-color-code-all";
import { EShapeActionRuntimeChangeColorCodeFill } from "./e-shape-action-runtime-change-color-code-fill";
import { EShapeActionRuntimeChangeColorCodeFillAndStroke } from "./e-shape-action-runtime-change-color-code-fill-and-stroke";
import { EShapeActionRuntimeChangeColorCodeStroke } from "./e-shape-action-runtime-change-color-code-stroke";
import { EShapeActionRuntimeChangeColorCodeText } from "./e-shape-action-runtime-change-color-code-text";
import { EShapeActionRuntimeChangeColorCodeTextOutline } from "./e-shape-action-runtime-change-color-code-text-outline";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueChangeColorCode = /** @class */ (function (_super) {
    __extends(EShapeActionValueChangeColorCode, _super);
    function EShapeActionValueChangeColorCode(subtype, condition, color, alpha, blend) {
        var _this = _super.call(this, EShapeActionValueType.CHANGE_COLOR, condition, subtype) || this;
        _this.color = color;
        _this.alpha = alpha;
        _this.blend = blend;
        return _this;
    }
    EShapeActionValueChangeColorCode.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueChangeColorCode) &&
            this.color === value.color &&
            this.alpha === value.alpha &&
            this.blend === value.blend);
    };
    EShapeActionValueChangeColorCode.prototype.toRuntime = function () {
        switch (this.subtype) {
            case EShapeActionValueChangeColorType.FILL:
                return new EShapeActionRuntimeChangeColorCodeFill(this);
            case EShapeActionValueChangeColorType.STROKE:
                return new EShapeActionRuntimeChangeColorCodeStroke(this);
            case EShapeActionValueChangeColorType.FILL_AND_STROKE:
                return new EShapeActionRuntimeChangeColorCodeFillAndStroke(this);
            case EShapeActionValueChangeColorType.TEXT:
                return new EShapeActionRuntimeChangeColorCodeText(this);
            case EShapeActionValueChangeColorType.TEXT_OUTLINE:
                return new EShapeActionRuntimeChangeColorCodeTextOutline(this);
            case EShapeActionValueChangeColorType.ALL:
                return new EShapeActionRuntimeChangeColorCodeAll(this);
        }
    };
    EShapeActionValueChangeColorCode.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        var target = EShapeActionValueChangeColorTarget.CODE;
        var colorId = manager.add(this.color);
        var alphaId = manager.add(this.alpha);
        var blendId = manager.add(this.blend);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "," + target + "," + colorId + "," + alphaId + "," + blendId + "]");
    };
    EShapeActionValueChangeColorCode.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        var color = EShapeActionValues.toResource(4, serialized, manager.resources);
        var alpha = EShapeActionValues.toResource(5, serialized, manager.resources);
        var blend = EShapeActionValues.toResource(6, serialized, manager.resources);
        return new EShapeActionValueChangeColorCode(serialized[2], condition, color, alpha, blend);
    };
    return EShapeActionValueChangeColorCode;
}(EShapeActionValueSubtyped));
export { EShapeActionValueChangeColorCode };
//# sourceMappingURL=e-shape-action-value-change-color-code.js.map