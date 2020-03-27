import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeTransformRotate } from "./e-shape-action-runtime-transform-rotate";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOpetyped } from "./e-shape-action-value-opetyped";
import { EShapeActionValueTransformRotateType } from "./e-shape-action-value-transform-rotate-type";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueTransformRotateSerialized = [EShapeActionValueType.TRANSFORM, number, EShapeActionValueTransformType.ROTATE, EShapeActionValueTransformRotateType, number, number, number];
export declare class EShapeActionValueTransformRotate extends EShapeActionValueOpetyped<EShapeActionValueTransformType, EShapeActionValueTransformRotateType> {
    readonly originX: number;
    readonly originY: number;
    readonly amount: string;
    constructor(opetype: EShapeActionValueTransformRotateType, condition: string, originX: number, originY: number, amount: string);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(): EShapeActionRuntimeTransformRotate;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueTransformRotateSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueTransformRotate;
}
