import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeListItemSeparator } from "../../d-list-item-separator";
import { DThemeDarkImage } from "./d-theme-dark-image";
export declare class DThemeDarkListItemSeparator extends DThemeDarkImage implements DThemeListItemSeparator {
    COLOR: number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlpha(state: DBaseState): number;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getPaddingLeft(): number;
    getPaddingRight(): number;
}
