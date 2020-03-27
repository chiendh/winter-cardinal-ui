import { DBaseState } from "./d-base-state";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DTableColumn } from "./d-table-column";
import { DTableDataComparatorFunction, DTableDataComparatorObject, DTableDataSorter } from "./d-table-data-sorter";
import { DTableHeaderTable } from "./d-table-header";
export interface DTableHeaderCellHeader<ROW> {
    readonly table: DTableHeaderTable<ROW> | null;
}
export interface DTableHeaderCellOptions<ROW, THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell> extends DImageOptions<string | null, THEME> {
    header: DTableHeaderCellHeader<ROW>;
    column: DTableColumn<ROW>;
}
export interface DThemeTableHeaderCell extends DThemeImage {
    getTextFormatter(): (value: string | null, caller: DTableHeaderCell<unknown>) => string;
    getTextValue(state: DBaseState): string | null;
    newTextValue(): DStateAwareOrValueMightBe<string | null>;
}
export declare class DTableHeaderCell<ROW, THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell, OPTIONS extends DTableHeaderCellOptions<ROW, THEME> = DTableHeaderCellOptions<ROW, THEME>> extends DImage<string | null, THEME, OPTIONS> {
    protected _sorter?: DTableDataSorter<ROW>;
    protected _onSorterChangeBound?: () => void;
    protected _comparator?: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW>;
    protected _header: DTableHeaderCellHeader<ROW>;
    protected _column: DTableColumn<ROW>;
    constructor(options: OPTIONS);
    get sorter(): DTableDataSorter<ROW> | null;
    get comparator(): DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null;
    onClick(): void;
    protected onSorterChange(): void;
    protected init(options: OPTIONS): void;
    protected getType(): string;
    destroy(): void;
}
