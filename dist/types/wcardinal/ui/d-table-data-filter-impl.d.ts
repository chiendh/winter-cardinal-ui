import { utils } from "pixi.js";
import { DTableDataFilter, DTableDataFilterFunction, DTableDataFilterObject } from "./d-table-data-filter";
import { DTableDataSorter } from "./d-table-data-sorter";
interface DTableDataFilterImplParent<ROW> {
    readonly sorter: DTableDataSorter<ROW>;
    readonly rows: ROW[];
    update(): void;
}
export declare class DTableDataFilterImpl<ROW> extends utils.EventEmitter implements DTableDataFilter<ROW> {
    protected _id: number;
    protected _idUpdated: number;
    protected _isApplied: boolean;
    protected _sorterId: number;
    protected _parent: DTableDataFilterImplParent<ROW>;
    protected _filter: DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null;
    protected _filtered: number[] | null;
    constructor(parent: DTableDataFilterImplParent<ROW>);
    get id(): number;
    apply(): void;
    unapply(): void;
    isApplied(): boolean;
    protected newFiltered(): number[] | null;
    get(): DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null;
    set(filter: DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null): void;
    toDirty(): void;
    update(): void;
    get indices(): number[] | null;
    map(sortedIndex: number): number | null;
    unmap(index: number): number;
}
export {};
