import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueOpetyped } from "./e-shape-action-value-opetyped";
import { EShapeActionValueTransformResizeType } from "./e-shape-action-value-transform-resize-type";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueTransformResizeSerialized = [EShapeActionValueType.TRANSFORM, number, EShapeActionValueTransformType.RESIZE, EShapeActionValueTransformResizeType, number, number, number];
export declare class EShapeActionValueTransformResize extends EShapeActionValueOpetyped<EShapeActionValueTransformType, EShapeActionValueTransformResizeType> {
    readonly originX: number;
    readonly originY: number;
    readonly amount: string;
    constructor(opetype: EShapeActionValueTransformResizeType, condition: string, originX: number, originY: number, amount: string);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(): EShapeActionRuntimeTransformResize;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueTransformResizeSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueTransformResize;
}
