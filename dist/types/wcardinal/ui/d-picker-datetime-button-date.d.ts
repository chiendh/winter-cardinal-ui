import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";
export interface DPickerDatetimeButtonDateOptions<VALUE = unknown, THEME extends DThemePickerDatetimeButtonDate = DThemePickerDatetimeButtonDate> extends DButtonAmbientOptions<VALUE, THEME> {
}
export interface DThemePickerDatetimeButtonDate extends DThemeButtonAmbient {
}
export declare class DPickerDatetimeButtonDate<VALUE = unknown, THEME extends DThemePickerDatetimeButtonDate = DThemePickerDatetimeButtonDate, OPTIONS extends DPickerDatetimeButtonDateOptions<VALUE, THEME> = DPickerDatetimeButtonDateOptions<VALUE, THEME>> extends DButtonAmbient<VALUE, THEME, OPTIONS> {
    protected onToggleStart(): void;
    protected onToggleEnd(): void;
    protected getType(): string;
}
