import { interaction, Point } from "pixi.js";
import { DBase, DBaseOnOptions, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DCanvas } from "./d-canvas";
import { DView, DViewOptions } from "./d-view";
import { DViewImpl } from "./d-view-impl";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";
export interface DCanvasContainerOnOptions<CANVAS> extends DBaseOnOptions {
    /**
     * Triggered when a canvas is removed.
     *
     * @param canvas a removed canvas
     * @param self a canvas container
     */
    unset?: (canvas: CANVAS, self: any) => void;
    /**
     * Triggered when a canvas is set.
     *
     * @param canvas a new canvas
     * @param self a canvas container
     */
    set?: (canvas: CANVAS, self: any) => void;
}
export interface DCanvasContainerOptions<CANVAS extends DBase = DCanvas, THEME extends DThemeCanvasContainer = DThemeCanvasContainer> extends DBaseOptions<THEME> {
    mask?: boolean;
    view?: DViewOptions;
    canvas?: CANVAS;
    on?: DCanvasContainerOnOptions<CANVAS>;
}
export interface DThemeCanvasContainer extends DThemeBase {
    isOverflowMaskEnabled(): boolean;
}
export declare class DCanvasContainer<CANVAS extends DBase = DCanvas, THEME extends DThemeCanvasContainer = DThemeCanvasContainer, OPTIONS extends DCanvasContainerOptions<CANVAS, THEME> = DCanvasContainerOptions<CANVAS, THEME>> extends DBase<THEME, OPTIONS> {
    protected _canvas: CANVAS | null;
    protected _overflowMask: DBaseOverflowMask | null;
    protected _view: DViewImpl;
    protected init(options?: OPTIONS): void;
    protected getType(): string;
    onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void;
    get canvas(): CANVAS | null;
    set canvas(canvas: CANVAS | null);
    protected getOrCreateOverflowMask(): DBaseOverflowMask;
    protected updateContentSize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void;
    get view(): DView;
    onWheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point): boolean;
    onDblClick(e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager): boolean;
    protected onDown(e: interaction.InteractionEvent): void;
    destroy(): void;
}
