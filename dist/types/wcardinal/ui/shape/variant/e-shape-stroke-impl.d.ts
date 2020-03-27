import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeStroke, EShapeStrokeLike } from "../e-shape-stroke";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeStrokeImplParent } from "./e-shape-stroke-impl-parent";
export declare class EShapeStrokeImpl implements EShapeStroke {
    protected _parent: EShapeStrokeImplParent;
    protected _enable: boolean;
    protected _color: number;
    protected _alpha: number;
    protected _width: number;
    protected _align: number;
    protected _side: EShapeStrokeSide;
    constructor(parent: EShapeStrokeImplParent, enable: boolean, color: number, alpha: number, width: number, align: number, side: EShapeStrokeSide);
    get enable(): boolean;
    set enable(enable: boolean);
    get color(): number;
    set color(color: number);
    get alpha(): number;
    set alpha(alpha: number);
    get width(): number;
    set width(width: number);
    get align(): number;
    set align(align: number);
    get side(): EShapeStrokeSide;
    set side(side: EShapeStrokeSide);
    copy(target?: Partial<EShapeStrokeLike>): void;
    set(enable?: boolean, color?: number, alpha?: number, width?: number, align?: number, side?: EShapeStrokeSide): void;
    clone(): EShapeStroke;
    toObject(): EShapeStrokeLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
