import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogTime, DDialogTimeOptions } from "./d-dialog-time";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellTimeOptions<ROW = unknown, THEME extends DThemeTableBodyCellTime = DThemeTableBodyCellTime> extends DButtonOptions<Date, THEME>, DTableBodyCellOptions<ROW> {
    dialog?: DDialogTimeOptions;
}
export interface DThemeTableBodyCellTime extends DThemeButton {
    getTextFormatter(): (value: Date, caller: DTableBodyCellTime) => string;
    getTextValue(state: DBaseState): Date;
    newTextValue(): Date;
}
export declare class DTableBodyCellTime<ROW = unknown, THEME extends DThemeTableBodyCellTime = DThemeTableBodyCellTime, OPTIONS extends DTableBodyCellTimeOptions<ROW, THEME> = DTableBodyCellTimeOptions<ROW, THEME>> extends DButton<Date, THEME, OPTIONS> implements DTableBodyCell<ROW> {
    protected static DIALOG?: DDialogTime;
    protected _dialog?: DDialogTime;
    protected _dialogOptions?: DDialogTimeOptions;
    protected _datetimeMask: DPickerDatetimeMask;
    protected _row?: ROW;
    protected _rowIndex: number;
    protected _columnIndex: number;
    protected _columnData: DTableColumn<ROW>;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    getDatetimeMask(): DPickerDatetimeMask;
    get dialog(): DDialogTime;
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getType(): string;
}
