import { IPoint, Point } from "pixi.js";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeParent } from "./e-shape-group-size-parent";
export declare class EShapeGroupSizeShadowed implements EShapeGroupSize {
    protected _parent: EShapeGroupSizeParent;
    protected _size: Point;
    constructor(parent: EShapeGroupSizeParent, x: number, y: number);
    init(): void;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    set(x?: number | undefined, y?: number | undefined): this;
    clone(): EShapeGroupSizeShadowed;
    copy(): void;
    copyFrom(point: IPoint): this;
    copyTo(point: IPoint): IPoint;
    equals(point: IPoint): boolean;
    fit(): void;
    protected onChange(ox: number, oy: number): void;
}
