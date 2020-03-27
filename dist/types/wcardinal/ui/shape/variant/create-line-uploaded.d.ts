import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeLineUploaded } from "./e-shape-line-uploaded";
export declare const createLineUploaded: (buffer: EShapeBuffer, shape: EShape, voffset: number, ioffset: number, antialiasWeight: number) => EShapeLineUploaded | null;
