import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenu } from "../../d-menu";
import { DShadow } from "../../d-shadow";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";
export declare class DThemeWhiteMenu extends DThemeWhiteLayoutVertical implements DThemeMenu {
    getBackgroundColor(state: DBaseState): number | null;
    getOffsetX(): number;
    getOffsetY(): number;
    getPaddingTop(): number;
    getPaddingBottom(): number;
    getWidth(): DCoordinateSize;
    getMargin(): number;
    getShadow(): DShadow | null;
    getInteractive(): DBaseInteractive;
}
