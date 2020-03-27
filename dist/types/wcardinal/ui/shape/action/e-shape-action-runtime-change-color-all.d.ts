import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeChangeColor } from "./e-shape-action-runtime-change-color";
import { EShapeActionValueChangeColor } from "./e-shape-action-value-change-color";
export declare class EShapeActionRuntimeChangeColorAll extends EShapeActionRuntimeChangeColor {
    constructor(value: EShapeActionValueChangeColor);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
