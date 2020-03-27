import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueChangeColorBrightnessSerialized = [EShapeActionValueType.CHANGE_COLOR, number, EShapeActionValueChangeColorType, EShapeActionValueChangeColorTarget.BRIGHTNESS, number];
export declare class EShapeActionValueChangeColorBrightness extends EShapeActionValueSubtyped<EShapeActionValueChangeColorType> {
    readonly brightness: string;
    constructor(subtype: EShapeActionValueChangeColorType, condition: string, brightness: string);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(): EShapeActionRuntimeChangeColorBrightness;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueChangeColorBrightnessSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueChangeColorBrightness;
}
