import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeLayoutHorizontal } from "../../d-layout-horizontal";
import { DThemeWhiteLayout } from "./d-theme-white-layout";
export declare class DThemeWhiteLayoutHorizontal extends DThemeWhiteLayout implements DThemeLayoutHorizontal {
    getDirection(): DLayoutDirection;
    getWidth(): DCoordinateSize;
}
