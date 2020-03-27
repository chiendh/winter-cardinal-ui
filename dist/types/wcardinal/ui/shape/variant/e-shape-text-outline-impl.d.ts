import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOutline, EShapeTextOutlineLike } from "../e-shape-text-outline";
import { EShapeTextOutlineImplParent } from "./e-shape-text-outline-impl-parent";
export declare class EShapeTextOutlineImpl implements EShapeTextOutline {
    protected _parent: EShapeTextOutlineImplParent;
    protected _enable: boolean;
    protected _color: number;
    protected _alpha: number;
    protected _width: number;
    constructor(parent: EShapeTextOutlineImplParent, enable: boolean, color: number, alpha: number, width: number);
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
    clone(): EShapeTextOutline;
    toObject(): EShapeTextOutlineLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
