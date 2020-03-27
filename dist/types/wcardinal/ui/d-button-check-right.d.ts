import { DButtonCheck, DButtonCheckOptions, DThemeButtonCheck } from "./d-button-check";
export interface DButtonCheckRightOptions<VALUE = unknown, THEME extends DThemeButtonCheckRight = DThemeButtonCheckRight> extends DButtonCheckOptions<VALUE, THEME> {
}
export interface DThemeButtonCheckRight extends DThemeButtonCheck {
}
export declare class DButtonCheckRight<VALUE = unknown, THEME extends DThemeButtonCheck = DThemeButtonCheck, OPTIONS extends DButtonCheckOptions<VALUE, THEME> = DButtonCheckOptions<VALUE, THEME>> extends DButtonCheck<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
