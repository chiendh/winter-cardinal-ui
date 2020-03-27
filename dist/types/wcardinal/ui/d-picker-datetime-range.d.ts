import { DBase, DBaseOptions, DThemeBase } from "./d-base";
export interface DPickerDatetimeRangeOptions<THEME extends DThemePickerDatetimeRange> extends DBaseOptions<THEME> {
}
export interface DThemePickerDatetimeRange extends DThemeBase {
}
export declare class DPickerDatetimeRange<THEME extends DThemePickerDatetimeRange = DThemePickerDatetimeRange, OPTIONS extends DPickerDatetimeRangeOptions<THEME> = DPickerDatetimeRangeOptions<THEME>> extends DBase<THEME, OPTIONS> {
}
