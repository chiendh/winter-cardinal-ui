import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";
export declare class EShapeLineOfCirclesUploaded extends EShapeLineOfAnyUploaded {
    init(shape: EShape): this;
    update(shape: EShape): void;
    protected updateVertexAndStep(buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints): void;
    protected updateUv(buffer: EShapeBuffer, shape: EShape): void;
}
