import { EShapeActionValue, EThemeShapeActionValue } from "../../shape/action/e-shape-action-value";
import { EShapeActionValueBase } from "../../shape/action/e-shape-action-value-base";
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
export declare class EThemeDarkShapeActionValue implements EThemeShapeActionValue {
    toLabel(value: EShapeActionValue): string;
    protected toTypedLabel(type: EShapeActionValueType, value: EShapeActionValueBase): string;
    protected toSubtypedLabel(type: EShapeActionValueType, subtype: number, value: EShapeActionValueSubtyped<any>): string | null;
    protected toOpetypedLabel(type: EShapeActionValueType, subtype: number, opetype: number, value: EShapeActionValueOpetyped<any, any>): string | null;
    toTypeLabel(type: EShapeActionValueType): string;
    toConditionLabel(condition: string): string;
    toBlinkTypeLabel(type: EShapeActionValueBlinkType): string;
    toShowHideTypeLabel(type: EShapeActionValueShowHideType): string;
    toTransformTypeLabel(type: EShapeActionValueTransformType): string;
    toTransformRotateTypeLabel(type: EShapeActionValueTransformRotateType): string;
    toTransformMoveTypeLabel(type: EShapeActionValueTransformMoveType): string;
    toTransformResizeTypeLabel(type: EShapeActionValueTransformResizeType): string;
    toChangeColorTypeLabel(type: EShapeActionValueChangeColorType): string;
    toChangeColorTargetLabel(type: EShapeActionValueChangeColorTarget): string;
    toChangeTextTypeLabel(type: EShapeActionValueChangeTextType): string;
    toOpenTypeLabel(type: EShapeActionValueOpenType): string;
    toMiscTypeLabel(type: EShapeActionValueMiscType): string;
}
