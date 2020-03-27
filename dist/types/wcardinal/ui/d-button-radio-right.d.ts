import { DButtonRadio, DButtonRadioOptions, DThemeButtonRadio } from "./d-button-radio";
export interface DButtonRadioRightOptions<VALUE = unknown, THEME extends DThemeButtonRadioRight = DThemeButtonRadioRight> extends DButtonRadioOptions<VALUE, THEME> {
}
export interface DThemeButtonRadioRight extends DThemeButtonRadio {
}
export declare class DButtonRadioRight<VALUE = unknown, THEME extends DThemeButtonRadioRight = DThemeButtonRadioRight, OPTIONS extends DButtonRadioRightOptions<VALUE, THEME> = DButtonRadioRightOptions<VALUE, THEME>> extends DButtonRadio<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
