import { DBaseState } from "./d-base-state";
import { DDropdown, DDropdownOptions, DThemeDropdown } from "./d-dropdown";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellActionMenuOptions<ROW = unknown, THEME extends DThemeTableBodyCellActionMenu = DThemeTableBodyCellActionMenu> extends DDropdownOptions<unknown, THEME>, DTableBodyCellOptions<ROW> {
}
export interface DThemeTableBodyCellActionMenu extends DThemeDropdown {
}
export declare class DTableBodyCellActionMenu<ROW = unknown, THEME extends DThemeTableBodyCellActionMenu = DThemeTableBodyCellActionMenu, OPTIONS extends DTableBodyCellActionMenuOptions<ROW, THEME> = DTableBodyCellActionMenuOptions<ROW, THEME>> extends DDropdown<unknown, THEME, OPTIONS> implements DTableBodyCell<ROW> {
    protected _row?: ROW;
    protected _rowIndex: number;
    protected _columnIndex: number;
    protected _columnData: DTableColumn<ROW>;
    protected _onSelectedBound: (selected: unknown) => void;
    protected _onClosedBound: () => void;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected onSelected(selected: unknown): void;
    protected onClosed(): void;
    start(): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getType(): string;
}
