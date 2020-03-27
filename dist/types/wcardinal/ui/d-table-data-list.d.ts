import { utils } from "pixi.js";
import { DTableData, DTableDataMapped, DTableDataOptions, DTableDataParent } from "./d-table-data";
import { DTableDataFilter } from "./d-table-data-filter";
import { DTableDataFilterImpl } from "./d-table-data-filter-impl";
import { DTableDataSelection } from "./d-table-data-selection";
import { DTableDataSelectionImpl } from "./d-table-data-selection-impl";
import { DTableDataSorter } from "./d-table-data-sorter";
import { DTableDataSorterImpl } from "./d-table-data-sorter-impl";
export interface DTableDataListOptions<ROW> extends DTableDataOptions<ROW> {
    rows?: ROW[];
}
export declare class DTableDataList<ROW> extends utils.EventEmitter implements DTableData<ROW> {
    protected _parent: DTableDataParent | null;
    protected _rows: ROW[];
    protected _filter: DTableDataFilterImpl<ROW>;
    protected _sorter: DTableDataSorterImpl<ROW>;
    protected _selection: DTableDataSelectionImpl<ROW>;
    protected _mapped: DTableDataMapped<ROW>;
    constructor(options?: DTableDataListOptions<ROW>);
    bind(parent: DTableDataParent): void;
    protected toRows(row?: ROW[]): ROW[];
    get rows(): ROW[];
    update(): void;
    lock(): void;
    unlock(): void;
    size(): number;
    clear(): void;
    clearAndAdd(row: ROW): void;
    clearAndAddAll(newRows: ROW[]): void;
    add(row: ROW, index?: number): void;
    addAll(newRows: ROW[], index?: number): void;
    get(index: number): ROW | null;
    set(index: number, row: ROW): ROW | null;
    remove(index: number): ROW | null;
    each(iteratee: (row: ROW, index: number) => boolean | void, ifrom?: number, ito?: number): void;
    get selection(): DTableDataSelection<ROW>;
    get filter(): DTableDataFilter<ROW>;
    get sorter(): DTableDataSorter<ROW>;
    get mapped(): DTableDataMapped<ROW>;
}
