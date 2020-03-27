import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeMenuItemExpandableBody } from "../../d-menu-item-expandable-body";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";
export declare class DThemeWhiteMenuItemExpandableBody extends DThemeWhiteLayoutVertical implements DThemeMenuItemExpandableBody {
    getWidth(): DCoordinateSize;
    getCornerMask(): DCornerMask;
}
