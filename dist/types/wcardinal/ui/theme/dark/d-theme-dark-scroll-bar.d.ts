import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBar } from "../../d-scroll-bar";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkScrollBar extends DThemeDarkBase implements DThemeScrollBar {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getInteractive(): DBaseInteractive;
}
