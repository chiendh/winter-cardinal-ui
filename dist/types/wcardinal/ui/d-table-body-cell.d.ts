import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellColumnOptions<ROW> {
    index: number;
    data: DTableColumn<ROW>;
}
export interface DTableBodyCellOptions<ROW> {
    column: DTableBodyCellColumnOptions<ROW>;
}
export interface DTableBodyCell<ROW> {
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
}
