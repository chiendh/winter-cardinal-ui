import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeListItemSeparator } from "../../d-list-item-separator";
import { DThemeWhiteImage } from "./d-theme-white-image";
export declare class DThemeWhiteListItemSeparator extends DThemeWhiteImage implements DThemeListItemSeparator {
    getBorderColor(state: DBaseState): number | null;
    getBorderAlpha(state: DBaseState): number;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getPaddingLeft(): number;
    getPaddingRight(): number;
}
