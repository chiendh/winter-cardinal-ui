import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
export declare type EShapeActionExpression<T> = (shape: EShape, time: number) => T;
export declare class EShapeActionRuntime {
    reset: EShapeRuntimeReset;
    constructor(reset?: EShapeRuntimeReset);
    toExpression<T>(expression: string, def: EShapeActionExpression<T>, defLiteral: string): EShapeActionExpression<T>;
    protected toContainer(shape: EShape): any | null;
    execute(shape: EShape, runtime: EShapeRuntime, time: number): void;
}
