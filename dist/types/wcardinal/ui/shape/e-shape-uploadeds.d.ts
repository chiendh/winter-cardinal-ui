import { EShape } from "./e-shape";
import { EShapeBuffer } from "./e-shape-buffer";
import { EShapeUploaded } from "./e-shape-uploaded";
export declare type EShapeUploadedCreator = (buffer: EShapeBuffer, shape: EShape, voffset: number, ioffset: number, antialiasWeight: number) => EShapeUploaded | null;
export declare const EShapeUploadeds: {
    [type: number]: EShapeUploadedCreator | undefined;
};
