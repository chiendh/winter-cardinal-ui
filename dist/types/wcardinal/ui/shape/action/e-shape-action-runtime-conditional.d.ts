import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression, EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionValue } from "./e-shape-action-value";
export declare class EShapeActionRuntimeConditional extends EShapeActionRuntime {
    protected readonly condition: EShapeActionExpression<boolean>;
    constructor(value: EShapeActionValue, reset: EShapeRuntimeReset);
}
