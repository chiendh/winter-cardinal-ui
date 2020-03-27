import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueTransformMove } from "./e-shape-action-value-transform-move";
export declare class EShapeActionRuntimeTransformMove extends EShapeActionRuntimeConditional {
    protected readonly amount: EShapeActionExpression<number>;
    constructor(value: EShapeActionValueTransformMove, reset: EShapeRuntimeReset);
}
