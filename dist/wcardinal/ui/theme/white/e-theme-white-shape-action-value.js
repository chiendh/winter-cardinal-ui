import { EShapeActionValueBlinkType } from "../../shape/action/e-shape-action-value-blink-type";
import { EShapeActionValueChangeColorTarget } from "../../shape/action/e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorType } from "../../shape/action/e-shape-action-value-change-color-type";
import { EShapeActionValueChangeTextType } from "../../shape/action/e-shape-action-value-change-text-type";
import { EShapeActionValueMiscType } from "../../shape/action/e-shape-action-value-misc-type";
import { EShapeActionValueOpenType } from "../../shape/action/e-shape-action-value-open-type";
import { EShapeActionValueOpetyped } from "../../shape/action/e-shape-action-value-opetyped";
import { EShapeActionValueShowHideType } from "../../shape/action/e-shape-action-value-show-hide-type";
import { EShapeActionValueSubtyped } from "../../shape/action/e-shape-action-value-subtyped";
import { EShapeActionValueTransformMoveType } from "../../shape/action/e-shape-action-value-transform-move-type";
import { EShapeActionValueTransformResizeType } from "../../shape/action/e-shape-action-value-transform-resize-type";
import { EShapeActionValueTransformRotateType } from "../../shape/action/e-shape-action-value-transform-rotate-type";
import { EShapeActionValueTransformType } from "../../shape/action/e-shape-action-value-transform-type";
import { EShapeActionValueType } from "../../shape/action/e-shape-action-value-type";
var EThemeWhiteShapeActionValue = /** @class */ (function () {
    function EThemeWhiteShapeActionValue() {
    }
    EThemeWhiteShapeActionValue.prototype.toLabel = function (value) {
        var type = value.type;
        if (value instanceof EShapeActionValueSubtyped) {
            var subtype = value.subtype;
            if (value instanceof EShapeActionValueOpetyped) {
                var result = this.toOpetypedLabel(type, subtype, value.opetype, value);
                if (result != null) {
                    return result;
                }
            }
            else {
                var result = this.toSubtypedLabel(type, subtype, value);
                if (result != null) {
                    return result;
                }
            }
        }
        return this.toTypedLabel(type, value);
    };
    EThemeWhiteShapeActionValue.prototype.toTypedLabel = function (type, value) {
        return this.toTypeLabel(type) + ": " + this.toConditionLabel(value.condition);
    };
    EThemeWhiteShapeActionValue.prototype.toSubtypedLabel = function (type, subtype, value) {
        var typeLabel = this.toTypeLabel(type);
        switch (type) {
            case EShapeActionValueType.SHOW_HIDE:
                return "" + this.toShowHideTypeLabel(subtype);
            case EShapeActionValueType.BLINK:
                return typeLabel + ": " + this.toBlinkTypeLabel(subtype);
            case EShapeActionValueType.CHANGE_COLOR:
                return typeLabel + ": " + this.toChangeColorTypeLabel(subtype);
            case EShapeActionValueType.MISC:
                return typeLabel + ": " + this.toMiscTypeLabel(subtype);
        }
        return null;
    };
    EThemeWhiteShapeActionValue.prototype.toOpetypedLabel = function (type, subtype, opetype, value) {
        switch (type) {
            case EShapeActionValueType.TRANSFORM:
                var subtypeLabel = this.toTransformTypeLabel(subtype);
                switch (subtype) {
                    case EShapeActionValueTransformType.ROTATE:
                        return subtypeLabel + ": " + this.toTransformRotateTypeLabel(opetype);
                    case EShapeActionValueTransformType.MOVE:
                        return subtypeLabel + ": " + this.toTransformMoveTypeLabel(opetype);
                    case EShapeActionValueTransformType.RESIZE:
                        return subtypeLabel + ": " + this.toTransformResizeTypeLabel(opetype);
                }
        }
        return null;
    };
    EThemeWhiteShapeActionValue.prototype.toTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueType.SHOW_HIDE:
                return "Show / hide";
            case EShapeActionValueType.BLINK:
                return "Blink";
            case EShapeActionValueType.TRANSFORM:
                return "Transform";
            case EShapeActionValueType.OPEN:
                return "Open";
            case EShapeActionValueType.CHANGE_COLOR:
                return "Change color";
            case EShapeActionValueType.CHANGE_TEXT:
                return "Change text";
            case EShapeActionValueType.CHANGE_CURSOR:
                return "Change cursor";
            case EShapeActionValueType.EMIT_EVENT:
                return "Emit an event";
            case EShapeActionValueType.MISC:
                return "Misc.";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toConditionLabel = function (condition) {
        var l = 20;
        if (l < condition.length) {
            return condition.substring(0, l) + "...";
        }
        else {
            return condition;
        }
    };
    EThemeWhiteShapeActionValue.prototype.toBlinkTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueBlinkType.VISIBILITY:
                return "Visibility";
            case EShapeActionValueBlinkType.BRIGHTEN:
                return "Brighten";
            case EShapeActionValueBlinkType.DARKEN:
                return "Darken";
            case EShapeActionValueBlinkType.OPACITY:
                return "Opacity";
            case EShapeActionValueBlinkType.COLOR_FILL:
                return "Fill";
            case EShapeActionValueBlinkType.COLOR_STROKE:
                return "Stroke";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toShowHideTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueShowHideType.SHOW:
                return "Show";
            case EShapeActionValueShowHideType.HIDE:
                return "Hide";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toTransformTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueTransformType.RESIZE:
                return "Resize";
            case EShapeActionValueTransformType.MOVE:
                return "Move";
            case EShapeActionValueTransformType.ROTATE:
                return "Rotate";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toTransformRotateTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueTransformRotateType.RELATIVE:
                return "Relative";
            case EShapeActionValueTransformRotateType.ABSOLUTE:
                return "Absolute";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toTransformMoveTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueTransformMoveType.RELATIVE_X:
                return "Relative X";
            case EShapeActionValueTransformMoveType.RELATIVE_Y:
                return "Relative Y";
            case EShapeActionValueTransformMoveType.ABSOLUTE_X:
                return "Absolute X";
            case EShapeActionValueTransformMoveType.ABSOLUTE_Y:
                return "Absolute Y";
            case EShapeActionValueTransformMoveType.FORWARD_OR_BACKWARD:
                return "Forward / backward";
            case EShapeActionValueTransformMoveType.LEFT_OR_RIGHT:
                return "Left / right";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toTransformResizeTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueTransformResizeType.ABSOLUTE_SIZE:
                return "Height & width";
            case EShapeActionValueTransformResizeType.RELATIVE_SIZE:
                return "Height & width (%)";
            case EShapeActionValueTransformResizeType.ABSOLUTE_HEIGHT:
                return "Height";
            case EShapeActionValueTransformResizeType.RELATIVE_HEIGHT:
                return "Height (%)";
            case EShapeActionValueTransformResizeType.ABSOLUTE_WIDTH:
                return "Width";
            case EShapeActionValueTransformResizeType.RELATIVE_WIDTH:
                return "Width (%)";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toChangeColorTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueChangeColorType.FILL:
                return "Fill";
            case EShapeActionValueChangeColorType.STROKE:
                return "Stroke";
            case EShapeActionValueChangeColorType.FILL_AND_STROKE:
                return "Fill and stroke";
            case EShapeActionValueChangeColorType.TEXT:
                return "Text";
            case EShapeActionValueChangeColorType.TEXT_OUTLINE:
                return "Text outline";
            case EShapeActionValueChangeColorType.ALL:
                return "ALL";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toChangeColorTargetLabel = function (type) {
        switch (type) {
            case EShapeActionValueChangeColorTarget.COLOR_AND_ALPHA:
                return "Color";
            case EShapeActionValueChangeColorTarget.COLOR:
                return "RGB";
            case EShapeActionValueChangeColorTarget.ALPHA:
                return "Alpha";
            case EShapeActionValueChangeColorTarget.CODE:
                return "Dynamic color";
            case EShapeActionValueChangeColorTarget.BRIGHTNESS:
                return "Brightness";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toChangeTextTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueChangeTextType.TEXT:
                return "Text";
            case EShapeActionValueChangeTextType.NUMBER:
                return "Number";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toOpenTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueOpenType.FLOW:
                return "Flow";
            case EShapeActionValueOpenType.PAGE:
                return "Page (New window)";
            case EShapeActionValueOpenType.PAGE_INPLACE:
                return "Page (In-place)";
        }
        return "Unknown";
    };
    EThemeWhiteShapeActionValue.prototype.toMiscTypeLabel = function (type) {
        switch (type) {
            case EShapeActionValueMiscType.INPUT:
                return "Input";
        }
    };
    return EThemeWhiteShapeActionValue;
}());
export { EThemeWhiteShapeActionValue };
//# sourceMappingURL=e-theme-white-shape-action-value.js.map