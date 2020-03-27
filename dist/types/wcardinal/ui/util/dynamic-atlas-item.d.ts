import { BaseTexture, Rectangle, Texture } from "pixi.js";
export declare abstract class DynamicAtlasItem {
    id: string;
    ref: number;
    frame: Rectangle;
    texture: Texture;
    width: number;
    height: number;
    strokeWidth: number;
    constructor(id: string, width: number, height: number, strokeWidth: number, baseTexture: BaseTexture);
    abstract render(context: CanvasRenderingContext2D): void;
    applyFrame(): void;
    destroy(): void;
}
