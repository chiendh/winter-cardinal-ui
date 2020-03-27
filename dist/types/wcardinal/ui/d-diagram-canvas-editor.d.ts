import { Graphics } from "pixi.js";
import { DBaseBackgroundOptions } from "./d-base";
import { DDiagramCanvasBase, DDiagramCanvasBaseOptions, DThemeDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { ESnapper } from "./snapper/e-snapper";
export interface DDiagramCanvasEditorBackgroundOptions extends DBaseBackgroundOptions {
    base?: number | null;
}
export interface DDiagramCanvasEditorOptions<THEME extends DThemeDiagramCanvasEditor = DThemeDiagramCanvasEditor> extends DDiagramCanvasBaseOptions<THEME> {
    snapper: ESnapper;
    background?: DDiagramCanvasEditorBackgroundOptions;
}
export interface DThemeDiagramCanvasEditor extends DThemeDiagramCanvasBase {
    getBackgroundBase(): number | null;
}
export declare class DDiagramCanvasEditor<THEME extends DThemeDiagramCanvasEditor = DThemeDiagramCanvasEditor, OPTIONS extends DDiagramCanvasEditorOptions<THEME> = DDiagramCanvasEditorOptions<THEME>> extends DDiagramCanvasBase<THEME, OPTIONS> {
    protected _snapper: ESnapper;
    protected _snapperGraphics: Graphics;
    constructor(options: OPTIONS);
    protected toBackgroundColorBase(theme: THEME, options: OPTIONS): number | null;
    serialize(id: number | undefined): DDiagramSerialized;
    onReflow(): void;
    protected getType(): string;
}
