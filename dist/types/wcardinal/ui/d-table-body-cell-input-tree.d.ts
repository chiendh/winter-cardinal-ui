import { DBaseState } from "./d-base-state";
import { DLayoutHorizontal, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DTableBodyCellInputTextOptions } from "./d-table-body-cell-input-text";
import { DTableBodyCellInputTreeInput } from "./d-table-body-cell-input-tree-input";
import { DTableBodyCellInputTreeMarker } from "./d-table-body-cell-input-tree-marker";
import { DTableColumn } from "./d-table-column";
export interface DThemeTableBodyCellInputTree extends DThemeLayoutHorizontal {
    getLevelPadding(level: number): number;
}
export declare class DTableBodyCellInputTree<ROW = unknown, THEME extends DThemeTableBodyCellInputTree = DThemeTableBodyCellInputTree> extends DLayoutHorizontal<THEME> {
    protected _row?: ROW;
    protected _rowIndex: number;
    protected _columnIndex: number;
    protected _columnData: DTableColumn<ROW>;
    protected _marker: DTableBodyCellInputTreeMarker;
    protected _input: DTableBodyCellInputTreeInput;
    constructor(options: DTableBodyCellInputTextOptions<ROW>);
    protected onMarkerActive(): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    set(value: unknown, row: ROW, supplimental: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean): void;
    unset(): void;
    protected getType(): string;
}
