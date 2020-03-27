import { DBase } from "./d-base";
import { DTableBodyCellOptionsMerged, DTableBodyCellOptionsUnion, DTableColumn } from "./d-table-column";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";
export interface DTableBodyRowOptions<ROW, THEME extends DThemeTableBodyRow = DThemeTableBodyRow> extends DTableRowOptions<ROW, DTableColumn<ROW>, THEME> {
    height?: number;
    cell?: Partial<DTableBodyCellOptionsMerged<ROW>>;
}
export interface DThemeTableBodyRow extends DThemeTableRow {
}
declare type OnCellChange<ROW> = (newValue: unknown, oldValue: unknown, row: ROW, rowIndex: number, columnIndex: number) => void;
export declare class DTableBodyRow<ROW, THEME extends DThemeTableBodyRow = DThemeTableBodyRow, OPTIONS extends DTableBodyRowOptions<ROW, THEME> = DTableBodyRowOptions<ROW, THEME>> extends DTableRow<ROW, DTableColumn<ROW>, THEME, OPTIONS> {
    protected _row: ROW | undefined;
    protected _onCellChangeBound: OnCellChange<ROW>;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected newCell(column: DTableColumn<ROW>, columnIndex: number, columns: Array<DTableColumn<ROW>>, options: OPTIONS): DBase;
    protected newCellEditable(column: DTableColumn<ROW>, columnIndex: number, options: any): DBase;
    protected newCellUnediable(column: DTableColumn<ROW>, columnIndex: number, options: any): DBase;
    protected newCellSelect(column: DTableColumn<ROW>, options: any): DBase;
    protected newCellAction(column: DTableColumn<ROW>, options: any): DBase;
    protected toCellOptions(column: DTableColumn<ROW>, columnIndex: number, options: OPTIONS): DTableBodyCellOptionsUnion<ROW>;
    protected getType(): string;
    set(row: ROW, supplimental: unknown, rowIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getContentPositionX(): number;
}
export {};
