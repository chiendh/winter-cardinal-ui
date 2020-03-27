import { Matrix, Point } from "pixi.js";
export declare class EShapeEditor {
    localTransform: Matrix;
    internalTransform: Matrix;
    internalTransformParentInverse: Matrix;
    rotation: number;
    size: Point;
    constructor();
}
