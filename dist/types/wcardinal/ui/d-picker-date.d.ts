import { DPickerDatetime, DPickerDatetimeOptions, DThemePickerDatetime } from "./d-picker-datetime";
export interface DPickerDateOptions<THEME extends DThemePickerDate = DThemePickerDate> extends DPickerDatetimeOptions<THEME> {
}
export interface DThemePickerDate extends DThemePickerDatetime {
}
export declare class DPickerDate<THEME extends DThemePickerDate = DThemePickerDate, OPTIONS extends DPickerDateOptions<THEME> = DPickerDateOptions<THEME>> extends DPickerDatetime<THEME, OPTIONS> {
    protected getType(): string;
}
