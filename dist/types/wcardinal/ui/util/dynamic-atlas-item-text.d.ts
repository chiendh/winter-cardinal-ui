import { BaseTexture, Text } from "pixi.js";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
export declare class DynamicAtlasItemText extends DynamicAtlasItem {
    protected _text: Text;
    constructor(id: string, text: Text, baseTexture: BaseTexture);
    render(context: CanvasRenderingContext2D): void;
}
