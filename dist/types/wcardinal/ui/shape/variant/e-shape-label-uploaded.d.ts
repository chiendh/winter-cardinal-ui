import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
export declare class EShapeLabelUploaded extends EShapeTextUploaded {
    init(shape: EShape): this;
    update(shape: EShape): void;
    updateLabelVertex(buffer: EShapeBuffer, shape: EShape): void;
    updateLabelUv(buffer: EShapeBuffer, shape: EShape): void;
}
