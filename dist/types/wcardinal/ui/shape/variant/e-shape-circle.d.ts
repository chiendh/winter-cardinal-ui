import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
export declare class EShapeCircle extends EShapePrimitive {
    constructor(type?: EShapeType);
    clone(): EShapeCircle;
    containsAbs(x: number, y: number, ax: number, ay: number): boolean;
}
