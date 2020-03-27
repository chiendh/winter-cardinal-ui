import { interaction, Renderer } from "pixi.js";
import { DDiagramBase, DDiagramBaseOptions, DThemeDiagramBase } from "./d-diagram-base";
import { DDiagramCanvas, DDiagramCanvasOptions, DDiagramCanvasTagOptions } from "./d-diagram-canvas";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { DDiagramShape } from "./d-diagram-shape";
import { DDiagramTag } from "./d-diagram-tag";
import { EShape } from "./shape/e-shape";
export interface DDiagramOptions<THEME extends DThemeDiagram = DThemeDiagram> extends DDiagramBaseOptions<DDiagramCanvas, THEME> {
    tag?: DDiagramCanvasTagOptions;
}
export interface DThemeDiagram extends DThemeDiagramBase {
}
export declare class DDiagram<THEME extends DThemeDiagram = DThemeDiagram, OPTIONS extends DDiagramOptions<THEME> = DDiagramOptions<THEME>> extends DDiagramBase<DDiagramCanvas, THEME, OPTIONS> {
    tag: DDiagramTag;
    shape: DDiagramShape;
    opener?: (target: string) => void;
    constructor(options: OPTIONS);
    protected initialize(shapes: EShape[]): void;
    protected newCanvas(serialized: DDiagramSerialized): DDiagramCanvas;
    protected toCanvasOptions(serialized: DDiagramSerialized): DDiagramCanvasOptions;
    protected onDown(e: interaction.InteractionEvent): void;
    onDblClick(e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager): boolean;
    render(renderer: Renderer): void;
    protected getType(): string;
}
