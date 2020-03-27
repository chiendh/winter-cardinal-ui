import { EShape } from "../e-shape";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeTextNumber } from "./e-shape-action-runtime-change-text-number";
import { EShapeActionRuntimeChangeTextText } from "./e-shape-action-runtime-change-text-text";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueChangeTextType } from "./e-shape-action-value-change-text-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueChangeTextSerialized = [EShapeActionValueType.CHANGE_TEXT, number, EShapeActionValueChangeTextType, number];
export declare class EShapeActionValueChangeText extends EShapeActionValueSubtyped<EShapeActionValueChangeTextType> {
    readonly value: string;
    constructor(subtype: EShapeActionValueChangeTextType, condition: string, value: string);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(shape: EShape): EShapeActionRuntimeChangeTextText | EShapeActionRuntimeChangeTextNumber;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueChangeTextSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueChangeText;
}
