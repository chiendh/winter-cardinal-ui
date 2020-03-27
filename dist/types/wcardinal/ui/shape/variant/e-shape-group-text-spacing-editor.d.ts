import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOffsetLike } from "../e-shape-text-offset";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";
export declare class EShapeGroupTextSpacingEditor {
    protected _parent: EShapeGroupPropertyParent;
    constructor(parent: EShapeGroupPropertyParent);
    get horizontal(): number;
    set horizontal(horizontal: number);
    get vertical(): number;
    set vertical(vertical: number);
    copy(target: EShapeTextOffsetLike): void;
    set(horizontal: number, vertical: number): void;
    toObject(): EShapeTextOffsetLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
