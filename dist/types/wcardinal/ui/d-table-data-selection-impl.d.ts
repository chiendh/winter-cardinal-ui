import { utils } from "pixi.js";
import { DTableData } from "./d-table-data";
import { DTableDataSelection, DTableDataSelectionOptions, DTableDataSelectionType } from "./d-table-data-selection";
export interface DTableDataSelectionImplParent<ROW> extends DTableData<ROW> {
    update(): void;
}
export declare class DTableDataSelectionImpl<ROW> extends utils.EventEmitter implements DTableDataSelection<ROW> {
    protected _parent: DTableDataSelectionImplParent<ROW>;
    protected _type: DTableDataSelectionType;
    protected _indices: Set<number>;
    constructor(parent: DTableDataSelectionImplParent<ROW>, options?: DTableDataSelectionOptions);
    protected toType(options?: DTableDataSelectionOptions): DTableDataSelectionType;
    get type(): DTableDataSelectionType;
    protected onChange(): void;
    toggle(rowIndex: number): void;
    add(rowIndex: number): void;
    get first(): number | null;
    get last(): number | null;
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
     * Returns a copy of an index array of selected rows.
     * The order of indices is an insertion order.
     */
    get indices(): number[];
    /**
     * Returns a copy of an array of selected row value.
     * The order is an insertion order.
     */
    get rows(): ROW[];
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
