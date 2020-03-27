import { DBaseState } from "./d-base-state";
import { DInputText, DInputTextOptions, DThemeInputText } from "./d-input-text";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellInputTextOptions<ROW = unknown, THEME extends DThemeTableBodyCellInputText = DThemeTableBodyCellInputText> extends DInputTextOptions<THEME>, DTableBodyCellOptions<ROW> {
}
export interface DThemeTableBodyCellInputText extends DThemeInputText {
}
export declare class DTableBodyCellInputText<ROW = unknown, THEME extends DThemeTableBodyCellInputText = DThemeTableBodyCellInputText, OPTIONS extends DTableBodyCellInputTextOptions<ROW, THEME> = DTableBodyCellInputTextOptions<ROW, THEME>> extends DInputText<THEME, OPTIONS> implements DTableBodyCell<ROW> {
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
