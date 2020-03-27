import { DBaseInteractive } from "../../d-base-interactive";
import { DCoordinateSize } from "../../d-coordinate";
import { DInputIntegerOptions } from "../../d-input-integer";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemePickerTime } from "../../d-picker-time";
import { DPickerTimeBoundDate } from "../../d-picker-time-bound";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhitePickerTime extends DThemeWhiteBase implements DThemePickerTime {
    getInteractive(): DBaseInteractive;
    getMargin(): number;
    getHoursOptions(): DInputIntegerOptions;
    getMinutesOptions(): DInputIntegerOptions;
    getSecondsOptions(): DInputIntegerOptions;
    getMask(): DPickerDatetimeMask;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getLowerBound(): DPickerTimeBoundDate;
    isLowerBoundInclusive(): boolean;
    getUpperBound(): DPickerTimeBoundDate;
    isUpperBoundInclusive(): boolean;
}
