import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeMenuItemExpandable } from "../../d-menu-item-expandable";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";
export declare class DThemeWhiteMenuItemExpandable extends DThemeWhiteLayoutVertical implements DThemeMenuItemExpandable {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getMargin(): number;
    getWidth(): DCoordinateSize;
    getCornerMask(): DCornerMask;
}
