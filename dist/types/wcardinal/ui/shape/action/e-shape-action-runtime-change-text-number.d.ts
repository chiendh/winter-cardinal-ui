import { NumberFormatter } from "../../util/number-formatter";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueChangeText } from "./e-shape-action-value-change-text";
export declare class EShapeActionRuntimeChangeTextNumber extends EShapeActionRuntimeConditional {
    protected number: EShapeActionExpression<number>;
    protected formatter: NumberFormatter | null;
    constructor(value: EShapeActionValueChangeText, format: string);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
