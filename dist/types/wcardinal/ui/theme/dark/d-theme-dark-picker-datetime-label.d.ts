import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DFontWeight } from "../../d-font";
import { DThemePickerDatetimeLabel } from "../../d-picker-datetime-label";
import { DThemeDarkText } from "./d-theme-dark-text";
export declare class DThemeDarkPickerDatetimeLabel extends DThemeDarkText implements DThemePickerDatetimeLabel {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getTextStyleClipping(): boolean;
    getTextAlignHorizontal(): DAlignHorizontal;
    getColor(): number;
    getFontWeight(): DFontWeight;
    getFontSize(): number;
    newTextValue(): any;
    getTextValue(state: DBaseState): any;
}
