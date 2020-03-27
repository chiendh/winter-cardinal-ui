/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { UtilAlpha } from "../../util/util-alpha";
import { UtilRgb } from "../../util/util-rgb";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
var colorDefault = function () { return null; };
var alphaDefault = function () { return null; };
var blendDefault = function () { return null; };
var EShapeActionRuntimeChangeColorCode = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorCode, _super);
    function EShapeActionRuntimeChangeColorCode(value, reset) {
        var _this = _super.call(this, value, reset) || this;
        _this.color = _this.toExpression(value.color, colorDefault, "null");
        _this.alpha = _this.toExpression(value.alpha, alphaDefault, "null");
        _this.blend = _this.toExpression(value.blend, blendDefault, "null");
        return _this;
    }
    EShapeActionRuntimeChangeColorCode.prototype.set = function (shape, runtime, time, target, base) {
        var color = this.color(shape, time);
        var alpha = this.alpha(shape, time);
        if (color != null) {
            if (alpha != null) {
                var blend = this.blend(shape, time);
                if (blend != null) {
                    target.set(undefined, UtilRgb.blend(base.color, color, blend), UtilAlpha.blend(base.alpha, alpha, blend));
                }
                else {
                    target.set(undefined, color, alpha);
                }
            }
            else {
                var blend = this.blend(shape, time);
                if (blend != null) {
                    target.set(undefined, UtilRgb.blend(base.color, color, blend), base.alpha);
                }
                else {
                    target.set(undefined, color, base.alpha);
                }
            }
            runtime.written |= this.reset;
        }
        else if (alpha != null) {
            var blend = this.blend(shape, time);
            if (blend != null) {
                target.set(undefined, base.color, UtilAlpha.blend(base.alpha, alpha, blend));
            }
            else {
                target.set(undefined, base.color, alpha);
            }
            runtime.written |= this.reset;
        }
    };
    EShapeActionRuntimeChangeColorCode.prototype.sets = function (shape, runtime, time, fill, stroke, baseFill, baseStroke) {
        var color = this.color(shape, time);
        var alpha = this.alpha(shape, time);
        if (color != null) {
            if (alpha != null) {
                var blend = this.blend(shape, time);
                if (blend != null) {
                    fill.set(undefined, UtilRgb.blend(baseFill.color, color, blend), UtilAlpha.blend(baseFill.alpha, alpha, blend));
                    stroke.set(undefined, UtilRgb.blend(baseStroke.color, color, blend), UtilAlpha.blend(baseStroke.alpha, alpha, blend));
                }
                else {
                    fill.set(undefined, color, alpha);
                    stroke.set(undefined, color, alpha);
                }
            }
            else {
                var blend = this.blend(shape, time);
                if (blend != null) {
                    fill.set(undefined, UtilRgb.blend(baseFill.color, color, blend), baseFill.alpha);
                    stroke.set(undefined, UtilRgb.blend(baseStroke.color, color, blend), baseStroke.alpha);
                }
                else {
                    fill.set(undefined, color, baseFill.alpha);
                    stroke.set(undefined, color, baseStroke.alpha);
                }
            }
            runtime.written |= this.reset;
        }
        else if (alpha != null) {
            var blend = this.blend(shape, time);
            if (blend != null) {
                fill.set(undefined, baseFill.color, UtilAlpha.blend(baseFill.alpha, alpha, blend));
                stroke.set(undefined, baseStroke.color, UtilAlpha.blend(baseStroke.alpha, alpha, blend));
            }
            else {
                fill.set(undefined, baseFill.color, alpha);
                stroke.set(undefined, baseStroke.color, alpha);
            }
            runtime.written |= this.reset;
        }
    };
    EShapeActionRuntimeChangeColorCode.prototype.setAll = function (shape, runtime, time, fill, stroke, text, outline, baseFill, baseStroke, baseText, baseOutline) {
        var color = this.color(shape, time);
        var alpha = this.alpha(shape, time);
        if (color != null) {
            if (alpha != null) {
                var blend = this.blend(shape, time);
                if (blend != null) {
                    fill.set(undefined, UtilRgb.blend(baseFill.color, color, blend), UtilAlpha.blend(baseFill.alpha, alpha, blend));
                    stroke.set(undefined, UtilRgb.blend(baseStroke.color, color, blend), UtilAlpha.blend(baseStroke.alpha, alpha, blend));
                    text.set(undefined, UtilRgb.blend(baseText.color, color, blend), UtilAlpha.blend(baseText.alpha, alpha, blend));
                    outline.set(undefined, UtilRgb.blend(baseOutline.color, color, blend), UtilAlpha.blend(baseOutline.alpha, alpha, blend));
                }
                else {
                    fill.set(undefined, color, alpha);
                    stroke.set(undefined, color, alpha);
                    text.set(undefined, color, alpha);
                    outline.set(undefined, color, alpha);
                }
            }
            else {
                var blend = this.blend(shape, time);
                if (blend != null) {
                    fill.set(undefined, UtilRgb.blend(baseFill.color, color, blend), baseFill.alpha);
                    stroke.set(undefined, UtilRgb.blend(baseStroke.color, color, blend), baseStroke.alpha);
                    text.set(undefined, UtilRgb.blend(baseText.color, color, blend), baseText.alpha);
                    outline.set(undefined, UtilRgb.blend(baseOutline.color, color, blend), baseOutline.alpha);
                }
                else {
                    fill.set(undefined, color, baseFill.alpha);
                    stroke.set(undefined, color, baseStroke.alpha);
                    text.set(undefined, color, baseText.alpha);
                    outline.set(undefined, color, baseOutline.alpha);
                }
            }
            runtime.written |= this.reset;
        }
        else if (alpha != null) {
            var blend = this.blend(shape, time);
            if (blend != null) {
                fill.set(undefined, baseFill.color, UtilAlpha.blend(baseFill.alpha, alpha, blend));
                stroke.set(undefined, baseStroke.color, UtilAlpha.blend(baseStroke.alpha, alpha, blend));
                text.set(undefined, baseFill.color, UtilAlpha.blend(baseText.alpha, alpha, blend));
                outline.set(undefined, baseStroke.color, UtilAlpha.blend(baseOutline.alpha, alpha, blend));
            }
            else {
                fill.set(undefined, baseFill.color, alpha);
                stroke.set(undefined, baseStroke.color, alpha);
                text.set(undefined, baseText.color, alpha);
                outline.set(undefined, baseOutline.color, alpha);
            }
            runtime.written |= this.reset;
        }
    };
    return EShapeActionRuntimeChangeColorCode;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeChangeColorCode };
//# sourceMappingURL=e-shape-action-runtime-change-color-code.js.map