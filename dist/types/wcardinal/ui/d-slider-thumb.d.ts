import { DButton, DButtonOptions, DThemeButton } from "./d-button";
export interface DSliderThumbOptions<VALUE = unknown, THEME extends DThemeSliderThumb = DThemeSliderThumb> extends DButtonOptions<VALUE, THEME> {
}
export interface DThemeSliderThumb extends DThemeButton {
}
export declare class DSliderThumb<VALUE = unknown, THEME extends DThemeSliderThumb = DThemeSliderThumb, OPTIONS extends DSliderThumbOptions<VALUE, THEME> = DSliderThumbOptions<VALUE, THEME>> extends DButton<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
