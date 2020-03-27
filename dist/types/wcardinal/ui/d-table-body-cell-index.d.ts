import { DBaseState } from "./d-base-state";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
export interface DTableBodyCellIndexOptions<ROW = unknown, THEME extends DThemeTableBodyCellIndex = DThemeTableBodyCellIndex> extends DImageBaseOptions<number, THEME>, DTableBodyCellOptions<ROW> {
}
export interface DThemeTableBodyCellIndex extends DThemeImageBase {
    getTextFormatter(): (value: number, caller: DTableBodyCellIndex) => string;
    getTextValue(state: DBaseState): number;
    newTextValue(): number;
}
export declare class DTableBodyCellIndex<ROW = unknown, THEME extends DThemeTableBodyCellIndex = DThemeTableBodyCellIndex, OPTIONS extends DTableBodyCellIndexOptions<ROW, THEME> = DTableBodyCellIndexOptions<ROW, THEME>> extends DImageBase<number, THEME, OPTIONS> implements DTableBodyCell<ROW> {
    protected _columnIndex: number;
    protected _columnData: DTableColumn<ROW>;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getType(): string;
}
