import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueBlink } from "./e-shape-action-value-blink";
export declare class EShapeActionRuntimeBlink extends EShapeActionRuntimeConditional {
    protected interval: number;
    constructor(value: EShapeActionValueBlink, reset: EShapeRuntimeReset);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
    protected toOn(shape: EShape, runtime: EShapeRuntime): void;
    protected toOff(shape: EShape, runtime: EShapeRuntime): void;
}
