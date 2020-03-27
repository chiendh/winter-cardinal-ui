import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenu } from "../../d-menu";
import { DShadow } from "../../d-shadow";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";
export declare class DThemeDarkMenu extends DThemeDarkLayoutVertical implements DThemeMenu {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getOffsetX(): number;
    getOffsetY(): number;
    getPaddingTop(): number;
    getPaddingBottom(): number;
    getWidth(): DCoordinateSize;
    getMargin(): number;
    getShadow(): DShadow | null;
    getInteractive(): DBaseInteractive;
}
