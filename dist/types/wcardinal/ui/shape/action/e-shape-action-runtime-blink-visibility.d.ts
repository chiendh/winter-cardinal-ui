import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
import { EShapeActionValueBlink } from "./e-shape-action-value-blink";
export declare class EShapeActionRuntimeBlinkVisibility extends EShapeActionRuntimeBlink {
    constructor(value: EShapeActionValueBlink);
    protected toOn(shape: EShape, runtime: EShapeRuntime): void;
    protected toOff(shape: EShape, runtime: EShapeRuntime): void;
}
