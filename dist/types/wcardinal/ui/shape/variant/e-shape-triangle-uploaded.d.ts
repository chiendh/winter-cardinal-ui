import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
export declare class EShapeTriangleUploaded extends EShapeTextUploaded {
    init(shape: EShape): this;
    update(shape: EShape): void;
    protected updateVertexStepAndUv(buffer: EShapeBuffer, shape: EShape): void;
}
