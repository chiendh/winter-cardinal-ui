import { EShapeType } from "../e-shape-type";
import { EShapeRectangle } from "./e-shape-rectangle";
export declare class EShapeImage extends EShapeRectangle {
    constructor(image?: HTMLImageElement, type?: EShapeType);
    clone(): EShapeImage;
}
