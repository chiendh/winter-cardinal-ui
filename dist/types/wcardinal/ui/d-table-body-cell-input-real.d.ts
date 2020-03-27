import { DBaseState } from "./d-base-state";
import { DInputReal, DInputRealOptions, DThemeInputReal } from "./d-input-real";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellInputRealOptions<ROW = unknown, THEME extends DThemeTableBodyCellInputReal = DThemeTableBodyCellInputReal> extends DInputRealOptions<THEME>, DTableBodyCellOptions<ROW> {
}
export interface DThemeTableBodyCellInputReal extends DThemeInputReal {
}
export declare class DTableBodyCellInputReal<ROW = unknown, THEME extends DThemeTableBodyCellInputReal = DThemeTableBodyCellInputReal, OPTIONS extends DTableBodyCellInputRealOptions<ROW, THEME> = DTableBodyCellInputRealOptions<ROW, THEME>> extends DInputReal<THEME, OPTIONS> implements DTableBodyCell<ROW> {
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
