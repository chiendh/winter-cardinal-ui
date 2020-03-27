import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";
export interface EShapeLineOfAnyPointsFillImplParent {
    updateUploaded(): void;
}
export declare class EShapeLineOfAnyPointsFillImpl implements EShapeLineOfAnyPointsFill {
    protected _parent: EShapeLineOfAnyPointsFillImplParent;
    protected _id: number;
    protected _color: EShapeLineOfAnyValue;
    protected _alpha: EShapeLineOfAnyValue;
    constructor(parent: EShapeLineOfAnyPointsFillImplParent);
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
