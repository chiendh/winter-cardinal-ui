import { DText, DTextOptions, DThemeText } from "./d-text";
export interface DPickerDatetimeLabelDateOptions<VALUE = unknown, THEME extends DThemePickerDatetimeLabelDate = DThemePickerDatetimeLabelDate> extends DTextOptions<VALUE, THEME> {
}
export interface DThemePickerDatetimeLabelDate extends DThemeText {
}
export declare class DPickerDatetimeLabelDate<VALUE = unknown, THEME extends DThemePickerDatetimeLabelDate = DThemePickerDatetimeLabelDate, OPTIONS extends DPickerDatetimeLabelDateOptions<VALUE, THEME> = DPickerDatetimeLabelDateOptions<VALUE, THEME>> extends DText<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
