import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeShowHide } from "./e-shape-action-runtime-show-hide";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueShowHideSerialized = [EShapeActionValueType.SHOW_HIDE, number, EShapeActionValueShowHideType];
export declare class EShapeActionValueShowHide extends EShapeActionValueSubtyped<EShapeActionValueShowHideType> {
    constructor(subtype: EShapeActionValueShowHideType, condition: string);
    toRuntime(): EShapeActionRuntimeShowHide;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueShowHideSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueShowHide;
}
