import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueChangeText } from "./e-shape-action-value-change-text";
export declare class EShapeActionRuntimeChangeTextText extends EShapeActionRuntimeConditional {
    protected text: EShapeActionExpression<string>;
    constructor(value: EShapeActionValueChangeText);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
