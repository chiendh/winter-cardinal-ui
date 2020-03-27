import { DTableData, DTableDataMapped, DTableDataMappedEachIteratee } from "./d-table-data";
export interface DTableDataListMappedParent<ROW> extends DTableData<ROW> {
    readonly rows: ROW[];
    readonly supplimentals?: unknown[];
}
export declare class DTableDataListMapped<ROW> implements DTableDataMapped<ROW> {
    protected _parent: DTableDataListMappedParent<ROW>;
    constructor(parent: DTableDataListMappedParent<ROW>);
    map(unmappedIndex: number): number | null;
    unmap(index: number): number;
    size(): number;
    get(index: number): ROW | null;
    each(iteratee: DTableDataMappedEachIteratee<ROW>, ifrom?: number, ito?: number): void;
}
