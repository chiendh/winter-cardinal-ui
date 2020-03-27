import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DFontWeight } from "../../d-font";
import { DThemePickerDatetimeLabelDate } from "../../d-picker-datetime-label-date";
import { DThemeWhiteText } from "./d-theme-white-text";
export declare class DThemeWhitePickerDatetimeLabelDate extends DThemeWhiteText implements DThemePickerDatetimeLabelDate {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getTextStyleClipping(): boolean;
    getTextAlignHorizontal(): DAlignHorizontal;
    getColor(): number;
    getFontWeight(): DFontWeight;
}
