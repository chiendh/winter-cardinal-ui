import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeLabelUploaded } from "./e-shape-label-uploaded";
export declare const createLabelUploaded: (buffer: EShapeBuffer, shape: EShape, voffset: number, ioffset: number, antialiasWeight: number) => EShapeLabelUploaded | null;
