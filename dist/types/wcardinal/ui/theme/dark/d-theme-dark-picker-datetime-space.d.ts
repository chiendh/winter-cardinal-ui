import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeSpace } from "../../d-picker-datetime-space";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkPickerDatetimeSpace extends DThemeDarkBase implements DThemePickerDatetimeSpace {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
}
