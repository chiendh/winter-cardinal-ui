import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare abstract class EShapeActionValueSubtyped<SUBTYPE extends number> extends EShapeActionValueBase {
    readonly subtype: SUBTYPE;
    constructor(type: EShapeActionValueType, condition: string, subtype: SUBTYPE);
    isEquals(value: EShapeActionValue): boolean;
}
