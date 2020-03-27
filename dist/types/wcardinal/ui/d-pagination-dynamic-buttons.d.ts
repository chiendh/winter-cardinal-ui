import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DPaginationDotsButton } from "./d-pagination-dots-button";
export interface DPaginationDynamicButtonsOptions<THEME extends DThemePaginationDynamicButtons> extends DLayoutHorizontalOptions<THEME> {
    start?: number;
    end?: number;
    selected?: number;
    button: {
        width: number;
        dotsLeft?: boolean;
        dotsRight?: boolean;
    };
}
export interface DThemePaginationDynamicButtons extends DThemeLayoutHorizontal {
}
export declare class DPaginationDynamicButtons<THEME extends DThemePaginationDynamicButtons = DThemePaginationDynamicButtons, OPTIONS extends DPaginationDynamicButtonsOptions<THEME> = DPaginationDynamicButtonsOptions<THEME>> extends DLayoutHorizontal<THEME, OPTIONS> {
    protected _dotsBtnLeft: DPaginationDotsButton;
    protected _dotsBtnRight: DPaginationDotsButton;
    protected init(options: OPTIONS): void;
    update(options: DPaginationDynamicButtonsOptions<THEME>): void;
    protected getType(): string;
}
