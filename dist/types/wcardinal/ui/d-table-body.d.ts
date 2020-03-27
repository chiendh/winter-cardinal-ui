import { interaction, Point, Rectangle } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DTableBodyRow, DTableBodyRowOptions } from "./d-table-body-row";
import { DTableColumn } from "./d-table-column";
import { DTableData } from "./d-table-data";
import { DTableDataList, DTableDataListOptions } from "./d-table-data-list";
import { DTableDataSelection } from "./d-table-data-selection";
export interface DTableBodyOptions<ROW, DATA extends DTableData<ROW> = DTableDataList<ROW>, THEME extends DThemeTableBody = DThemeTableBody> extends DBaseOptions<THEME> {
    columns?: Array<DTableColumn<ROW>>;
    row?: DTableBodyRowOptions<ROW>;
    data?: DTableDataListOptions<ROW> | DATA;
    offset?: number;
    frozen?: number;
}
export interface DThemeTableBody extends DThemeBase {
    getRowHeight(): number;
}
declare type OnRowChange<ROW> = (newValue: unknown, oldValue: unknown, row: ROW, rowIndex: number, columnIndex: number) => void;
export declare class DTableBody<ROW, DATA extends DTableData<ROW> = DTableDataList<ROW>, THEME extends DThemeTableBody = DThemeTableBody, OPTIONS extends DTableBodyOptions<ROW, DATA, THEME> = DTableBodyOptions<ROW, DATA, THEME>> extends DBase<THEME, OPTIONS> {
    protected static WORK_ON_CLICK: Point;
    protected _columns: Array<DTableColumn<ROW>>;
    protected _rowHeight: number;
    protected _rowIndexMappedStart: number;
    protected _rowIndexMappedEnd: number;
    protected _rowOptions: DTableBodyRowOptions<ROW>;
    protected _updateRowsCount: number;
    protected _isUpdateRowsCalled: boolean;
    protected _isUpdateRowsCalledForcibly: boolean;
    protected _workRows: Array<DTableBodyRow<ROW>>;
    protected _onRowChangeBound: OnRowChange<ROW>;
    protected _data: DATA;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void;
    get selection(): DTableDataSelection<ROW>;
    lock(): void;
    unlock(callIfNeeded: boolean): void;
    /**
     * Updates rows. If the `forcibly` is true, some dirty checkings for
     * avoiding unnecessary state changes are skipped.
     *
     * @param forcibly true to update forcibly
     */
    update(forcibly?: boolean): void;
    protected resetRow(row: DTableBodyRow<ROW>): DTableBodyRow<ROW>;
    protected newRow(isEven: boolean): DTableBodyRow<ROW>;
    onParentMove(x: number, y: number): void;
    protected updateFrozenCellPosition(x: number): void;
    getClippingRect(target: DBase, result: Rectangle): void;
    onRowClicked(e: InteractionEvent): void;
    onDblClick(e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager): boolean;
    protected getType(): string;
    get data(): DATA;
}
export {};
