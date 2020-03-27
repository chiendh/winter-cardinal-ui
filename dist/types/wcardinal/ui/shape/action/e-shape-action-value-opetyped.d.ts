import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare abstract class EShapeActionValueOpetyped<SUBTYPE extends number, OPETYPE extends number> extends EShapeActionValueSubtyped<SUBTYPE> {
    readonly opetype: OPETYPE;
    constructor(type: EShapeActionValueType, condition: string, subtype: SUBTYPE, opetype: OPETYPE);
    isEquals(value: EShapeActionValue): boolean;
}
