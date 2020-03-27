import { Point } from "pixi.js";
import { DSlider, DSliderOptions, DThemeSlider } from "./d-slider";
import { DSliderLabelOptions } from "./d-slider-label";
import { DSliderTrack } from "./d-slider-track";
export interface DSliderVerticalOptions<THEME extends DThemeSliderVertical = DThemeSliderVertical> extends DSliderOptions<THEME> {
}
export interface DThemeSliderVertical extends DThemeSlider {
}
export declare class DSliderVertical<THEME extends DThemeSliderVertical = DThemeSliderVertical, OPTIONS extends DSliderVerticalOptions<THEME> = DSliderVerticalOptions<THEME>> extends DSlider<THEME, OPTIONS> {
    protected newTrack(options?: OPTIONS): DSliderTrack;
    protected newTrackSelected(options?: OPTIONS): DSliderTrack;
    protected toLabelMinOptions(options?: DSliderLabelOptions): DSliderLabelOptions;
    protected toLabelMaxOptions(options?: DSliderLabelOptions): DSliderLabelOptions;
    protected onPick(global: Point): void;
    protected onValuesChanged(): void;
    protected moveThumbPosition(y: number): void;
    protected getType(): string;
}
