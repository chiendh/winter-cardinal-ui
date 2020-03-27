import { DBase } from "./d-base";
import { DTableColumn } from "./d-table-column";
export declare class DTableBodyCells {
    static setReadOnly<ROW>(target: DBase, row: ROW, columnIndex: number, columnData: DTableColumn<ROW>): void;
    static setRenderable<ROW>(target: DBase, row: ROW, columnIndex: number, columnData: DTableColumn<ROW>): void;
    static toReadOnly<ROW>(row: ROW, columnIndex: number, columnData: DTableColumn<ROW>): boolean;
    static toRenderable<ROW>(row: ROW, columnIndex: number, columnData: DTableColumn<ROW>): boolean;
}
