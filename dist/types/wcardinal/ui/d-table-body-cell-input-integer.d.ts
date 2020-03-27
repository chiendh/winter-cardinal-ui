import { DBaseState } from "./d-base-state";
import { DInputInteger, DInputIntegerOptions, DThemeInputInteger } from "./d-input-integer";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellInputIntegerOptions<ROW = unknown, THEME extends DThemeTableBodyCellInputInteger = DThemeTableBodyCellInputInteger> extends DInputIntegerOptions<THEME>, DTableBodyCellOptions<ROW> {
}
export interface DThemeTableBodyCellInputInteger extends DThemeInputInteger {
}
export declare class DTableBodyCellInputInteger<ROW = unknown, THEME extends DThemeTableBodyCellInputInteger = DThemeTableBodyCellInputInteger, OPTIONS extends DTableBodyCellInputIntegerOptions<ROW, THEME> = DTableBodyCellInputIntegerOptions<ROW, THEME>> extends DInputInteger<THEME, OPTIONS> implements DTableBodyCell<ROW> {
    protected _row?: ROW;
    protected _rowIndex: number;
    protected _columnIndex: number;
    protected _columnData: DTableColumn<ROW>;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getType(): string;
}
