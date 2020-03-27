import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeMenuBarItem } from "../../d-menu-bar-item";
import { DThemeDarkButton } from "./d-theme-dark-button";
export declare class DThemeDarkMenuBarItem extends DThemeDarkButton implements DThemeMenuBarItem {
    COLOR: number;
    COLOR_HOVERED: number;
    COLOR_PRESSED: number;
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(): number | null;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getCornerMask(): DCornerMask;
    getTextAlignHorizontal(): DAlignHorizontal;
}
