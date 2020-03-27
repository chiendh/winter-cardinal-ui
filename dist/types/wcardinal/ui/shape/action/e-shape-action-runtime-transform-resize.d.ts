import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueTransformResize } from "./e-shape-action-value-transform-resize";
export declare class EShapeActionRuntimeTransformResize extends EShapeActionRuntimeConditional {
    protected readonly size: EShapeActionExpression<number>;
    constructor(value: EShapeActionValueTransformResize, reset: EShapeRuntimeReset);
    protected adjustPosition(shape: EShape, runtime: EShapeRuntime, dsx: number, dsy: number, originX: number, originY: number): void;
}
