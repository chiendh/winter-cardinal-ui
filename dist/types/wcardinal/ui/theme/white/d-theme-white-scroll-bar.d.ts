import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBar } from "../../d-scroll-bar";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhiteScrollBar extends DThemeWhiteBase implements DThemeScrollBar {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getInteractive(): DBaseInteractive;
}
