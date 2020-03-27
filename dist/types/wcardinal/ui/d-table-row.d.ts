import { Rectangle, Renderer } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
export interface DTableRowOptions<ROW, COLUMN, THEME extends DThemeTableRow = DThemeTableRow> extends DLayoutHorizontalOptions<THEME> {
    columns?: COLUMN[];
    frozen?: number;
    even?: boolean;
}
export interface DThemeTableRow extends DThemeLayoutHorizontal {
}
export interface DTableRowColumn {
    weight?: number;
    frozen?: boolean;
    offset: number;
}
export declare abstract class DTableRow<ROW, COLUMN extends DTableRowColumn, THEME extends DThemeTableRow = DThemeTableRow, OPTIONS extends DTableRowOptions<ROW, COLUMN, THEME> = DTableRowOptions<ROW, COLUMN, THEME>> extends DLayoutHorizontal<THEME, OPTIONS> {
    protected _columns: COLUMN[];
    protected _frozen: number;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected toCellState(even: boolean, index: number, iend: number, frozen: number): DBaseState;
    protected toIndexEnd(columns: COLUMN[]): number;
    protected onRefit(): void;
    updateFrozenCellPosition(x: number): void;
    protected resetFrozenCellPosition(): void;
    protected abstract getContentPositionX(): number;
    getClippingRect(target: DBase, result: Rectangle): void;
    render(renderer: Renderer): void;
    protected abstract newCell(column: COLUMN, columnIndex: number, columns: COLUMN[], options: OPTIONS): DBase;
    protected getType(): string;
}
