import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTriangleUploaded } from "./e-shape-triangle-uploaded";
export declare const createTriangleUploaded: (buffer: EShapeBuffer, shape: EShape, voffset: number, ioffset: number, antialiasWeight: number) => EShapeTriangleUploaded | null;
