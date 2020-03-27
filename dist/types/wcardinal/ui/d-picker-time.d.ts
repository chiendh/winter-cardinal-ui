import { DisplayObject } from "pixi.js";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DCoordinateSize } from "./d-coordinate";
import { DInputInteger, DInputIntegerOptions } from "./d-input-integer";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBoundDate } from "./d-picker-time-bound";
import { DPickerTimeBounds, DPickerTimeBoundsOptions } from "./d-picker-time-bounds";
import { DText } from "./d-text";
export interface DPickerTimeOptions<THEME extends DThemePickerTime = DThemePickerTime> extends DBaseOptions<THEME> {
    margin?: number;
    hours?: DInputIntegerOptions;
    minutes?: DInputIntegerOptions;
    seconds?: DInputIntegerOptions;
    mask?: DPickerDatetimeMask;
    bounds?: DPickerTimeBoundsOptions;
}
export interface DThemePickerTime extends DThemeBase {
    getMargin(): number;
    getHoursOptions(): DInputIntegerOptions;
    getMinutesOptions(): DInputIntegerOptions;
    getSecondsOptions(): DInputIntegerOptions;
    getMask(): DPickerDatetimeMask;
    getLowerBound(): DPickerTimeBoundDate;
    isLowerBoundInclusive(): boolean;
    getUpperBound(): DPickerTimeBoundDate;
    isUpperBoundInclusive(): boolean;
}
export declare class DPickerTime<THEME extends DThemePickerTime = DThemePickerTime, OPTIONS extends DPickerTimeOptions<THEME> = DPickerTimeOptions<THEME>> extends DBase<THEME, OPTIONS> {
    protected _dateBounds: DPickerTimeBounds;
    protected _dateCurrent: Date;
    protected _dateNew: Date;
    protected _inputHours: DInputInteger | null;
    protected _inputMinutes: DInputInteger | null;
    protected _inputSeconds: DInputInteger | null;
    constructor(options?: OPTIONS);
    protected init(options?: OPTIONS): void;
    get current(): Date;
    set current(dateCurrent: Date);
    get new(): Date;
    set new(dateNew: Date);
    get bounds(): DPickerTimeBounds;
    hasHours(): boolean;
    hasMinutes(): boolean;
    hasSeconds(): boolean;
    reset(): void;
    protected onReset(): void;
    protected onNewChanged(): void;
    protected newChildren(theme: THEME, options: OPTIONS | undefined, margin: number): Array<DisplayObject | null>;
    protected newTimeLayout(hours: DInputInteger | null, minutes: DInputInteger | null, seconds: DInputInteger | null, margin: number): DLayoutHorizontal | null;
    protected getTimeLayoutWidth(): DCoordinateSize;
    protected getTimeLayoutHeight(): DCoordinateSize;
    protected newTimeLayoutChildren(hours: DInputInteger | null, minutes: DInputInteger | null, seconds: DInputInteger | null): Array<DisplayObject | null>;
    protected newMinuteSeparator(): DText | null;
    getMinuteSeparator(): string;
    protected newSecondSeparator(): DText | null;
    getSecondSeparator(): string;
    protected adjustInputOptions(theme: THEME, options: DInputIntegerOptions, max: number): DInputIntegerOptions;
    protected newInputHours(theme: THEME, options?: OPTIONS): DInputInteger | null;
    protected onHoursChanged(value: number): void;
    protected newInputMinutes(theme: THEME, options?: OPTIONS): DInputInteger | null;
    protected onMinutesChanged(value: number): void;
    protected newInputSeconds(theme: THEME, options?: OPTIONS): DInputInteger | null;
    protected onSecondsChanged(value: number): void;
    protected getType(): string;
}
