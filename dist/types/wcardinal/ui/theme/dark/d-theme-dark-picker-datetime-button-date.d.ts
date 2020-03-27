import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeButtonDate } from "../../d-picker-datetime-button-date";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
export declare class DThemeDarkPickerDatetimeButtonDate extends DThemeDarkButtonAmbient implements DThemePickerDatetimeButtonDate {
    getBackgroundColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
    getTextAlignHorizontal(): DAlignHorizontal;
    getTextStyleClipping(): boolean;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    isToggle(): boolean;
}
