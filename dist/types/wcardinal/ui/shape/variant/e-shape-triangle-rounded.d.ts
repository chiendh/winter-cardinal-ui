import { EShapeType } from "../e-shape-type";
import { EShapeTriangle } from "./e-shape-triangle";
export declare class EShapeTriangleRounded extends EShapeTriangle {
    constructor(type?: EShapeType);
    clone(): EShapeTriangleRounded;
    protected containsCorner_(x: number, y: number, r: number, aw: number): true | undefined;
    protected containsCorner(x: number, y: number, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r12: number, r13: number, aw: number, radius: number): true | undefined;
    containsAbs(x: number, y: number, ax: number, ay: number): boolean;
}
