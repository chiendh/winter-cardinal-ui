import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
export declare class EShapeTriangle extends EShapePrimitive {
    constructor(type?: EShapeType);
    clone(): EShapeTriangle;
    protected containsAbs_(x: number, y: number, a: number, ay1: number, ay2: number): boolean;
    containsAbs(x: number, y: number, ax: number, ay: number): boolean;
}
