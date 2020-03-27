import { Texture } from "pixi.js";
export declare class UtilTexturePlane {
    protected static INSTANCE: UtilTexturePlane | null;
    protected _backgroundCache: Map<number, Texture>;
    protected _backgroundAttribute: string;
    protected _borderCache: Map<number, Map<number, Texture>>;
    protected _borderAttribute: (width: number) => string;
    protected _onUpdate: () => void;
    constructor();
    protected toCornerTl(offset: number, size: number, tl: number): string;
    protected toCornerBr(offset: number, size: number, br: number): string;
    protected make(radius: number, offset: number, attr: string): Texture;
    protected toSvg(realSize: number, attr: string, d: string): Texture;
    newBackground(radius: number): Texture;
    newBorder(radius: number, width: number): Texture;
    getBackground(radius: number): Texture;
    getBorder(radius: number, width: number): Texture;
    static getInstance(): UtilTexturePlane;
}
