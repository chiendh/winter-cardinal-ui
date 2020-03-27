import { EShape } from "./e-shape";
import { EShapeRuntime } from "./e-shape-runtime";
export declare const EShapeRuntimes: {
    [type: number]: (new (shape: EShape) => EShapeRuntime) | undefined;
};
