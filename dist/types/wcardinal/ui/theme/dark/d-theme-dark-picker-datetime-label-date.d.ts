import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DFontWeight } from "../../d-font";
import { DThemePickerDatetimeLabelDate } from "../../d-picker-datetime-label-date";
import { DThemeDarkText } from "./d-theme-dark-text";
export declare class DThemeDarkPickerDatetimeLabelDate extends DThemeDarkText implements DThemePickerDatetimeLabelDate {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getTextStyleClipping(): boolean;
    getTextAlignHorizontal(): DAlignHorizontal;
    getColor(): number;
    getFontWeight(): DFontWeight;
}
