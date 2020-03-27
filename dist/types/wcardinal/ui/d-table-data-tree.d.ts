import { utils } from "pixi.js";
import { DTableData, DTableDataMapped, DTableDataOptions, DTableDataParent } from "./d-table-data";
import { DTableDataFilter } from "./d-table-data-filter";
import { DTableDataFilterTree } from "./d-table-data-filter-tree";
import { DTableDataSelection } from "./d-table-data-selection";
import { DTableDataSelectionImpl } from "./d-table-data-selection-impl";
import { DTableDataSorter } from "./d-table-data-sorter";
import { DTableDataSorterTree } from "./d-table-data-sorter-tree";
import { DTableDataTreeItem } from "./d-table-data-tree-item";
export interface DTableDataTreeOptions<NODE> extends DTableDataOptions<NODE> {
    nodes?: NODE[];
}
export declare class DTableDataTree<NODE extends DTableDataTreeItem<NODE, NODE>> extends utils.EventEmitter implements DTableData<NODE> {
    protected _parent: DTableDataParent | null;
    protected _nodes?: NODE[];
    protected _rows: NODE[];
    protected _isRowsDirty: boolean;
    protected _supplimentals: number[];
    protected _flags: WeakMap<NODE, number>;
    protected _filter: DTableDataFilterTree<NODE>;
    protected _sorter: DTableDataSorterTree<NODE>;
    protected _selection: DTableDataSelectionImpl<NODE>;
    protected _mapped: DTableDataMapped<NODE>;
    constructor(options?: DTableDataTreeOptions<NODE>);
    bind(parent: DTableDataParent): void;
    get nodes(): NODE[] | undefined;
    set nodes(nodes: NODE[] | undefined);
    get rows(): NODE[];
    get supplimentals(): number[];
    protected updateRows(nodes: NODE[] | undefined): void;
    protected toSupplimental(ilevel: number, hasChildren: boolean, isOpened: boolean): number;
    protected updateRows_(nodes: NODE[], irows: number, ilevel: number, rows: NODE[], supplimentals: number[], flags: WeakMap<NODE, number>): number;
    update(forcibly?: boolean): void;
    size(): number;
    get(index: number): NODE | null;
    open(node: NODE): void;
    close(node: NODE): void;
    isOpened(node: NODE): boolean;
    toggle(node: NODE): void;
    each(iteratee: (node: NODE, index: number) => boolean | void, ifrom?: number, ito?: number): void;
    get selection(): DTableDataSelection<NODE>;
    get filter(): DTableDataFilter<NODE>;
    get sorter(): DTableDataSorter<NODE>;
    get mapped(): DTableDataMapped<NODE>;
}
