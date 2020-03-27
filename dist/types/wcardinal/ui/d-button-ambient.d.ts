import { DButton, DButtonOptions, DThemeButton } from "./d-button";
export interface DButtonAmbientOptions<VALUE = unknown, THEME extends DThemeButtonAmbient = DThemeButtonAmbient> extends DButtonOptions<VALUE, THEME> {
}
export interface DThemeButtonAmbient extends DThemeButton {
}
export declare class DButtonAmbient<VALUE = unknown, THEME extends DThemeButtonAmbient = DThemeButtonAmbient, OPTIONS extends DButtonAmbientOptions<VALUE, THEME> = DButtonAmbientOptions<VALUE, THEME>> extends DButton<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
