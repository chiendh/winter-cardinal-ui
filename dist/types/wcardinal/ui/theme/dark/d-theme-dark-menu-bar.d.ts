import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenuBar } from "../../d-menu-bar";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";
export declare class DThemeDarkMenuBar extends DThemeDarkLayoutHorizontal implements DThemeMenuBar {
    getBackgroundColor(): number | null;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getMargin(): number;
    getInteractive(): DBaseInteractive;
}
