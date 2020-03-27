import { DButtonBase, DButtonBaseOnOptions, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
export interface DButtonOnOptions<VALUE> extends DButtonBaseOnOptions<VALUE> {
}
export interface DButtonOptions<VALUE = unknown, THEME extends DThemeButton = DThemeButton> extends DButtonBaseOptions<VALUE, THEME> {
}
export interface DThemeButton extends DThemeButtonBase {
}
export declare class DButton<VALUE = unknown, THEME extends DThemeButton = DThemeButton, OPTIONS extends DButtonOptions<VALUE, THEME> = DButtonOptions<VALUE, THEME>> extends DButtonBase<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
