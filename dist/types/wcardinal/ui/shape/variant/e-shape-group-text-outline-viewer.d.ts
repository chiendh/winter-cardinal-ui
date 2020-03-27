import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOutline, EShapeTextOutlineLike } from "../e-shape-text-outline";
export declare class EShapeGroupTextOutlineViewer implements EShapeTextOutline {
    constructor();
    get enable(): boolean;
    set enable(enable: boolean);
    get color(): number;
    set color(color: number);
    get alpha(): number;
    set alpha(alpha: number);
    get width(): number;
    set width(width: number);
    copy(target?: Partial<EShapeTextOutlineLike>): void;
    set(enable?: boolean, color?: number, alpha?: number, width?: number): void;
    clone(): EShapeGroupTextOutlineViewer;
    toObject(): EShapeTextOutlineLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
