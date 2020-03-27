import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
import { EShapeActionValueChangeColorCode } from "./e-shape-action-value-change-color-code";
export declare class EShapeActionRuntimeChangeColorCodeTextOutline extends EShapeActionRuntimeChangeColorCode {
    constructor(value: EShapeActionValueChangeColorCode);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
