import { EShapeFill, EShapeFillLike } from "../e-shape-fill";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
export declare class EShapeGroupFillViewer implements EShapeFill {
    constructor();
    get enable(): boolean;
    set enable(enable: boolean);
    get color(): number;
    set color(color: number);
    get alpha(): number;
    set alpha(alpha: number);
    copy(target?: Partial<EShapeFillLike>): void;
    set(enable: boolean, color: number, alpha: number): void;
    clone(): EShapeGroupFillViewer;
    toObject(): EShapeFillLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
