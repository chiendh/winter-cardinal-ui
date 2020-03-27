import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscInputData } from "./e-shape-action-runtime-misc-input-data";
export declare class EShapeActionRuntimeMiscInput extends EShapeActionRuntime {
    static data: EShapeActionRuntimeMiscInputData | null;
    constructor();
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
    static getData(): EShapeActionRuntimeMiscInputData;
}
