import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellSelectPromiseOptions<ROW = unknown, VALUE = unknown, THEME extends DThemeTableBodyCellSelectPromise = DThemeTableBodyCellSelectPromise> extends DButtonOptions<VALUE, THEME>, DTableBodyCellOptions<ROW> {
    /**
     * False to stop synchronizing the resolved value and the text.
     */
    sync?: boolean;
}
export interface DThemeTableBodyCellSelectPromise extends DThemeButton {
    isSyncEnabled(): boolean;
}
export declare class DTableBodyCellSelectPromise<ROW = unknown, VALUE = unknown, THEME extends DThemeTableBodyCellSelectPromise = DThemeTableBodyCellSelectPromise, OPTIONS extends DTableBodyCellSelectPromiseOptions<ROW, VALUE, THEME> = DTableBodyCellSelectPromiseOptions<ROW, VALUE, THEME>> extends DButton<VALUE, THEME, OPTIONS> implements DTableBodyCell<ROW> {
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
