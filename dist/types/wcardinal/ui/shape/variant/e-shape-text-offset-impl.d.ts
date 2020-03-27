import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOffset, EShapeTextOffsetLike } from "../e-shape-text-offset";
import { EShapeTextOffsetImplParent } from "./e-shape-text-offset-impl-parent";
export declare class EShapeTextOffsetImpl implements EShapeTextOffset {
    protected _parent: EShapeTextOffsetImplParent;
    protected _horizontal: number;
    protected _vertical: number;
    constructor(parent: EShapeTextOffsetImplParent, horizontal: number, vertical: number);
    get horizontal(): number;
    set horizontal(horizontal: number);
    get vertical(): number;
    set vertical(vertical: number);
    copy(target?: Partial<EShapeTextOffsetLike>): void;
    set(horizontal?: number, vertical?: number): void;
    toObject(): EShapeTextOffsetLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
