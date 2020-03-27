import { DBase, DBaseOptions, DThemeBase } from "./d-base";
export interface DPickerTimeRangeOptions<THEME extends DThemePickerTimeRange> extends DBaseOptions<THEME> {
}
export interface DThemePickerTimeRange extends DThemeBase {
}
export declare class DPickerTimeRange<THEME extends DThemePickerTimeRange = DThemePickerTimeRange, OPTIONS extends DPickerTimeRangeOptions<THEME> = DPickerTimeRangeOptions<THEME>> extends DBase<THEME, OPTIONS> {
}
