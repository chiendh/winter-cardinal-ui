import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeLayoutVertical } from "../../d-layout-vertical";
import { DThemeWhiteLayout } from "./d-theme-white-layout";
export declare class DThemeWhiteLayoutVertical extends DThemeWhiteLayout implements DThemeLayoutVertical {
    getDirection(): DLayoutDirection;
    getHeight(): DCoordinateSize;
}
