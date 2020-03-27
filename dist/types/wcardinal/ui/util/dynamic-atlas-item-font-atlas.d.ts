import { BaseTexture } from "pixi.js";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
import { DynamicSDFFontAtlas } from "./dynamic-sdf-font-atlas";
export declare class DynamicAtlasItemFontAtlas extends DynamicAtlasItem {
    canvas: HTMLCanvasElement | null;
    constructor(atlas: DynamicSDFFontAtlas, baseTexture: BaseTexture);
    render(context: CanvasRenderingContext2D): void;
}
