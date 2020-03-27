import { EShapeFill, EShapeFillLike } from "../e-shape-fill";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";
export declare class EShapeGroupFillEditor implements EShapeFill {
    protected _parent: EShapeGroupPropertyParent;
    constructor(parent: EShapeGroupPropertyParent);
    get enable(): boolean;
    set enable(enable: boolean);
    get color(): number;
    set color(color: number);
    get alpha(): number;
    set alpha(alpha: number);
    copy(target?: Partial<EShapeFillLike>): void;
    set(enable: boolean, color: number, alpha: number): void;
    clone(): EShapeGroupFillEditor;
    toObject(): EShapeFillLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
