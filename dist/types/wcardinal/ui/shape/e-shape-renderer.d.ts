import { BaseTexture, ObjectRenderer, Renderer, Shader, Texture } from "pixi.js";
import { DynamicAtlas } from "../util/dynamic-atlas";
import { DynamicSDFFontAtlases } from "../util/dynamic-sdf-font-atlases";
import { EShape } from "./e-shape";
import { EShapeBuffer } from "./e-shape-buffer";
import { EShapeContainer } from "./e-shape-container";
import { EShapeRendererIterator } from "./e-shape-renderer-iterator";
export declare class EShapeRenderer extends ObjectRenderer {
    static SHADER: Shader | null;
    protected _shader: Shader | null;
    protected _iterator: EShapeRendererIterator;
    protected _bufferSizeMax: number;
    constructor(renderer: Renderer);
    protected getBufferSizeMax(renderer: Renderer): number;
    updateAtlas(shape: EShape, atlas: DynamicAtlas, fontAtlases: DynamicSDFFontAtlases, defaultTexture: Texture, baseTexture: BaseTexture): void;
    updateAtlases(shapes: EShape[], atlas: DynamicAtlas, fontAtlases: DynamicSDFFontAtlases, defaultTexture: Texture, baseTexture: BaseTexture): void;
    updateFontAtlas(shape: EShape, atlas: DynamicAtlas, fontAtlases: DynamicSDFFontAtlases, defaultTexture: Texture): void;
    updateFontAtlases(shapes: EShape[], atlas: DynamicAtlas, fontAtlases: DynamicSDFFontAtlases, defaultTexture: Texture): void;
    render_(container: EShapeContainer, shapes: EShape[], isDirty: boolean): void;
    updateBuffers(shapes: EShape[], buffers: EShapeBuffer[], renderer: Renderer, antialiasWeight: number): void;
}
