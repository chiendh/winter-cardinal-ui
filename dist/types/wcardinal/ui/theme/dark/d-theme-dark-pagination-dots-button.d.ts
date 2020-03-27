import { DBaseState } from "../../d-base-state";
import { DThemePaginationDotsButton } from "../../d-pagination-dots-button";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
export declare class DThemeDarkPaginationDotsButton extends DThemeDarkButtonAmbient implements DThemePaginationDotsButton {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    newTextValue(): any;
}
