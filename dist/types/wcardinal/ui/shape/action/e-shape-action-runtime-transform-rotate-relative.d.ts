import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformRotate } from "./e-shape-action-runtime-transform-rotate";
import { EShapeActionValueTransformRotate } from "./e-shape-action-value-transform-rotate";
export declare class EShapeActionRuntimeTransformRotateRelative extends EShapeActionRuntimeTransformRotate {
    constructor(value: EShapeActionValueTransformRotate);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
