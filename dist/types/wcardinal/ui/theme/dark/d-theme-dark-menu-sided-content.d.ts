import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenuSidedContent } from "../../d-menu-sided-content";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";
export declare class DThemeDarkMenuSidedContent extends DThemeDarkLayoutVertical implements DThemeMenuSidedContent {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getPaddingTop(): number;
    getPaddingBottom(): number;
    getMargin(): number;
}
