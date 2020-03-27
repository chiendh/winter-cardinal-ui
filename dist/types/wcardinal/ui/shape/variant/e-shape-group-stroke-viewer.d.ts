import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeStroke, EShapeStrokeLike } from "../e-shape-stroke";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
export declare class EShapeGroupStrokeViewer implements EShapeStroke {
    constructor();
    get enable(): boolean;
    set enable(enable: boolean);
    get color(): number;
    set color(color: number);
    get alpha(): number;
    set alpha(alpha: number);
    get width(): number;
    set width(width: number);
    get align(): number;
    set align(width: number);
    get side(): EShapeStrokeSide;
    set side(side: EShapeStrokeSide);
    copy(target?: Partial<EShapeStrokeLike>): void;
    set(enable?: boolean, color?: number, alpha?: number, width?: number, side?: EShapeStrokeSide): void;
    clone(): EShapeGroupStrokeViewer;
    toObject(): EShapeStrokeLike;
    serialize(manager: EShapeResourceManagerSerialization): number;
    deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
