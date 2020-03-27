import { DBaseState } from "./d-base-state";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellTextOptions<ROW, THEME extends DThemeTableBodyCellText = DThemeTableBodyCellText> extends DImageBaseOptions<unknown, THEME>, DTableBodyCellOptions<ROW> {
}
export interface DThemeTableBodyCellText extends DThemeImageBase {
    getTextValue(state: DBaseState): unknown;
    newTextValue(): unknown;
}
export declare class DTableBodyCellText<ROW, THEME extends DThemeTableBodyCellText = DThemeTableBodyCellText, OPTIONS extends DTableBodyCellTextOptions<ROW, THEME> = DTableBodyCellTextOptions<ROW, THEME>> extends DImageBase<unknown, THEME, OPTIONS> implements DTableBodyCell<ROW> {
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
