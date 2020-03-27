import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueChangeCursor } from "./e-shape-action-value-change-cursor";
export declare class EShapeActionRuntimeChangeCursor extends EShapeActionRuntimeConditional {
    protected name: EShapeActionExpression<string | null>;
    constructor(value: EShapeActionValueChangeCursor);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
