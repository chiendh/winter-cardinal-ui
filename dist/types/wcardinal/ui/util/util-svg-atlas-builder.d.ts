import { Rectangle, SCALE_MODES, Texture } from "pixi.js";
export interface UtilSvgAtlasBuilderBuildOptions {
    force?: boolean;
    scaling?: SCALE_MODES;
    resolution?: number;
}
export declare class UtilSvgAtlasBuilder {
    protected _width: number;
    protected _ratio: number;
    protected _margin: number;
    protected _frames: {
        [name: string]: Rectangle;
    };
    protected _svg: string;
    protected _nextX: number;
    protected _nextY: number;
    protected _height: number;
    protected _built?: {
        [name: string]: Texture;
    };
    constructor(width: number, ratio: number, margin: number);
    get width(): number;
    get ratio(): number;
    get margin(): number;
    add(name: string, width: number, height: number, path: string): boolean;
    get mappings(): {
        [name: string]: Texture;
    };
    build(options?: UtilSvgAtlasBuilderBuildOptions): {
        [name: string]: Texture;
    };
}
