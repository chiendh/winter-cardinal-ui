import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";
import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";
export interface EShapeLineOfAnyPointsStrokeImplParent {
    updateUploaded(): void;
}
export declare class EShapeLineOfAnyPointsStrokeImpl implements EShapeLineOfAnyPointsStroke {
    protected _parent: EShapeLineOfAnyPointsStrokeImplParent;
    protected _id: number;
    protected _color: EShapeLineOfAnyValue;
    protected _alpha: EShapeLineOfAnyValue;
    constructor(parent: EShapeLineOfAnyPointsStrokeImplParent);
    get id(): number;
    get color(): EShapeLineOfAnyValue;
    set color(color: EShapeLineOfAnyValue);
    get alpha(): EShapeLineOfAnyValue;
    set alpha(alpha: EShapeLineOfAnyValue);
    set(color?: EShapeLineOfAnyValue, alpha?: EShapeLineOfAnyValue): void;
    getColor(index: number, def: number): number;
    getAlpha(index: number, def: number): number;
    isStaticColor(): boolean;
    isStaticAlpha(): boolean;
    toDirty(): void;
}
