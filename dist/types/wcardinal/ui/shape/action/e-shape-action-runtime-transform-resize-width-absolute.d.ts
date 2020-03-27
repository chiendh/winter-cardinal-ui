import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
import { EShapeActionValueTransformResize } from "./e-shape-action-value-transform-resize";
export declare class EShapeActionRuntimeTransformResizeWidthAbsolute extends EShapeActionRuntimeTransformResize {
    protected origin: number;
    constructor(value: EShapeActionValueTransformResize);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
