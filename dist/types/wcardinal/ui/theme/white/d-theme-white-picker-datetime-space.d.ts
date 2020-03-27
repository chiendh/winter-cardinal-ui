import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeSpace } from "../../d-picker-datetime-space";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhitePickerDatetimeSpace extends DThemeWhiteBase implements DThemePickerDatetimeSpace {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
}
