import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
export interface DButtonRadioOptions<VALUE = unknown, THEME extends DThemeButtonRadio = DThemeButtonRadio> extends DButtonBaseOptions<VALUE, THEME> {
}
export interface DThemeButtonRadio extends DThemeButtonBase {
}
export declare class DButtonRadio<VALUE = unknown, THEME extends DThemeButtonRadio = DThemeButtonRadio, OPTIONS extends DButtonRadioOptions<VALUE, THEME> = DButtonRadioOptions<VALUE, THEME>> extends DButtonBase<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
