import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeInputLabel } from "../../d-input-label";
import { DThemeDarkText } from "./d-theme-dark-text";
export declare class DThemeDarkInputLabel extends DThemeDarkText implements DThemeInputLabel {
    getTextAlignHorizontal(): DAlignHorizontal;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
}
