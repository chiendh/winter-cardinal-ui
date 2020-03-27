import { EShapeFill, EShapeFillLike } from "../e-shape-fill";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeFillImplParent } from "./e-shape-fill-impl-parent";
export declare class EShapeFillImpl implements EShapeFill {
    protected _parent: EShapeFillImplParent;
    protected _enable: boolean;
    protected _color: number;
    protected _alpha: number;
    constructor(parent: EShapeFillImplParent, enable: boolean, color: number, alpha: number);
    get enable(): boolean;
    set enable(enable: boolean);
    get color(): number;
    set color(color: number);
    get alpha(): number;
    set alpha(alpha: number);
    copy(target?: Partial<EShapeFillLike>): void;
    set(enable?: boolean, color?: number, alpha?: number): void;
    clone(): EShapeFill;
    toObject(): EShapeFillLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
