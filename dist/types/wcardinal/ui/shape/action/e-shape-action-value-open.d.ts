import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOpenType } from "./e-shape-action-value-open-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueOpenSerialized = [EShapeActionValueType.OPEN, number, EShapeActionValueOpenType, number];
export declare class EShapeActionValueOpen extends EShapeActionValueSubtyped<EShapeActionValueOpenType> {
    readonly target: string;
    constructor(subtype: EShapeActionValueOpenType, condition: string, target: string);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(): EShapeActionRuntimeOpen;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueOpenSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueOpen;
}
