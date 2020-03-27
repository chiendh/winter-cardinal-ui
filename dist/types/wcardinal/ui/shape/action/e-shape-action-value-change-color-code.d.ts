import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueChangeColorCodeSerialized = [EShapeActionValueType.CHANGE_COLOR, number, EShapeActionValueChangeColorType, EShapeActionValueChangeColorTarget.CODE, number, number, number];
export declare class EShapeActionValueChangeColorCode extends EShapeActionValueSubtyped<EShapeActionValueChangeColorType> {
    readonly color: string;
    readonly alpha: string;
    readonly blend: string;
    constructor(subtype: EShapeActionValueChangeColorType, condition: string, color: string, alpha: string, blend: string);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(): EShapeActionRuntimeChangeColorCode;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueChangeColorCodeSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueChangeColorCode;
}
