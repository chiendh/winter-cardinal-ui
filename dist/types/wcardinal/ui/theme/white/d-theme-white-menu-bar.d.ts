import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenuBar } from "../../d-menu-bar";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";
export declare class DThemeWhiteMenuBar extends DThemeWhiteLayoutHorizontal implements DThemeMenuBar {
    getBackgroundColor(): number | null;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getMargin(): number;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getInteractive(): DBaseInteractive;
}
