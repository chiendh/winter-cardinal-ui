import { DButton } from "./d-button";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DPaginationDynamicButtons } from "./d-pagination-dynamic-buttons";
import { DPaginationNavigationButton } from "./d-pagination-navigation-button";
export interface DPaginationOptions<THEME extends DThemePagination> extends DLayoutHorizontalOptions<THEME> {
    total: number;
    selected?: number;
    button?: {
        first?: boolean;
        last?: boolean;
        width?: number;
    };
}
export interface DThemePagination extends DThemeLayoutHorizontal {
    getButtonWidth(): number;
}
interface DPaginationButtonOption {
    first: boolean;
    last: boolean;
    width?: number;
}
export declare class DPagination<THEME extends DThemePagination = DThemePagination, OPTIONS extends DPaginationOptions<THEME> = DPaginationOptions<THEME>> extends DLayoutHorizontal<THEME, OPTIONS> {
    protected _total: number;
    protected _selected: number;
    protected _buttonOptions: DPaginationButtonOption;
    protected _numberPageButtonVisible: number;
    protected DEFAULT_SELECTED: number;
    protected _firstPageBtn: DButton;
    protected _lastPageBtn: DButton;
    protected _dynamicPageBtns: DPaginationDynamicButtons;
    protected _previousBtn: DPaginationNavigationButton;
    protected _nextBtn: DPaginationNavigationButton;
    protected _goFirstBtn: DPaginationNavigationButton;
    protected _goLastBtn: DPaginationNavigationButton;
    protected init(options: OPTIONS): void;
    /**
     * Set selected page.
     *
     * @param selected page's index want to select.
     */
    set selected(selected: number);
    /**
     * Get selected page.
     *
     * @returns index of selected page.
     */
    get selected(): number;
    /**
     * Set total page.
     *
     * @param total number of page want to present in pagination.
     */
    set total(total: number);
    /**
     * Get total pages.
     *
     * @returns number of total pages.
     */
    get total(): number;
    protected initButtons(width: number): void;
    protected listenButtonClicked(): void;
    protected update(): void;
    protected updateStaticButtons(): void;
    protected getButtonWidth(): number;
    protected toNumberVisible(): number;
    protected onClickPageButton(btn: DButton): void;
    protected getType(): string;
}
export {};
