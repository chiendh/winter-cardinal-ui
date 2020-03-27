import { interaction } from "pixi.js";
import { DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DCoordinateSize } from "./d-coordinate";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { DTableBody, DTableBodyOptions } from "./d-table-body";
import { DTableCategory, DTableCategoryColumn, DTableCategoryOptions } from "./d-table-category";
import { DTableColumn, DTableColumnOptions } from "./d-table-column";
import { DTableData, DTableDataOptions } from "./d-table-data";
import { DTableDataList, DTableDataListOptions } from "./d-table-data-list";
import { DTableHeader, DTableHeaderOptions } from "./d-table-header";
export interface DTableOptions<ROW, DATA extends DTableData<ROW> = DTableDataList<ROW>, THEME extends DThemeTable = DThemeTable, CONTENT_OPTIONS extends DBaseOptions = DContentOptions> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
    columns: Array<DTableColumnOptions<ROW>>;
    category?: DTableCategoryOptions;
    header?: DTableHeaderOptions<ROW>;
    body?: DTableBodyOptions<ROW, DATA>;
    data?: ROW[] | DTableDataListOptions<ROW> | DATA;
}
export interface DThemeTable extends DThemePane {
}
export declare class DTable<ROW, DATA extends DTableData<ROW> = DTableDataList<ROW>, THEME extends DThemeTable = DThemeTable, CONTENT_OPTIONS extends DBaseOptions = DContentOptions, OPTIONS extends DTableOptions<ROW, DATA, THEME, CONTENT_OPTIONS> = DTableOptions<ROW, DATA, THEME, CONTENT_OPTIONS>> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
    protected _categories: DTableCategory[];
    protected _header: DTableHeader<ROW> | null;
    protected _body: DTableBody<ROW, DATA>;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void;
    protected getCategoryCount(columns: Array<DTableColumn<ROW>>): number;
    protected toCategoryLabel(index: number, category: string | string[] | undefined): string | undefined;
    protected isSameCategory(index: number, a: string | string[] | undefined, b: string | string[] | undefined): boolean;
    protected toCategoryColumns(index: number, columns: Array<DTableColumn<ROW>>, frozen: number): DTableCategoryColumn[];
    protected toCategoryOptions(index: number, options: DTableCategoryOptions | undefined, columns: Array<DTableColumn<ROW>>, frozen: number, offset: number): DTableCategoryOptions;
    protected newCategories(options: OPTIONS, columns: Array<DTableColumn<ROW>>, frozen: number): DTableCategory[];
    onDblClick(e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager): boolean;
    protected getScrollBarOffsetVerticalStart(size: number): number;
    protected toContentWidth(options: OPTIONS): DCoordinateSize;
    protected hasHeader(options: OPTIONS): boolean;
    protected newHeader(options: OPTIONS, columns: Array<DTableColumn<ROW>>, frozen: number, offset: number): DTableHeader<ROW> | null;
    protected toHeaderOptions(options: DTableHeaderOptions<ROW> | undefined, columns: Array<DTableColumn<ROW>>, frozen: number, offset: number): DTableHeaderOptions<ROW>;
    protected newBody(options: OPTIONS, columns: Array<DTableColumn<ROW>>, frozen: number, offset: number): DTableBody<ROW, DATA>;
    protected toBodyOptions(options: DTableBodyOptions<ROW, DATA> | undefined, columns: Array<DTableColumn<ROW>>, frozen: number, offset: number, data: ROW[] | DTableDataOptions<ROW> | DATA | undefined): DTableBodyOptions<ROW, DATA>;
    protected getType(): string;
    get categories(): DTableCategory[];
    get header(): DTableHeader<ROW> | null;
    get body(): DTableBody<ROW, DATA>;
    get data(): DATA;
}
