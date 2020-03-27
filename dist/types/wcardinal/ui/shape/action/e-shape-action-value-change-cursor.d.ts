import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeChangeCursor } from "./e-shape-action-runtime-change-cursor";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueChangeCursorSerialized = [EShapeActionValueType.CHANGE_CURSOR, number, number];
export declare class EShapeActionValueChangeCursor extends EShapeActionValueBase {
    readonly name: string;
    constructor(condition: string, name: string);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(): EShapeActionRuntimeChangeCursor;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueChangeCursorSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueChangeCursor;
}
