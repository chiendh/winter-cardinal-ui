import { DButton, DButtonOptions, DThemeButton } from "./d-button";
export interface DSliderTrackOptions<VALUE = unknown, THEME extends DThemeSliderTrack = DThemeSliderTrack> extends DButtonOptions<VALUE, THEME> {
}
export interface DThemeSliderTrack extends DThemeButton {
}
export declare class DSliderTrack<VALUE = unknown, THEME extends DThemeSliderTrack = DThemeSliderTrack, OPTIONS extends DSliderTrackOptions<VALUE, THEME> = DSliderTrackOptions<VALUE, THEME>> extends DButton<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
