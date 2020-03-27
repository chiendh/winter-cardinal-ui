import { Point } from "pixi.js";
import { DSlider, DSliderOptions, DThemeSlider } from "./d-slider";
import { DSliderLabelOptions } from "./d-slider-label";
import { DSliderTrack } from "./d-slider-track";
import { DSliderValueOptions } from "./d-slider-value";
export interface DSliderHorizontalOptions<THEME extends DThemeSliderHorizontal> extends DSliderOptions<THEME> {
}
export interface DThemeSliderHorizontal extends DThemeSlider {
}
export declare class DSliderHorizontal<THEME extends DThemeSliderHorizontal = DThemeSliderHorizontal, OPTIONS extends DSliderHorizontalOptions<THEME> = DSliderHorizontalOptions<THEME>> extends DSlider<THEME, OPTIONS> {
    protected newTrack(options?: OPTIONS): DSliderTrack;
    protected newTrackSelected(options?: OPTIONS): DSliderTrack;
    protected toValueOptions(options?: DSliderValueOptions): DSliderValueOptions;
    protected toLabelMinOptions(options?: DSliderLabelOptions): DSliderLabelOptions;
    protected toLabelMaxOptions(options?: DSliderLabelOptions): DSliderLabelOptions;
    protected onPick(global: Point): void;
    protected onValuesChanged(): void;
    protected moveThumbPosition(x: number): void;
    protected toThumbCoordinate(x: number): number;
    protected getType(): string;
}
