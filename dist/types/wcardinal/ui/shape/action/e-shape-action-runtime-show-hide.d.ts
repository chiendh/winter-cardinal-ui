import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueShowHide } from "./e-shape-action-value-show-hide";
export declare class EShapeActionRuntimeShowHide extends EShapeActionRuntimeConditional {
    visibility: boolean;
    constructor(value: EShapeActionValueShowHide);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
