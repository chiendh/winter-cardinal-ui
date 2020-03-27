import { utils } from "pixi.js";
import { DTableDataFilter, DTableDataFilterFunction, DTableDataFilterObject } from "./d-table-data-filter";
import { DTableDataTreeItem } from "./d-table-data-tree-item";
interface DTableDataFilterTreeParent<NODE> {
    readonly nodes: NODE[] | undefined;
    isOpened(node: NODE): boolean;
    update(): void;
}
export declare class DTableDataFilterTree<NODE extends DTableDataTreeItem<NODE, NODE>> extends utils.EventEmitter implements DTableDataFilter<NODE> {
    protected _id: number;
    protected _idUpdated: number;
    protected _isApplied: boolean;
    protected _parent: DTableDataFilterTreeParent<NODE>;
    protected _filter: DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE> | null;
    protected _filtered: number[] | null;
    constructor(parent: DTableDataFilterTreeParent<NODE>);
    get id(): number;
    apply(): void;
    unapply(): void;
    isApplied(): boolean;
    protected isFiltered(node: NODE, index: number, filter: DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE>): boolean;
    protected hasFiltered(parent: DTableDataFilterTreeParent<NODE>, nodes: NODE[], filter: DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE>): boolean;
    protected addAllToFiltered(parent: DTableDataFilterTreeParent<NODE>, nodes: NODE[], filtered: number[], cursor: [number]): void;
    protected newFilteredSub(parent: DTableDataFilterTreeParent<NODE>, nodes: NODE[], filter: DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE>, filtered: number[], cursor: [number]): boolean;
    protected newFiltered(): number[] | null;
    get(): DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE> | null;
    set(filter: DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE> | null): void;
    toDirty(): void;
    update(): void;
    get indices(): number[] | null;
    map(sortedIndex: number): number | null;
    unmap(index: number): number;
}
export {};
