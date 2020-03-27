import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeListItem } from "../../d-list-item";
import { DThemeDarkImage } from "./d-theme-dark-image";
export declare class DThemeDarkListItem extends DThemeDarkImage implements DThemeListItem {
    getBackgroundColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getCornerMask(): number;
}
