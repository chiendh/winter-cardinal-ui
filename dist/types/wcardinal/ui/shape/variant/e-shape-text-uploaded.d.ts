import { Texture } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";
import { EShapeTextAtlas } from "../e-shape-text";
import { EShapeUploadedBase } from "../e-shape-uploaded";
export declare abstract class EShapeTextUploaded extends EShapeUploadedBase {
    protected textTexture: Texture | null;
    protected textTextureTransformId: number;
    protected textValue: string;
    protected textFamily: string;
    protected textSize: number;
    protected textColor: number;
    protected textAlpha: number;
    protected textWeight: number;
    protected textStyle: number;
    protected textAlignHorizontal: number;
    protected textAlignVertical: number;
    protected textOffsetHorizontal: number;
    protected textOffsetVertical: number;
    protected textOutlineWidth: number;
    protected textOutlineColor: number;
    protected textOutlineAlpha: number;
    protected textSpacingHorizontal: number;
    protected textSpacingVertical: number;
    protected textDirection: number;
    protected textPaddingHorizontal: number;
    protected textPaddingVertical: number;
    protected textClipping: boolean;
    protected textVertexOffset: number;
    protected textIndexOffset: number;
    protected textVertexCount: number;
    protected textIndexCount: number;
    constructor(buffer: EShapeBuffer, voffset: number, ioffset: number, tvcount: number, ticount: number, vcount: number, icount: number, antialiasWeight: number);
    initText(): void;
    isCompatible(shape: EShape): boolean;
    protected updateText(buffer: EShapeBuffer, shape: EShape): void;
    protected updateColor(buffer: EShapeBuffer, shape: EShape): void;
    protected updateTextVertex(buffer: EShapeBuffer, shape: EShape, textAtlas: EShapeTextAtlas): void;
    protected updateTextColorFill(buffer: EShapeBuffer, shape: EShape): void;
    protected updateTextColorStroke(buffer: EShapeBuffer, shape: EShape): void;
    protected updateTextStep(buffer: EShapeBuffer, shape: EShape): void;
    buildUnit(builder: EShapeBufferUnitBuilder): void;
}
