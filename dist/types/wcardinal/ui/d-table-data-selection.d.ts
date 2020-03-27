import { utils } from "pixi.js";
export declare enum DTableDataSelectionType {
    NONE = 0,
    SINGLE = 1,
    MULTIPLE = 2
}
export interface DTableDataSelectionOptions {
    type?: (keyof typeof DTableDataSelectionType) | DTableDataSelectionType;
}
export interface DTableDataSelection<ROW> extends utils.EventEmitter {
    /**
     * Returns a copy of an index array of selected rows.
     * The order of indices is an insertion order.
     */
    readonly indices: number[];
    /**
     * Returns a copy of an array of selected row value.
     * The order is an insertion order.
     */
    readonly rows: ROW[];
    readonly type: DTableDataSelectionType;
    readonly first: number | null;
    readonly last: number | null;
    toggle(rowIndex: number): void;
    add(rowIndex: number): void;
    addTo(rowIndex: number): void;
    addRange(from: number, includeFrom: boolean, to: number, includeTo: boolean): void;
    addAll(rowIndices: number[]): void;
    contains(rowIndex: number): boolean;
    remove(rowIndex: number): void;
    clear(): void;
    clearAndAdd(rowIndex: number): void;
    clearAndAddAll(rowIndices: number[]): void;
    shift(rowIndex: number, amount: number): void;
    size(): number;
    isEmpty(): boolean;
    /**
     * Returns an array of the (index, row value) pairs of selected rows.
     * The order of pairs is an insertion order.
     */
    toArray(): Array<[number, ROW]>;
    /**
     * Returns an sorted array of the (index, row value) pairs of selected rows.
     */
    toSortedArray(): Array<[number, ROW]>;
    toObject(): {
        [index: number]: ROW;
    };
    toMap(): Map<number, ROW>;
}
