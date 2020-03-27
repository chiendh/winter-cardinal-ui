import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDatetime, DDialogDatetimeOptions } from "./d-dialog-datetime";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellDatetimeOptions<ROW = unknown, THEME extends DThemeTableBodyCellDatetime = DThemeTableBodyCellDatetime> extends DButtonOptions<Date, THEME>, DTableBodyCellOptions<ROW> {
    dialog?: DDialogDatetimeOptions;
}
export interface DThemeTableBodyCellDatetime extends DThemeButton {
    getTextFormatter(): (value: Date, caller: DTableBodyCellDatetime) => string;
    getTextValue(state: DBaseState): Date;
    newTextValue(): Date;
}
export declare class DTableBodyCellDatetime<ROW = unknown, THEME extends DThemeTableBodyCellDatetime = DThemeTableBodyCellDatetime, OPTIONS extends DTableBodyCellDatetimeOptions<ROW, THEME> = DTableBodyCellDatetimeOptions<ROW, THEME>> extends DButton<Date, THEME, OPTIONS> implements DTableBodyCell<ROW> {
    protected static DIALOG?: DDialogDatetime;
    protected _dialog?: DDialogDatetime;
    protected _dialogOptions?: DDialogDatetimeOptions;
    protected _datetimeMask: DPickerDatetimeMask;
    protected _row?: ROW;
    protected _rowIndex: number;
    protected _columnIndex: number;
    protected _columnData: DTableColumn<ROW>;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    getDatetimeMask(): DPickerDatetimeMask;
    get dialog(): DDialogDatetime;
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getType(): string;
}
