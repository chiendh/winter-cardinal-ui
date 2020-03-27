import { IPoint } from "pixi.js";
import { DCanvas, DCanvasOptions, DThemeCanvas } from "./d-canvas";
import { DDiagramCanvasTile, DDiagramCanvasTileOptions } from "./d-diagram-canvas-tile";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
import { EShape } from "./shape/e-shape";
export interface DDiagramCanvasBaseOptions<THEME extends DThemeDiagramCanvasBase = DThemeDiagramCanvasBase> extends DCanvasOptions<THEME> {
    tile?: DDiagramCanvasTileOptions;
}
export interface DThemeDiagramCanvasBase extends DThemeCanvas {
}
export declare class DDiagramCanvasBase<THEME extends DThemeDiagramCanvasBase = DThemeDiagramCanvasBase, OPTIONS extends DDiagramCanvasBaseOptions<THEME> = DDiagramCanvasBaseOptions<THEME>> extends DCanvas<THEME, OPTIONS> {
    protected _layer: DDiagramLayerContainer;
    protected _tile: DDiagramCanvasTile;
    constructor(options?: OPTIONS);
    get tile(): DDiagramCanvasTile;
    get layer(): DDiagramLayerContainer;
    initialize(shapes: EShape[]): void;
    destroy(): void;
    hitTest(global: IPoint, handler?: (shape: EShape) => boolean): EShape | null;
    protected getType(): string;
}
