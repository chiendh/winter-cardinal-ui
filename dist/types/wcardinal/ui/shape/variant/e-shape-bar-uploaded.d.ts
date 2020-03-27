import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
export declare class EShapeBarUploaded extends EShapeTextUploaded {
    protected pointsId: number;
    protected pointsStyle: EShapePointsStyle;
    constructor(buffer: EShapeBuffer, voffset: number, ioffset: number, tvcount: number, ticount: number, vcount: number, icount: number, antialiasWeight: number);
    init(shape: EShape): this;
    update(shape: EShape): void;
    protected updateVertexStepAndColorFill(buffer: EShapeBuffer, shape: EShape): void;
    protected updateColorFillAndStroke(buffer: EShapeBuffer, shape: EShape, vertexCount: number): void;
    protected updateUv(buffer: EShapeBuffer, shape: EShape): void;
}
