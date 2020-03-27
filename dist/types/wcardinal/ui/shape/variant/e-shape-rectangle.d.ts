import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
export declare class EShapeRectangle extends EShapePrimitive {
    constructor(type?: EShapeType);
    clone(): EShapeRectangle;
    containsAbs(x: number, y: number, ax: number, ay: number): boolean;
}
