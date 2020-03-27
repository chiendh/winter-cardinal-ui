import { Point } from "pixi.js";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DContentOptions } from "./d-content";
import { DDragMode } from "./d-drag-mode";
import { DScrollBar, DScrollBarOptions } from "./d-scroll-bar";
import { DScrollBarHorizontal } from "./d-scroll-bar-horizontal";
import { DScrollBarVertical } from "./d-scroll-bar-vertical";
import { UtilDrag } from "./util/util-drag";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";
export interface DPaneDragOptions {
    mode?: (keyof typeof DDragMode) | DDragMode;
}
export interface DPaneBarOptions {
    vertical?: DScrollBarOptions;
    horizontal?: DScrollBarOptions;
}
export interface DPaneOptions<THEME extends DThemePane = DThemePane, CONTENT_OPTIONS extends DBaseOptions = DContentOptions> extends DBaseOptions<THEME> {
    mask?: boolean;
    content?: CONTENT_OPTIONS | DBase;
    bar?: DPaneBarOptions;
    drag?: DPaneDragOptions;
}
export interface DThemePane extends DThemeBase {
    isOverflowMaskEnabled(): boolean;
    getWheelSpeed(): number;
    getDragMode(): DDragMode;
}
export declare class DPane<THEME extends DThemePane = DThemePane, CONTENT_OPTIONS extends DBaseOptions = DContentOptions, OPTIONS extends DPaneOptions<THEME, CONTENT_OPTIONS> = DPaneOptions<THEME, CONTENT_OPTIONS>> extends DBase<THEME, OPTIONS> {
    protected static WORK_ON_FOCUSED: Point;
    protected _content: DBase;
    protected _overflowMask: DBaseOverflowMask | null;
    protected _verticalBar?: DScrollBarVertical;
    protected _horizontalBar?: DScrollBarHorizontal;
    protected _dragUtil?: UtilDrag;
    protected init(options?: OPTIONS): void;
    protected initDrag(content: DBase, theme: THEME, options?: OPTIONS): void;
    protected onRegionMoveX(content: DBase, start: number): void;
    protected onRegionMoveY(content: DBase, start: number): void;
    protected initScrollBar(content: DBase, theme: THEME, options?: OPTIONS): void;
    protected getType(): string;
    get content(): DBase;
    protected toContent(options?: OPTIONS): DBase;
    protected newContent(options?: CONTENT_OPTIONS): DBase;
    protected getOrCreateOverflowMask(): DBaseOverflowMask;
    onWheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point): boolean;
    protected getWheelContentX(content: DBase, delta: number): number;
    protected getWheelContentY(content: DBase, delta: number): number;
    protected toContentX(content: DBase, x: number): number;
    protected toContentY(content: DBase, y: number): number;
    protected isRefitable(target: any): target is DBase<any, any>;
    onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void;
    protected onContentChanged(): void;
    protected updateScrollBar(): void;
    protected getScrollBarOffsetHorizontalStart(size: number): number;
    protected getScrollBarOffsetHorizontalEnd(size: number): number;
    protected getScrollBarOffsetVerticalStart(size: number): number;
    protected getScrollBarOffsetVerticalEnd(size: number): number;
    protected updateScrollBarPositions(verticalBar: DScrollBarVertical, horizontalBar: DScrollBarHorizontal): void;
    protected updateScrollBarRegions(verticalBar: DScrollBarVertical, horizontalBar: DScrollBarHorizontal): void;
    protected updateScrollBarVisibilities(verticalBar: DScrollBarVertical, horizontalBar: DScrollBarHorizontal): void;
    protected updateScrollBarVisibility(bar: DScrollBar): boolean;
    protected onChildFocused(focused: DBase): void;
    destroy(): void;
}
