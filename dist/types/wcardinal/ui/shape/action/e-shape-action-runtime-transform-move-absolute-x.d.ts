import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
import { EShapeActionValueTransformMove } from "./e-shape-action-value-transform-move";
export declare class EShapeActionRuntimeTransformMoveAbsoluteX extends EShapeActionRuntimeTransformMove {
    constructor(value: EShapeActionValueTransformMove);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
