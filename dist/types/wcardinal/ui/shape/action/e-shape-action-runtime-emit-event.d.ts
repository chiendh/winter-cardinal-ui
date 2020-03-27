import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueEmitEvent } from "./e-shape-action-value-emit-event";
export declare class EShapeActionRuntimeEmitEvent extends EShapeActionRuntimeConditional {
    protected name: EShapeActionExpression<string | null>;
    constructor(value: EShapeActionValueEmitEvent);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
