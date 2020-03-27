import { Container, Renderer, Sprite } from "pixi.js";
export declare class DMapTile {
    tx: number;
    ty: number;
    protected _sprite: Sprite;
    constructor(parent: Container, tx: number, ty: number, px: number, py: number, scale: number);
    load(url: string, onLoaded: () => void): void;
    transform(px: number, py: number, scale: number): void;
    get loaded(): boolean;
    render(renderer: Renderer): void;
    destroy(): void;
}
