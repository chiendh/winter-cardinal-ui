import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
export declare class EShapeLabel extends EShapePrimitive {
    constructor(type?: EShapeType);
    clone(): EShapeLabel;
}
