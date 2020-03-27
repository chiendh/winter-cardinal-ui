import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound, DPickerTimeBoundOptions } from "./d-picker-time-bound";
import { DPickerTimeBoundConstant } from "./d-picker-time-bound-constant";
import { DPickerTimeBoundHours } from "./d-picker-time-bound-hours";
import { DPickerTimeBoundMinutes } from "./d-picker-time-bound-minutes";
import { DPickerTimeBoundSeconds } from "./d-picker-time-bound-seconds";
export interface DPickerTimeBoundsOptions {
    lower?: DPickerTimeBoundOptions;
    upper?: DPickerTimeBoundOptions;
}
export declare class DPickerTimeBounds {
    lower: DPickerTimeBound;
    upper: DPickerTimeBound;
    mask: DPickerDatetimeMask;
    hours: DPickerTimeBoundHours;
    minutes: DPickerTimeBoundMinutes;
    seconds: DPickerTimeBoundSeconds;
    constant: DPickerTimeBoundConstant;
    constructor(options: DPickerTimeBoundsOptions | undefined, onChange: () => void);
    newConstant(): DPickerTimeBoundConstant;
    adjust(date: Date): boolean;
    compare(a: Date, b: Date): number;
    test(date: Date): number;
    contains(date: Date): boolean;
}
