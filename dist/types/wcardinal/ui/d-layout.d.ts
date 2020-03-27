import { DisplayObject } from "pixi.js";
import { DBase, DBaseCornerOptions, DBaseOptions, DThemeBase } from "./d-base";
import { DCornerMask } from "./d-corner-mask";
import { DLayoutClearType } from "./d-layout-clear-type";
import { DLayoutDirection } from "./d-layout-direction";
import { DLayoutSpace, DLayoutSpaceOptions } from "./d-layout-space";
export interface DLayoutMargin {
    horizontal: number;
    vertical: number;
}
export interface DLayoutMarginOptions {
    horizontal?: number;
    vertical?: number;
}
export interface DLayoutCornerOptions extends DBaseCornerOptions {
    adjust?: boolean;
}
export interface DLayoutOptions<THEME extends DThemeLayout> extends DBaseOptions<THEME> {
    margin?: number | DLayoutMarginOptions;
    corner?: number | DLayoutCornerOptions;
    row?: number;
    column?: number;
    direction?: (keyof typeof DLayoutDirection) | DLayoutDirection;
    reverse?: boolean;
}
export interface DThemeLayout extends DThemeBase {
    getMargin(): number;
    getDirection(): DLayoutDirection;
    getCornerAdjust(): boolean;
    getMultiplicity(): number;
    getReverse(): boolean;
}
export declare abstract class DLayout<THEME extends DThemeLayout, OPTIONS extends DLayoutOptions<THEME>> extends DBase<THEME, OPTIONS> {
    static CORNER_ADJUST_WORK: Float32Array | null;
    protected _margin: DLayoutMargin;
    protected _cornerAdjust: boolean;
    protected _multiplicity: number;
    protected _direction: DLayoutDirection;
    protected _reverse: boolean;
    constructor(options?: OPTIONS);
    protected init(options?: OPTIONS): void;
    protected getWeightTotal(): number;
    protected getSpaceLeft(baseSize: number, margin: number): number;
    protected onRefit(): void;
    protected hasClearTypeBefore(children: DisplayObject[], index: number): boolean;
    protected hasClearTypeAfter(children: DisplayObject[], index: number): boolean;
    protected hasClearType(children: DisplayObject[], index: number, clearType: DLayoutClearType): boolean;
    protected findColumnIndexPrevious(istart: number, icolumn: number, cornerAdjustWork: Float32Array): number;
    protected findColumnIndexNext(istart: number, icolumn: number, cornerAdjustWork: Float32Array): number;
    protected countRow(istart: number, icolumn: number, cornerAdjustWork: Float32Array): number;
    protected findRowIndexPrevious(istart: number, irow: number, cornerAdjustWork: Float32Array): number;
    protected findRowIndexNext(istart: number, irow: number, cornerAdjustWork: Float32Array): number;
    protected countColumn(istart: number, irow: number, cornerAdjustWork: Float32Array): number;
    protected toCornerMaskColumn(i0: number, i1: number, i2: number, n: number): DCornerMask;
    protected toCornerMaskRow(i0: number, i1: number, i2: number, n: number): DCornerMask;
    addSpace(options?: DLayoutSpaceOptions): DLayoutSpace<import("./d-layout-space").DThemeLayoutSpace, DLayoutSpaceOptions<import("./d-layout-space").DThemeLayoutSpace>>;
    protected getType(): string;
}
