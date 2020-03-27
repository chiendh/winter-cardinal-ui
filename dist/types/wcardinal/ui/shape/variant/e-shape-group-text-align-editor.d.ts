import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextAlign, EShapeTextAlignLike } from "../e-shape-text-align";
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";
export declare class EShapeGroupTextAlignEditor implements EShapeTextAlign {
    protected _parent: EShapeGroupPropertyParent;
    constructor(parent: EShapeGroupPropertyParent);
    get horizontal(): EShapeTextAlignHorizontal;
    set horizontal(horizontal: EShapeTextAlignHorizontal);
    get vertical(): EShapeTextAlignVertical;
    set vertical(vertical: EShapeTextAlignVertical);
    copy(target?: Partial<EShapeTextAlignLike>): void;
    set(horizontal?: EShapeTextAlignHorizontal, vertical?: EShapeTextAlignVertical): void;
    toObject(): EShapeTextAlignLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
