import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
export declare class EShapeLineUploaded extends EShapeTextUploaded {
    protected pointCount: number;
    protected pointId: number;
    protected pointsClosed: boolean;
    protected length: number;
    constructor(buffer: EShapeBuffer, voffset: number, ioffset: number, tvcount: number, ticount: number, vcount: number, icount: number, antialiasWeight: number);
    init(shape: EShape): this;
    isCompatible(shape: EShape): boolean;
    update(shape: EShape): void;
    protected updateLineClipping(buffer: EShapeBuffer, shape: EShape): void;
    protected updateLineVertexStepAndColorFill(buffer: EShapeBuffer, shape: EShape): void;
    protected updateColorFillAndStroke(buffer: EShapeBuffer, shape: EShape, vertexCount: number): void;
    updateLineUv(buffer: EShapeBuffer, shape: EShape): void;
}
