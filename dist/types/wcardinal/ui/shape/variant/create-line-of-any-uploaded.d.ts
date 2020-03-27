import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
interface Initializable {
    init(shape: EShape): this;
}
export declare type EShapeLineOfAnyUploadedConstructor<T extends Initializable> = new (buffer: EShapeBuffer, voffset: number, ioffset: number, tvcount: number, ticount: number, vcount: number, icount: number, antialiasWeight: number, pointCount: number) => T;
export declare const createLineOfAnyUploaded: <T extends Initializable>(buffer: EShapeBuffer, shape: EShape, voffset: number, vcountPerPoint: number, ioffset: number, icountPerPoint: number, antialiasWeight: number, constructor: EShapeLineOfAnyUploadedConstructor<T>) => T | null;
export {};
