import { interaction } from "pixi.js";
import { DBasePaddingAdjustable } from "./d-base-padding-adjustable";
import { DTableBodyCellButton, DTableBodyCellButtonOptions, DThemeTableBodyCellButton } from "./d-table-body-cell-button";
export interface DTableBodyCellTreeOptions<ROW, THEME extends DThemeTableBodyCellTree = DThemeTableBodyCellTree> extends DTableBodyCellButtonOptions<ROW, THEME> {
}
export interface DThemeTableBodyCellTree extends DThemeTableBodyCellButton {
    getLevelPadding(level: number): number;
}
export declare class DTableBodyCellTree<ROW, THEME extends DThemeTableBodyCellTree = DThemeTableBodyCellTree, OPTIONS extends DTableBodyCellTreeOptions<ROW, THEME> = DTableBodyCellTreeOptions<ROW, THEME>> extends DTableBodyCellButton<ROW, THEME, OPTIONS> {
    protected _padding: DBasePaddingAdjustable;
    constructor(options: OPTIONS);
    protected onActive(e: KeyboardEvent | interaction.InteractionEvent): void;
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    protected getType(): string;
}
