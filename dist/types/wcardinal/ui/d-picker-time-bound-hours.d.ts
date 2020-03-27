import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound } from "./d-picker-time-bound";
import { DPickerTimeBoundConstant } from "./d-picker-time-bound-constant";
export interface DPickerTimeBoundHoursParent {
    lower: DPickerTimeBound;
    upper: DPickerTimeBound;
    mask: DPickerDatetimeMask;
    constant: DPickerTimeBoundConstant;
}
export declare class DPickerTimeBoundHours {
    protected _parent: DPickerTimeBoundHoursParent;
    constructor(parent: DPickerTimeBoundHoursParent);
    min(date: Date): number;
    max(date: Date): number;
}
