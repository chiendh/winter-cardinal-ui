import { BaseTexture, Texture } from "pixi.js";
import { EShapeBufferUnit } from "./e-shape-buffer-unit";
export declare class EShapeBufferUnitBuilder {
    index: number;
    baseTexture: BaseTexture | null;
    units: EShapeBufferUnit[];
    constructor();
    begin(): void;
    push(texture: Texture, indexOffset: number): void;
    end(): void;
    destroy(): void;
}
