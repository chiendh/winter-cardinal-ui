import { DSliderTrack, DSliderTrackOptions, DThemeSliderTrack } from "./d-slider-track";
export interface DSliderTrackHorizontalOptions<VALUE = unknown, THEME extends DThemeSliderTrackHorizontal = DThemeSliderTrackHorizontal> extends DSliderTrackOptions<VALUE, THEME> {
}
export interface DThemeSliderTrackHorizontal extends DThemeSliderTrack {
}
export declare class DSliderTrackHorizontal<VALUE = unknown, THEME extends DThemeSliderTrackHorizontal = DThemeSliderTrackHorizontal, OPTIONS extends DSliderTrackHorizontalOptions<VALUE, THEME> = DSliderTrackHorizontalOptions<VALUE, THEME>> extends DSliderTrack<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
