import { EShape } from "../e-shape";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueMiscSerialized = [EShapeActionValueType.MISC, number, EShapeActionValueMiscType];
export declare class EShapeActionValueMisc extends EShapeActionValueSubtyped<EShapeActionValueMiscType> {
    constructor(subtype: EShapeActionValueMiscType, condition: string);
    toRuntime(shape: EShape): EShapeActionRuntime;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueMiscSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueMisc;
}
