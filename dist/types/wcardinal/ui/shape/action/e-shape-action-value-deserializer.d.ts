import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBlinkSerialized } from "./e-shape-action-value-blink";
import { EShapeActionValueChangeColorSerialized } from "./e-shape-action-value-change-color";
import { EShapeActionValueChangeColorBrightnessSerialized } from "./e-shape-action-value-change-color-brightness";
import { EShapeActionValueChangeColorCodeSerialized } from "./e-shape-action-value-change-color-code";
import { EShapeActionValueChangeCursorSerialized } from "./e-shape-action-value-change-cursor";
import { EShapeActionValueChangeTextSerialized } from "./e-shape-action-value-change-text";
import { EShapeActionValueEmitEventSerialized } from "./e-shape-action-value-emit-event";
import { EShapeActionValueMiscSerialized } from "./e-shape-action-value-misc";
import { EShapeActionValueOpenSerialized } from "./e-shape-action-value-open";
import { EShapeActionValueShowHideSerialized } from "./e-shape-action-value-show-hide";
import { EShapeActionValueTransformMoveSerialized } from "./e-shape-action-value-transform-move";
import { EShapeActionValueTransformResizeSerialized } from "./e-shape-action-value-transform-resize";
import { EShapeActionValueTransformRotateSerialized } from "./e-shape-action-value-transform-rotate";
export declare type EShapeActionValueSerialized = EShapeActionValueShowHideSerialized | EShapeActionValueBlinkSerialized | EShapeActionValueBlinkSerialized | EShapeActionValueChangeColorSerialized | EShapeActionValueChangeColorCodeSerialized | EShapeActionValueChangeColorBrightnessSerialized | EShapeActionValueChangeTextSerialized | EShapeActionValueChangeCursorSerialized | EShapeActionValueEmitEventSerialized | EShapeActionValueOpenSerialized | EShapeActionValueTransformMoveSerialized | EShapeActionValueTransformResizeSerialized | EShapeActionValueTransformRotateSerialized | EShapeActionValueMiscSerialized;
export declare class EShapeActionValueDeserializer {
    static toSerialized(resource: string): EShapeActionValueSerialized | null;
    static deserialize(id: number, manager: EShapeResourceManagerDeserialization): EShapeActionValue;
}
