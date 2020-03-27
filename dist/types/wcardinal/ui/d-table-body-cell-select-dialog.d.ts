import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellSelectDialogOptions<ROW = unknown, VALUE = unknown, THEME extends DThemeTableBodyCellSelectDialog = DThemeTableBodyCellSelectDialog> extends DButtonOptions<VALUE, THEME>, DTableBodyCellOptions<ROW> {
    /**
     * False to stop synchronization of the selected value and the text.
     */
    sync?: boolean;
}
export interface DThemeTableBodyCellSelectDialog extends DThemeButton {
    isSyncEnabled(): boolean;
}
export declare class DTableBodyCellSelectDialog<ROW = unknown, VALUE = unknown, THEME extends DThemeTableBodyCellSelectDialog = DThemeTableBodyCellSelectDialog, OPTIONS extends DTableBodyCellSelectDialogOptions<ROW, VALUE, THEME> = DTableBodyCellSelectDialogOptions<ROW, VALUE, THEME>> extends DButton<VALUE, THEME, OPTIONS> implements DTableBodyCell<ROW> {
    protected _row?: ROW;
    protected _rowIndex: number;
    protected _columnIndex: number;
    protected _columnData: DTableColumn<ROW>;
    protected _isSyncEnabled: boolean;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected onCellChange(newValue: unknown, oldValue: unknown): void;
    protected toSync(theme: THEME, options: OPTIONS): boolean;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    get value(): VALUE;
    set value(value: VALUE);
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getType(): string;
}
