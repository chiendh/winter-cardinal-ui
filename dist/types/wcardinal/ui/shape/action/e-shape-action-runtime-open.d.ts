import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";
export declare class EShapeActionRuntimeOpen extends EShapeActionRuntimeConditional {
    protected readonly target: EShapeActionExpression<string | null>;
    constructor(value: EShapeActionValueOpen, reset: EShapeRuntimeReset);
}
