import { interaction, Point } from "pixi.js";
import { DDiagramCanvasBase, DDiagramCanvasBaseOptions, DThemeDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramCanvasIdMap } from "./d-diagram-canvas-id-map";
import { DDiagramCanvasTagMap } from "./d-diagram-canvas-tag-map";
import { EShape } from "./shape/e-shape";
/**
 * A tag mapper.
 *
 * @param tag a tag
 * @returns a mapped tag
 */
export declare type DDiagramCanvasTagMapper = (tag: string) => string | null;
export interface DDiagramCanvasTagOptions {
    /**
     * A tag mapper.
     */
    mapper?: DDiagramCanvasTagMapper;
}
export interface DDiagramCanvasOptions<THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas> extends DDiagramCanvasBaseOptions<THEME> {
    /**
     * A tag options.
     */
    tag?: DDiagramCanvasTagOptions;
}
export interface DThemeDiagramCanvas extends DThemeDiagramCanvasBase {
}
export declare class DDiagramCanvas<THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas, OPTIONS extends DDiagramCanvasOptions<THEME> = DDiagramCanvasOptions<THEME>> extends DDiagramCanvasBase<THEME, OPTIONS> {
    tags: DDiagramCanvasTagMap;
    tagMapper: DDiagramCanvasTagMapper;
    interactives: EShape[];
    actionables: EShape[];
    ids: DDiagramCanvasIdMap;
    protected _workLocal: Point;
    protected _workGlobal: Point;
    protected _lastOverShape: EShape | null;
    constructor(options: OPTIONS);
    initialize(): void;
    protected initializeFocus(): void;
    protected initializeShapes(shapes: EShape[], tags: DDiagramCanvasTagMap, tagMapper: DDiagramCanvasTagMapper, interactives: EShape[], actionables: EShape[], ids: DDiagramCanvasIdMap): void;
    protected updateShapes(shapes: EShape[], time: number): void;
    onShapeMove(e: interaction.InteractionEvent): boolean;
    onShapeDown(e: interaction.InteractionEvent): boolean;
    onShapeUp(e: interaction.InteractionEvent): boolean;
    onShapeClick(e: interaction.InteractionEvent): boolean;
    onShapeDblClick(e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager): boolean;
    protected getType(): string;
}
