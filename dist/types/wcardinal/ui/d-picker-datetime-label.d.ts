import { DText, DTextOptions, DThemeText } from "./d-text";
export interface DPickerDatetimeLabelOptions<THEME extends DThemePickerDatetimeLabel = DThemePickerDatetimeLabel> extends DTextOptions<Date, THEME> {
}
export interface DThemePickerDatetimeLabel extends DThemeText {
}
export declare class DPickerDatetimeLabel<THEME extends DThemePickerDatetimeLabel = DThemePickerDatetimeLabel, OPTIONS extends DPickerDatetimeLabelOptions<THEME> = DPickerDatetimeLabelOptions<THEME>> extends DText<Date, THEME, OPTIONS> {
    protected getType(): string;
}
