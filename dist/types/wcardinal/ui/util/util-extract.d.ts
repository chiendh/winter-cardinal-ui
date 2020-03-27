import { Renderer, RenderTexture } from "pixi.js";
import { DApplicationLayerLike } from "../d-application-layer-like";
import { DApplicationLike } from "../d-application-like";
import { DBase } from "../d-base";
import { UtilExtractorPixels } from "./util-extractor-pixels";
export interface UtilExtractTextureResolutionOptions {
    size: number;
}
export interface UtilExtractTextureTransformOptions {
    update?: boolean;
}
export interface UtilExtractTextureOptions {
    target: DBase;
    resolution?: number | UtilExtractTextureResolutionOptions;
    transform?: UtilExtractTextureTransformOptions;
    clear?: boolean;
}
export interface UtilExtractPixelsOptions extends UtilExtractTextureOptions {
    renderer?: Renderer;
    application?: DApplicationLike;
    layer?: DApplicationLayerLike;
}
export interface UtilExtractCanvasOptions extends UtilExtractPixelsOptions {
    scale?: number | {
        size: number;
    };
    alpha?: {
        premultiplied?: {
            ignore?: boolean;
        };
    };
}
export interface UtilExtractBase64Options extends UtilExtractCanvasOptions {
    format?: string;
    quality?: number;
}
export interface UtilExtractFileOptions extends UtilExtractBase64Options {
    filename: string;
}
export declare class UtilExtract {
    static texture(options: UtilExtractTextureOptions): RenderTexture;
    static pixels(options: UtilExtractPixelsOptions): UtilExtractorPixels;
    static canvas(options: UtilExtractCanvasOptions): HTMLCanvasElement;
    static base64(options: UtilExtractBase64Options): string;
    static file(options: UtilExtractFileOptions): void;
}
