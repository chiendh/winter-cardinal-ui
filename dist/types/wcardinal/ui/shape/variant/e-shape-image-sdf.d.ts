import { EShapeType } from "../e-shape-type";
import { EShapeImage } from "./e-shape-image";
export declare class EShapeImageSdf extends EShapeImage {
    constructor(image?: HTMLImageElement, type?: EShapeType);
    clone(): EShapeImageSdf;
}
