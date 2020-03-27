import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
export declare class DPickerDatetimes {
    static format(date: Date, mask: DPickerDatetimeMask): string;
    static toMask(options?: {
        mask?: DPickerDatetimeMask;
    }): DPickerDatetimeMask;
}
