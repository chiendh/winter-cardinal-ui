import { DBase } from "./d-base";
import { DTableCategoryCellOptions } from "./d-table-category-cell";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";
export interface DTableCategoryColumn {
    label?: string;
    weight?: number;
    width?: number;
    offset: number;
}
export interface DTableCategoryOptions<THEME extends DThemeTableCategory = DThemeTableCategory> extends DTableRowOptions<unknown, DTableCategoryColumn, THEME> {
    offset?: number;
    cell?: DTableCategoryCellOptions;
}
export interface DThemeTableCategory extends DThemeTableRow {
}
export declare class DTableCategory<THEME extends DThemeTableCategory = DThemeTableCategory, OPTIONS extends DTableCategoryOptions<THEME> = DTableCategoryOptions<THEME>> extends DTableRow<unknown, DTableCategoryColumn, THEME, OPTIONS> {
    protected _offset: number;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    onParentMove(x: number, y: number): void;
    protected getContentPositionX(): number;
    protected newCell(column: DTableCategoryColumn, columnIndex: number, columns: DTableCategoryColumn[], options: OPTIONS): DBase;
    protected toCellOptions(column: DTableCategoryColumn, options: OPTIONS): DTableCategoryCellOptions;
    protected getType(): string;
}
