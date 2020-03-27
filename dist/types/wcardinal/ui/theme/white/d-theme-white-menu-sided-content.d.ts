import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenuSidedContent } from "../../d-menu-sided-content";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";
export declare class DThemeWhiteMenuSidedContent extends DThemeWhiteLayoutVertical implements DThemeMenuSidedContent {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getPaddingTop(): number;
    getPaddingBottom(): number;
    getMargin(): number;
}
