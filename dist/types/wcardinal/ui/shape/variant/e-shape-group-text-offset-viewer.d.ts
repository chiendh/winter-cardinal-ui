import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOffset, EShapeTextOffsetLike } from "../e-shape-text-offset";
export declare class EShapeGroupTextOffsetViewer implements EShapeTextOffset {
    constructor();
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
