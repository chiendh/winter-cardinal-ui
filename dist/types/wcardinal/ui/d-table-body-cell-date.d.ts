import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDate, DDialogDateOptions } from "./d-dialog-date";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellDateOptions<ROW = unknown, THEME extends DThemeTableBodyCellDate = DThemeTableBodyCellDate> extends DButtonOptions<Date, THEME>, DTableBodyCellOptions<ROW> {
    dialog?: DDialogDateOptions;
}
export interface DThemeTableBodyCellDate extends DThemeButton {
    getTextFormatter(): (value: Date, caller: DTableBodyCellDate) => string;
    getTextValue(state: DBaseState): Date;
    newTextValue(): Date;
}
export declare class DTableBodyCellDate<ROW = unknown, THEME extends DThemeTableBodyCellDate = DThemeTableBodyCellDate, OPTIONS extends DTableBodyCellDateOptions<ROW, THEME> = DTableBodyCellDateOptions<ROW, THEME>> extends DButton<Date, THEME, OPTIONS> implements DTableBodyCell<ROW> {
    protected _dialog?: DDialogDate;
    protected _dialogOptions?: DDialogDateOptions;
    protected _row?: ROW;
    protected _rowIndex: number;
    protected _columnIndex: number;
    protected _columnData: DTableColumn<ROW>;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    get dialog(): DDialogDate;
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getType(): string;
}
