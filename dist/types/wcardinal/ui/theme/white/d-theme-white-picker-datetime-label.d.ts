import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DFontWeight } from "../../d-font";
import { DThemePickerDatetimeLabel } from "../../d-picker-datetime-label";
import { DThemeWhiteText } from "./d-theme-white-text";
export declare class DThemeWhitePickerDatetimeLabel extends DThemeWhiteText implements DThemePickerDatetimeLabel {
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
