import { DBaseState } from "./d-base-state";
import { DButtonColor, DButtonColorOptions, DThemeButtonColor } from "./d-button-color";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellColorOptions<ROW = unknown, THEME extends DThemeTableBodyCellColor = DThemeTableBodyCellColor> extends DButtonColorOptions<THEME>, DTableBodyCellOptions<ROW> {
}
export interface DThemeTableBodyCellColor extends DThemeButtonColor {
}
export declare class DTableBodyCellColor<ROW = unknown, THEME extends DThemeTableBodyCellColor = DThemeTableBodyCellColor, OPTIONS extends DTableBodyCellColorOptions<ROW, THEME> = DTableBodyCellColorOptions<ROW, THEME>> extends DButtonColor<THEME, OPTIONS> implements DTableBodyCell<ROW> {
    protected _row?: ROW;
    protected _rowIndex: number;
    protected _columnIndex: number;
    protected _columnData: DTableColumn<ROW>;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    set(newValue: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getType(): string;
}
