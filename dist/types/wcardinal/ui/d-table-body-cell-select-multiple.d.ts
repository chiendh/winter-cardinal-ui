import { DBaseState } from "./d-base-state";
import { DSelectMultiple, DSelectMultipleOptions, DThemeSelectMultiple } from "./d-select-multiple";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellSelectMultipleOptions<ROW = unknown, VALUE = unknown, THEME extends DThemeTableBodyCellSelectMultiple = DThemeTableBodyCellSelectMultiple> extends DSelectMultipleOptions<VALUE, THEME>, DTableBodyCellOptions<ROW> {
}
export interface DThemeTableBodyCellSelectMultiple extends DThemeSelectMultiple {
}
export declare class DTableBodyCellSelectMultiple<ROW = unknown, VALUE = unknown, THEME extends DThemeTableBodyCellSelectMultiple = DThemeTableBodyCellSelectMultiple, OPTIONS extends DTableBodyCellSelectMultipleOptions<ROW, VALUE, THEME> = DTableBodyCellSelectMultipleOptions<ROW, VALUE, THEME>> extends DSelectMultiple<VALUE, THEME, OPTIONS> implements DTableBodyCell<ROW> {
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
