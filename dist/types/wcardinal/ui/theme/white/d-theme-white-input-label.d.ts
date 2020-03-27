import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeInputLabel } from "../../d-input-label";
import { DThemeWhiteText } from "./d-theme-white-text";
export declare class DThemeWhiteInputLabel extends DThemeWhiteText implements DThemeInputLabel {
    getTextAlignHorizontal(): DAlignHorizontal;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
}
