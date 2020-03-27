import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
import { EShapeActionValueTransformResize } from "./e-shape-action-value-transform-resize";
export declare class EShapeActionRuntimeTransformResizeSizeRelative extends EShapeActionRuntimeTransformResize {
    protected originX: number;
    protected originY: number;
    constructor(value: EShapeActionValueTransformResize);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
