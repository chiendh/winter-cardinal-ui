/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeChangeColorBrightnessAll } from "./e-shape-action-runtime-change-color-brightness-all";
import { EShapeActionRuntimeChangeColorBrightnessFill } from "./e-shape-action-runtime-change-color-brightness-fill";
import { EShapeActionRuntimeChangeColorBrightnessFillAndStroke } from "./e-shape-action-runtime-change-color-brightness-fill-and-stroke";
import { EShapeActionRuntimeChangeColorBrightnessStroke } from "./e-shape-action-runtime-change-color-brightness-stroke";
import { EShapeActionRuntimeChangeColorBrightnessText } from "./e-shape-action-runtime-change-color-brightness-text";
import { EShapeActionRuntimeChangeColorBrightnessTextOutline } from "./e-shape-action-runtime-change-color-brightness-text-outline";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueChangeColorBrightness = /** @class */ (function (_super) {
    __extends(EShapeActionValueChangeColorBrightness, _super);
    function EShapeActionValueChangeColorBrightness(subtype, condition, brightness) {
        var _this = _super.call(this, EShapeActionValueType.CHANGE_COLOR, condition, subtype) || this;
        _this.brightness = brightness;
        return _this;
    }
    EShapeActionValueChangeColorBrightness.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueChangeColorBrightness) &&
            this.brightness === value.brightness);
    };
    EShapeActionValueChangeColorBrightness.prototype.toRuntime = function () {
        switch (this.subtype) {
            case EShapeActionValueChangeColorType.FILL:
                return new EShapeActionRuntimeChangeColorBrightnessFill(this);
            case EShapeActionValueChangeColorType.STROKE:
                return new EShapeActionRuntimeChangeColorBrightnessStroke(this);
            case EShapeActionValueChangeColorType.FILL_AND_STROKE:
                return new EShapeActionRuntimeChangeColorBrightnessFillAndStroke(this);
            case EShapeActionValueChangeColorType.TEXT:
                return new EShapeActionRuntimeChangeColorBrightnessText(this);
            case EShapeActionValueChangeColorType.TEXT_OUTLINE:
                return new EShapeActionRuntimeChangeColorBrightnessTextOutline(this);
            case EShapeActionValueChangeColorType.ALL:
                return new EShapeActionRuntimeChangeColorBrightnessAll(this);
        }
    };
    EShapeActionValueChangeColorBrightness.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        var target = EShapeActionValueChangeColorTarget.BRIGHTNESS;
        var brightnessId = manager.add(this.brightness);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "," + target + "," + brightnessId + "]");
    };
    EShapeActionValueChangeColorBrightness.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        var brightness = EShapeActionValues.toResource(4, serialized, manager.resources);
        return new EShapeActionValueChangeColorBrightness(serialized[2], condition, brightness);
    };
    return EShapeActionValueChangeColorBrightness;
}(EShapeActionValueSubtyped));
export { EShapeActionValueChangeColorBrightness };
//# sourceMappingURL=e-shape-action-value-change-color-brightness.js.map