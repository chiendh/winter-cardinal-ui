import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
export declare class EShapeRectangleRoundedUploaded extends EShapeTextUploaded {
    init(shape: EShape): this;
    update(shape: EShape): void;
    protected updateVertexClippingStepAndUv(buffer: EShapeBuffer, shape: EShape): void;
}
