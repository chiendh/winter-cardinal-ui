import { DTableBodyCellSelectPromise, DTableBodyCellSelectPromiseOptions, DThemeTableBodyCellSelectPromise } from "./d-table-body-cell-select-promise";
export interface DTableBodyCellActionPromiseOptions<ROW = unknown, THEME extends DThemeTableBodyCellActionPromise = DThemeTableBodyCellActionPromise> extends DTableBodyCellSelectPromiseOptions<ROW, unknown, THEME> {
}
export interface DThemeTableBodyCellActionPromise extends DThemeTableBodyCellSelectPromise {
}
export declare class DTableBodyCellActionPromise<ROW = unknown, THEME extends DThemeTableBodyCellActionPromise = DThemeTableBodyCellActionPromise, OPTIONS extends DTableBodyCellActionPromiseOptions<ROW, THEME> = DTableBodyCellActionPromiseOptions<ROW, THEME>> extends DTableBodyCellSelectPromise<ROW, unknown, THEME, OPTIONS> {
    protected getType(): string;
}
