import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeLayoutHorizontal } from "../../d-layout-horizontal";
import { DThemeDarkLayout } from "./d-theme-dark-layout";
export declare class DThemeDarkLayoutHorizontal extends DThemeDarkLayout implements DThemeLayoutHorizontal {
    getDirection(): DLayoutDirection;
    getWidth(): DCoordinateSize;
}
