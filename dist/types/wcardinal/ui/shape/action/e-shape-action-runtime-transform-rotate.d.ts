import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueTransformRotate } from "./e-shape-action-value-transform-rotate";
export declare class EShapeActionRuntimeTransformRotate extends EShapeActionRuntimeConditional {
    protected originY: number;
    protected originX: number;
    protected readonly amount: EShapeActionExpression<number>;
    constructor(value: EShapeActionValueTransformRotate, reset: EShapeRuntimeReset);
    protected adjustPosition(shape: EShape, runtime: EShapeRuntime, oldRotation: number, newRotation: number, originX: number, originY: number): void;
}
