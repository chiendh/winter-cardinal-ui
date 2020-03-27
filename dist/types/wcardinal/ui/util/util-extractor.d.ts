import { Renderer, RenderTexture } from "pixi.js";
import { DBase } from "../d-base";
import { UtilExtractorPixels } from "./util-extractor-pixels";
export declare class UtilExtractor {
    static toTexture(target: DBase, resolution?: number, clear?: boolean, skipUpdateTransform?: boolean): RenderTexture;
    static toPixels(renderTexture: RenderTexture, renderer: Renderer): UtilExtractorPixels;
    static toCanvas(pixels: UtilExtractorPixels, scale?: number, ignorePremutipliedAlpha?: boolean): HTMLCanvasElement;
    static toBase64(canvas: HTMLCanvasElement, format?: string, quality?: number): string;
}
