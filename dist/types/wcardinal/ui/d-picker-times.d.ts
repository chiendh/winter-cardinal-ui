import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
export declare class DPickerTimes {
    static format(date: Date, mask: DPickerDatetimeMask): string;
    static toMask(options?: {
        mask?: DPickerDatetimeMask;
    }): DPickerDatetimeMask;
}
