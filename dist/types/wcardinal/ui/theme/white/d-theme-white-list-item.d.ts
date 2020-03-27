import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeListItem } from "../../d-list-item";
import { DThemeWhiteImage } from "./d-theme-white-image";
export declare class DThemeWhiteListItem extends DThemeWhiteImage implements DThemeListItem {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getCornerMask(): number;
}
