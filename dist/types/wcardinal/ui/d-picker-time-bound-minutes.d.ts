import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound } from "./d-picker-time-bound";
import { DPickerTimeBoundConstant } from "./d-picker-time-bound-constant";
export interface DPickerTimeBoundMinutesParent {
    lower: DPickerTimeBound;
    upper: DPickerTimeBound;
    mask: DPickerDatetimeMask;
    constant: DPickerTimeBoundConstant;
}
export declare class DPickerTimeBoundMinutes {
    protected _parent: DPickerTimeBoundMinutesParent;
    constructor(parent: DPickerTimeBoundMinutesParent);
    min(date: Date): number;
    max(date: Date): number;
}
