import { DSliderTrack, DSliderTrackOptions, DThemeSliderTrack } from "./d-slider-track";
export interface DSliderTrackVerticalOptions<VALUE = unknown, THEME extends DThemeSliderTrackVertical = DThemeSliderTrackVertical> extends DSliderTrackOptions<VALUE, THEME> {
}
export interface DThemeSliderTrackVertical extends DThemeSliderTrack {
}
export declare class DSliderTrackVertical<VALUE = unknown, THEME extends DThemeSliderTrackVertical = DThemeSliderTrackVertical, OPTIONS extends DSliderTrackVerticalOptions<VALUE, THEME> = DSliderTrackVerticalOptions<VALUE, THEME>> extends DSliderTrack<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
