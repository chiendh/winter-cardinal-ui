import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformMove } from "./e-shape-action-runtime-transform-move";
import { EShapeActionValueTransformMove } from "./e-shape-action-value-transform-move";
export declare class EShapeActionRuntimeTransformMoveRelativeY extends EShapeActionRuntimeTransformMove {
    constructor(action: EShapeActionValueTransformMove);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
