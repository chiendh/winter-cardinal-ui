import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound } from "./d-picker-time-bound";
import { DPickerTimeBoundConstant } from "./d-picker-time-bound-constant";
export interface DPickerTimeBoundSecondsParent {
    lower: DPickerTimeBound;
    upper: DPickerTimeBound;
    mask: DPickerDatetimeMask;
    constant: DPickerTimeBoundConstant;
}
export declare class DPickerTimeBoundSeconds {
    protected _parent: DPickerTimeBoundSecondsParent;
    constructor(parent: DPickerTimeBoundSecondsParent);
    min(date: Date): number;
    max(date: Date): number;
}
