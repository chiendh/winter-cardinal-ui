import { DBaseState } from "./d-base-state";
import { DButtonCheck, DButtonCheckOptions, DThemeButtonCheck } from "./d-button-check";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellCheckOptions<ROW = unknown, THEME extends DThemeTableBodyCellCheck = DThemeTableBodyCellCheck> extends DButtonCheckOptions<unknown, THEME>, DTableBodyCellOptions<ROW> {
}
export interface DThemeTableBodyCellCheck extends DThemeButtonCheck {
}
export declare class DTableBodyCellCheck<ROW = unknown, THEME extends DThemeTableBodyCellCheck = DThemeTableBodyCellCheck, OPTIONS extends DTableBodyCellCheckOptions<ROW, THEME> = DTableBodyCellCheckOptions<ROW, THEME>> extends DButtonCheck<unknown, THEME, OPTIONS> implements DTableBodyCell<ROW> {
    protected _row?: ROW;
    protected _rowIndex: number;
    protected _columnIndex: number;
    protected _columnData: DTableColumn<ROW>;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected onChangeSingle(rowIndex: number, columnIndex: number, columnData: DTableColumn<ROW>): void;
    protected onChange(newValue: boolean): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getType(): string;
}
