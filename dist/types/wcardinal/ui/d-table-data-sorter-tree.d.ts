import { utils } from "pixi.js";
import { DTableDataComparatorFunction, DTableDataComparatorObject, DTableDataOrder, DTableDataSorter } from "./d-table-data-sorter";
export declare class DTableDataSorterTree<NODE> extends utils.EventEmitter implements DTableDataSorter<NODE> {
    constructor();
    get id(): number;
    get order(): DTableDataOrder;
    set order(order: DTableDataOrder);
    apply(): void;
    unapply(): void;
    isApplied(): boolean;
    get(): DTableDataComparatorFunction<NODE> | DTableDataComparatorObject<NODE> | null;
    set(comparator: DTableDataComparatorFunction<NODE> | DTableDataComparatorObject<NODE> | null): void;
    toDirty(): void;
    update(): void;
    get indices(): number[] | null;
    map(unmappedIndex: number): number | null;
    unmap(index: number): number;
}
