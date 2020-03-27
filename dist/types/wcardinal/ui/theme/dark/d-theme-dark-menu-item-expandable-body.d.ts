import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeMenuItemExpandableBody } from "../../d-menu-item-expandable-body";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";
export declare class DThemeDarkMenuItemExpandableBody extends DThemeDarkLayoutVertical implements DThemeMenuItemExpandableBody {
    getWidth(): DCoordinateSize;
    getCornerMask(): DCornerMask;
}
