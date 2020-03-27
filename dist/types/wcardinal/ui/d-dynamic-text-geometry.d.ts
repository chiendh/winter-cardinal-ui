import { MeshGeometry } from "pixi.js";
import { DynamicFontAtlas } from "./util/dynamic-font-atlas";
import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";
export declare class DDynamicTextGeometry extends MeshGeometry {
    width: number;
    height: number;
    clipped: boolean;
    constructor();
    update(text: string, atlas: DynamicFontAtlas | null, clippingWidth: number | undefined): void;
    protected writeCharacter(vertices: Float32Array, uvs: Float32Array, indices: Uint16Array, index: number, x: number, y: number, character: DynamicFontAtlasCharacter, width: number, height: number): void;
    protected writeCharacterEmpty(vertices: Float32Array, uvs: Float32Array, indices: Uint16Array, index: number): void;
}
