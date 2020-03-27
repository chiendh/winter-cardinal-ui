import { utils } from "pixi.js";
/**
 * A row comparator function.
 */
export declare type DTableDataComparatorFunction<ROW> = (rowA: ROW, rowB: ROW, indexA: number, indexB: number) => number;
/**
 * A row comparator object.
 */
export interface DTableDataComparatorObject<ROW> {
    compare(rowA: ROW, rowB: ROW, indexA: number, indexB: number): number;
}
/**
 * A sort order.
 */
export declare enum DTableDataOrder {
    ASCENDING = 0,
    DESCENDING = 1
}
/**
 * Table data sorter.
 */
export interface DTableDataSorter<ROW> extends utils.EventEmitter {
    readonly id: number;
    /**
     * An indices of sorted rows.
     * Must not change this indices directly.
     */
    readonly indices: number[] | null;
    /**
     * A sort order.
     */
    order: DTableDataOrder;
    /**
     * Applys a sorting.
     */
    apply(): void;
    /**
     * Unapplys a sorting.
     */
    unapply(): void;
    /**
     * Returns true if a sorting is applied.
     */
    isApplied(): boolean;
    /**
     * Returns a current comparator.
     */
    get(): DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null;
    /**
     * Sets to the given comparator.
     *
     * @param comparator A comparator
     */
    set(comparator: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null): void;
    /**
     * Returns a sorted index of the specified unmapped index.
     *
     * @param unmappedIndex an unmapped index
     */
    map(unmappedIndex: number): number | null;
    /**
     * Returns an unmapped index of the specified sorted index.
     *
     * @param index a mapped index
     */
    unmap(index: number): number;
}
