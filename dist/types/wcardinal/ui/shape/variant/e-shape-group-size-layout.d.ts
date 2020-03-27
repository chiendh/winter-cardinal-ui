import { Matrix, Point } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeLayout } from "../e-shape-layout";
export declare class EShapeGroupSizeLayout implements EShapeLayout {
    protected static WORK_TRANSFORM: Matrix;
    protected shape: EShape;
    protected base: Point;
    protected shapeBase: Point;
    protected transform: Matrix;
    constructor(shape: EShape, bx: number, by: number);
    isCompatible(shape: EShape): boolean;
    reset(shape: EShape, baseX: number, baseY: number): void;
    update(shape: EShape, baseX: number, baseY: number, pivotX: number, pivotY: number): void;
}
