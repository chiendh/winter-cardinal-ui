import { BaseTexture } from "pixi.js";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
export declare class DynamicAtlasItemImage extends DynamicAtlasItem {
    image: HTMLImageElement;
    constructor(image: HTMLImageElement, baseTexture: BaseTexture);
    render(context: CanvasRenderingContext2D): void;
}
