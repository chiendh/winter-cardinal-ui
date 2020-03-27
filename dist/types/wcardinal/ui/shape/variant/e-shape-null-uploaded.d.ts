import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploadedBase } from "../e-shape-uploaded";
export declare class EShapeNullUploaded extends EShapeUploadedBase {
    constructor(buffer: EShapeBuffer, voffset: number, ioffset: number);
    init(shape: EShape): this;
    update(shape: EShape): void;
}
