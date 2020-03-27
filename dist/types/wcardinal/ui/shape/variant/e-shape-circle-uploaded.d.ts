import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
export declare class EShapeCircleUploaded extends EShapeTextUploaded {
    init(shape: EShape): this;
    update(shape: EShape): void;
    protected updateCircleVertexAndStep(buffer: EShapeBuffer, shape: EShape): void;
    protected updateCircleUv(buffer: EShapeBuffer, shape: EShape): void;
}
