import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";
export declare class EShapeActionRuntimeOpenFlow extends EShapeActionRuntimeOpen {
    constructor(value: EShapeActionValueOpen);
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
