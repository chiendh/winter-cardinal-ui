import { utils } from "pixi.js";
import { DTableDataComparatorFunction, DTableDataComparatorObject, DTableDataOrder, DTableDataSorter } from "./d-table-data-sorter";
export interface DTableDataSorterImplParent<ROW> {
    readonly rows: ROW[];
    update(): void;
}
export declare class DTableDataSorterImpl<ROW> extends utils.EventEmitter implements DTableDataSorter<ROW> {
    protected _id: number;
    protected _idUpdated: number;
    protected _isApplied: boolean;
    protected _parent: DTableDataSorterImplParent<ROW>;
    protected _comparator: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null;
    protected _sorted: number[] | null;
    protected _order: DTableDataOrder;
    constructor(parent: DTableDataSorterImplParent<ROW>);
    get id(): number;
    get order(): DTableDataOrder;
    set order(order: DTableDataOrder);
    apply(): void;
    unapply(): void;
    isApplied(): boolean;
    protected newSorted(): number[] | null;
    protected toComparator(rows: ROW[], comparator: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW>): (indexA: number, indexB: number) => number;
    get(): DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null;
    set(comparator: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null): void;
    toDirty(): void;
    update(): void;
    get indices(): number[] | null;
    map(unmappedIndex: number): number | null;
    unmap(index: number): number;
}
