import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
export interface DButtonCheckOptions<VALUE = unknown, THEME extends DThemeButtonCheck = DThemeButtonCheck> extends DButtonBaseOptions<VALUE, THEME> {
}
export interface DThemeButtonCheck extends DThemeButtonBase {
}
export declare class DButtonCheck<VALUE = unknown, THEME extends DThemeButtonCheck = DThemeButtonCheck, OPTIONS extends DButtonCheckOptions<VALUE, THEME> = DButtonCheckOptions<VALUE, THEME>> extends DButtonBase<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
