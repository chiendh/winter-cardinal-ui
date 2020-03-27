import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeLayoutVertical } from "../../d-layout-vertical";
import { DThemeDarkLayout } from "./d-theme-dark-layout";
export declare class DThemeDarkLayoutVertical extends DThemeDarkLayout implements DThemeLayoutVertical {
    getDirection(): DLayoutDirection;
    getHeight(): DCoordinateSize;
}
