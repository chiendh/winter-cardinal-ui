import { DBaseState } from "../../d-base-state";
import { DThemePaginationDotsButton } from "../../d-pagination-dots-button";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
export declare class DThemeWhitePaginationDotsButton extends DThemeWhiteButtonAmbient implements DThemePaginationDotsButton {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    newTextValue(): any;
}
