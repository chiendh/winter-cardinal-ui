import { DBaseState } from "./d-base-state";
import { DSelect, DSelectOptions, DThemeSelect } from "./d-select";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellSelectMenuOptions<ROW = unknown, VALUE = unknown, THEME extends DThemeTableBodyCellSelectMenu = DThemeTableBodyCellSelectMenu> extends DSelectOptions<VALUE, THEME>, DTableBodyCellOptions<ROW> {
}
export interface DThemeTableBodyCellSelectMenu extends DThemeSelect {
}
export declare class DTableBodyCellSelectMenu<ROW = unknown, VALUE = unknown, THEME extends DThemeTableBodyCellSelectMenu = DThemeTableBodyCellSelectMenu, OPTIONS extends DTableBodyCellSelectMenuOptions<ROW, VALUE, THEME> = DTableBodyCellSelectMenuOptions<ROW, VALUE, THEME>> extends DSelect<VALUE, THEME, OPTIONS> implements DTableBodyCell<ROW> {
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
