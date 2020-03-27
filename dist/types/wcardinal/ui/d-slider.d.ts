import { interaction, Point } from "pixi.js";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderLabel, DSliderLabelOptions } from "./d-slider-label";
import { DSliderThumb, DSliderThumbOptions } from "./d-slider-thumb";
import { DSliderTrack, DSliderTrackOptions } from "./d-slider-track";
import { DSliderValue, DSliderValueOptions } from "./d-slider-value";
import InteractionEvent = interaction.InteractionEvent;
import InteractionManager = interaction.InteractionManager;
export interface DSliderOptions<THEME extends DThemeSlider> extends DBaseOptions<THEME> {
    min?: DSliderLabelOptions;
    max?: DSliderLabelOptions;
    value?: DSliderValueOptions;
    track?: DSliderTrackOptions;
    thumb?: DSliderThumbOptions;
}
export interface DThemeSlider extends DThemeBase {
}
export declare abstract class DSlider<THEME extends DThemeSlider = DThemeSlider, OPTIONS extends DSliderOptions<THEME> = DSliderOptions<THEME>> extends DBase<THEME, OPTIONS> {
    protected _track: DSliderTrack;
    protected _thumb: DSliderThumb;
    protected _trackSelected: DSliderTrack;
    protected _value: DSliderValue;
    protected _roundNumber: number;
    protected _offset: number;
    protected _yOffset: number;
    protected _ratioValue: number;
    protected _min: DSliderLabel;
    protected _max: DSliderLabel;
    protected _onThumbMoveBound: (e: InteractionEvent) => void;
    protected _onThumbUpBound: (e: InteractionEvent) => void;
    protected _onTrackUpBound: (e: InteractionEvent) => void;
    protected _onTrackSelectedUpBound: (e: InteractionEvent) => void;
    protected _interactionManager?: InteractionManager;
    protected init(options?: OPTIONS): void;
    protected newThumb(options?: OPTIONS): DSliderThumb;
    protected newValue(options?: OPTIONS): DSliderValue;
    protected toValueOptions(options?: DSliderValueOptions): DSliderValueOptions;
    protected newLabelMin(options?: OPTIONS): DSliderLabel;
    protected toLabelMinOptions(options?: DSliderLabelOptions): DSliderLabelOptions;
    protected newLabelMax(options?: OPTIONS): DSliderLabel;
    protected toLabelMaxOptions(options?: DSliderLabelOptions): DSliderLabelOptions;
    protected abstract newTrack(options?: OPTIONS): DSliderTrack;
    protected abstract newTrackSelected(options?: OPTIONS): DSliderTrack;
    protected abstract onPick(global: Point): void;
    protected abstract onValuesChanged(): void;
    protected abstract moveThumbPosition(thumbCoordinate: number): void;
    protected getValueMargin(): number;
    protected onTrackDown(global: Point): void;
    protected onTrackSelectedDown(global: Point): void;
    protected onTrackUpBound(e: InteractionEvent): void;
    protected onTrackSelectedUpBound(e: InteractionEvent): void;
    protected onThumbMove(e: InteractionEvent): void;
    protected onThumbDown(e: InteractionEvent): void;
    protected onThumbUp(e: InteractionEvent): void;
    protected updateValue(): void;
    onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void;
    /**
     * Gets current value of slider
     */
    get value(): number;
    /**
     * Sets value for slider
     * - New value will be applied
     * - UI components will be changed arcording to new value
     */
    set value(value: number);
    /**
     * Gets min value of slider
     */
    get min(): number;
    /**
     * Sets min value for slider
     * - New min value will be applied
     * - UI components will be changed arcording to new value
     */
    set min(newMin: number);
    /**
     * Gets max value of slider
     */
    get max(): number;
    /**
     * Sets max value for slider
     * - New max value will be applied
     * - UI components will be changed arcording to new value
     */
    set max(newMax: number);
    protected getType(): string;
}
