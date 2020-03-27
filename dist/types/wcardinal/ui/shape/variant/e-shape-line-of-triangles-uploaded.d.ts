import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";
export declare class EShapeLineOfTrianglesUploaded extends EShapeLineOfAnyUploaded {
    init(shape: EShape): this;
    update(shape: EShape): void;
    protected updateVertexStepAndUvs(buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints): void;
}
