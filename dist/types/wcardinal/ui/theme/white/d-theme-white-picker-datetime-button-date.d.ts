import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeButtonDate } from "../../d-picker-datetime-button-date";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
export declare class DThemeWhitePickerDatetimeButtonDate extends DThemeWhiteButtonAmbient implements DThemePickerDatetimeButtonDate {
    getTextAlignHorizontal(): DAlignHorizontal;
    getTextStyleClipping(): boolean;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    isToggle(): boolean;
}
