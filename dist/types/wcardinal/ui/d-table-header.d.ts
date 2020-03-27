import { DBase } from "./d-base";
import { DTableColumn } from "./d-table-column";
import { DTableData } from "./d-table-data";
import { DTableHeaderCellOptions } from "./d-table-header-cell";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";
export interface DTableHeaderTable<ROW> {
    readonly data: DTableData<ROW>;
}
export interface DTableHeaderOptions<ROW, THEME extends DThemeTableHeader = DThemeTableHeader> extends DTableRowOptions<ROW, DTableColumn<ROW>, THEME> {
    table?: DTableHeaderTable<ROW>;
    offset?: number;
    cell?: DTableHeaderCellOptions<ROW>;
}
export interface DThemeTableHeader extends DThemeTableRow {
}
export declare class DTableHeader<ROW, THEME extends DThemeTableHeader = DThemeTableHeader, OPTIONS extends DTableHeaderOptions<ROW, THEME> = DTableHeaderOptions<ROW, THEME>> extends DTableRow<ROW, DTableColumn<ROW>, THEME, OPTIONS> {
    protected _table: DTableHeaderTable<ROW> | null;
    protected _offset: number;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    get table(): DTableHeaderTable<ROW> | null;
    onParentMove(x: number, y: number): void;
    protected getContentPositionX(): number;
    protected newCell(column: DTableColumn<ROW>, columnIndex: number, columns: Array<DTableColumn<ROW>>, options: OPTIONS): DBase;
    protected toCellOptions(column: DTableColumn<ROW>, options: OPTIONS): DTableHeaderCellOptions<ROW>;
    protected getType(): string;
}
