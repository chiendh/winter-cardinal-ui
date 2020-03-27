import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTagValueRange, EShapeTagValueRangeLike, EShapeTagValueRangeParent, EShapeTagValueRangeType } from "../e-shape-tag-value-range";
export declare class EShapeTagValueRangeImpl implements EShapeTagValueRange {
    protected _type: EShapeTagValueRangeType;
    protected _from: number;
    protected _to: number;
    parent?: EShapeTagValueRangeParent;
    constructor();
    get type(): EShapeTagValueRangeType;
    set type(type: EShapeTagValueRangeType);
    get from(): number;
    set from(from: number);
    get to(): number;
    set to(to: number);
    set(from?: number | null, to?: number | null): boolean;
    normalize(value: number): number;
    isEquals(target: EShapeTagValueRangeLike): boolean;
    copy(target: EShapeTagValueRangeLike): this;
    protected copy_(type: EShapeTagValueRangeType, from: number, to: number): this;
    toObject(): EShapeTagValueRangeLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
