import { DCanvasContainer, DCanvasContainerOnOptions, DCanvasContainerOptions, DThemeCanvasContainer } from "./d-canvas-container";
import { DDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramCanvasTilePyramidFactory } from "./d-diagram-canvas-tile";
import { DDiagramLayer } from "./d-diagram-layer";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { EShape } from "./shape/e-shape";
export interface DDiagramBaseOnOptions<CANVAS> extends DCanvasContainerOnOptions<CANVAS> {
    /**
     * Triggered when all the shape initializations are finished.
     *
     * @param self a diagram
     */
    ready?: (self: any) => void;
}
export interface DDiagramBaseOptions<CANVAS extends DDiagramCanvasBase = DDiagramCanvasBase, THEME extends DThemeDiagramBase = DThemeDiagramBase> extends DCanvasContainerOptions<CANVAS, THEME> {
    /**
     * A tile pyramid factory.
     */
    tile?: DDiagramCanvasTilePyramidFactory;
    on?: DDiagramBaseOnOptions<CANVAS>;
}
export interface DThemeDiagramBase extends DThemeCanvasContainer {
}
export declare abstract class DDiagramBase<CANVAS extends DDiagramCanvasBase = DDiagramCanvasBase, THEME extends DThemeDiagramBase = DThemeDiagramBase, OPTIONS extends DDiagramBaseOptions<CANVAS, THEME> = DDiagramBaseOptions<CANVAS, THEME>> extends DCanvasContainer<CANVAS, THEME, OPTIONS> {
    protected _serialized: DDiagramSerialized | null;
    protected _tileFactory?: DDiagramCanvasTilePyramidFactory;
    constructor(options?: OPTIONS);
    set(serialized: DDiagramSerialized | null): void;
    protected onSet(serialized: DDiagramSerialized): void;
    protected initialize(shapes: EShape[]): void;
    protected abstract newCanvas(serialized: DDiagramSerialized): CANVAS;
    protected onUnset(): void;
    get(): DDiagramSerialized | null;
    get layer(): DDiagramLayer | null;
    protected getType(): string;
}
