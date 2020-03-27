import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeColor } from "./e-shape-action-runtime-change-color";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
declare type Target = EShapeActionValueChangeColorTarget.COLOR_AND_ALPHA | EShapeActionValueChangeColorTarget.COLOR | EShapeActionValueChangeColorTarget.ALPHA;
export declare type EShapeActionValueChangeColorSerialized = [EShapeActionValueType.CHANGE_COLOR, number, EShapeActionValueChangeColorType, Target, number, number, number];
export declare class EShapeActionValueChangeColor extends EShapeActionValueSubtyped<EShapeActionValueChangeColorType> {
    readonly target: Target;
    readonly color: number;
    readonly alpha: number;
    readonly blend: string;
    constructor(subtype: EShapeActionValueChangeColorType, condition: string, target: Target, color: number, alpha: number, blend: string);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(): EShapeActionRuntimeChangeColor;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueChangeColorSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueChangeColor;
}
export {};
