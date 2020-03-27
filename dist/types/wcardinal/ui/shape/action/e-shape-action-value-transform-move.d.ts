import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOpetyped } from "./e-shape-action-value-opetyped";
import { EShapeActionValueTransformMoveType } from "./e-shape-action-value-transform-move-type";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueTransformMoveSerialized = [EShapeActionValueType.TRANSFORM, number, EShapeActionValueTransformType.MOVE, EShapeActionValueTransformMoveType, number];
export declare class EShapeActionValueTransformMove extends EShapeActionValueOpetyped<EShapeActionValueTransformType, EShapeActionValueTransformMoveType> {
    readonly amount: string;
    constructor(opetype: EShapeActionValueTransformMoveType, condition: string, amount: string);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(): EShapeActionRuntimeTransformMove;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueTransformMoveSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueTransformMove;
}
