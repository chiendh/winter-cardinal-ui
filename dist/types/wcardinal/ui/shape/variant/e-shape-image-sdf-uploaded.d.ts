import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
export declare class EShapeImageSdfUploaded extends EShapeTextUploaded {
    protected textureWidth: number;
    protected textureHeight: number;
    constructor(buffer: EShapeBuffer, voffset: number, ioffset: number, tvcount: number, ticount: number, vcount: number, icount: number, antialiasWeight: number);
    init(shape: EShape): this;
    update(shape: EShape): void;
    protected updateVertexAndStep(buffer: EShapeBuffer, shape: EShape): void;
    protected updateUv(buffer: EShapeBuffer, shape: EShape): void;
}
