/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { UtilRgb } from "../../util/util-rgb";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
var brightnessDefault = function () { return null; };
var EShapeActionRuntimeChangeColorBrightness = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorBrightness, _super);
    function EShapeActionRuntimeChangeColorBrightness(value, reset) {
        var _this = _super.call(this, value, reset) || this;
        _this.brightness = _this.toExpression(value.brightness, brightnessDefault, "null");
        return _this;
    }
    EShapeActionRuntimeChangeColorBrightness.prototype.set = function (shape, runtime, time, target, base) {
        var brightness = this.brightness(shape, time);
        if (brightness != null) {
            target.set(undefined, this.toColorAdjusted(base.color, brightness), base.alpha);
            runtime.written |= this.reset;
        }
    };
    EShapeActionRuntimeChangeColorBrightness.prototype.sets = function (shape, runtime, time, fill, stroke, baseFill, baseStroke) {
        var brightness = this.brightness(shape, time);
        if (brightness != null) {
            fill.set(undefined, this.toColorAdjusted(baseFill.color, brightness), baseFill.alpha);
            stroke.set(undefined, this.toColorAdjusted(baseStroke.color, brightness), baseStroke.alpha);
            runtime.written |= this.reset;
        }
    };
    EShapeActionRuntimeChangeColorBrightness.prototype.setAll = function (shape, runtime, time, fill, stroke, text, outline, baseFill, baseStroke, baseText, baseOutline) {
        var brightness = this.brightness(shape, time);
        if (brightness != null) {
            fill.set(undefined, this.toColorAdjusted(baseFill.color, brightness), baseFill.alpha);
            stroke.set(undefined, this.toColorAdjusted(baseStroke.color, brightness), baseStroke.alpha);
            text.set(undefined, this.toColorAdjusted(baseText.color, brightness), baseText.alpha);
            outline.set(undefined, this.toColorAdjusted(baseOutline.color, brightness), baseOutline.alpha);
            runtime.written |= this.reset;
        }
    };
    EShapeActionRuntimeChangeColorBrightness.prototype.toColorAdjusted = function (color, brightness) {
        if (0 <= brightness) {
            return UtilRgb.brighten(color, +brightness);
        }
        else {
            return UtilRgb.darken(color, -brightness);
        }
    };
    return EShapeActionRuntimeChangeColorBrightness;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeChangeColorBrightness };
//# sourceMappingURL=e-shape-action-runtime-change-color-brightness.js.map