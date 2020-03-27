import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
export declare abstract class EShapeLineOfAnyUploaded extends EShapeTextUploaded {
    protected pointId: number;
    protected pointCount: number;
    protected pointCountReserved: number;
    protected pointSizeId: number;
    protected pointOffsetId: number;
    protected pointFillId: number;
    protected pointStrokeId: number;
    constructor(buffer: EShapeBuffer, voffset: number, ioffset: number, tvcount: number, ticount: number, vcount: number, icount: number, antialiasWeight: number, pointCountReserved: number);
    isCompatible(shape: EShape): boolean;
    protected updateLineOfAnyColorFill(buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints, vcountPerPoint: number): void;
    protected updateLineOfAnyColorStroke(buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints, vcountPerPoint: number): void;
}
