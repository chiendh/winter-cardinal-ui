import { EShapeLineOfAnyPointsPoint } from "./e-shape-line-of-any-points-point";
import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";
export interface EShapeLineOfAnyPointsPointImplParent {
    readonly length: number;
    updateUploaded(): void;
}
export declare class EShapeLineOfAnyPointsPointImpl implements EShapeLineOfAnyPointsPoint {
    protected _parent: EShapeLineOfAnyPointsPointImplParent;
    protected _id: number;
    protected _x: EShapeLineOfAnyValue;
    protected _y: EShapeLineOfAnyValue;
    protected _defX: number;
    protected _defY: number;
    protected _limit: number | null;
    protected _limitComputed: number;
    protected _limitId: number;
    protected _limitParentLength: number;
    constructor(parent: EShapeLineOfAnyPointsPointImplParent, defX: number, defY: number);
    get id(): number;
    get x(): EShapeLineOfAnyValue;
    set x(x: EShapeLineOfAnyValue);
    get y(): EShapeLineOfAnyValue;
    set y(y: EShapeLineOfAnyValue);
    get limit(): number | null;
    set limit(limit: number | null);
    set(x?: EShapeLineOfAnyValue, y?: EShapeLineOfAnyValue): void;
    getX(index: number): number;
    getY(index: number): number;
    getLimit(): number;
    protected updateLimitComputed(): void;
    protected calcLimit(value: EShapeLineOfAnyValue, parentLenght: number, def: number): number;
    isStaticX(): boolean;
    isStaticY(): boolean;
    toDirty(): void;
}
