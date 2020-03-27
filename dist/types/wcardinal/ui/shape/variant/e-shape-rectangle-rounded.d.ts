import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
export declare class EShapeRectangleRounded extends EShapePrimitive {
    constructor(type?: EShapeType);
    clone(): EShapeRectangleRounded;
    private containsAbs_;
    containsAbs(x: number, y: number, ax: number, ay: number): boolean;
}
