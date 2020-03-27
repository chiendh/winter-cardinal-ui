import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
import { EShapeActionValueChangeColorBrightness } from "./e-shape-action-value-change-color-brightness";
export declare class EShapeActionRuntimeChangeColorBrightnessText extends EShapeActionRuntimeChangeColorBrightness {
    constructor(value: EShapeActionValueChangeColorBrightness);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
