import { DisplayObject } from "pixi.js";
import { DCoordinateSize } from "./d-coordinate";
import { DInputIntegerOptions } from "./d-input-integer";
import { DPickerDatetimeButtonBack, DPickerDatetimeButtonBackOptions } from "./d-picker-datetime-button-back";
import { DPickerDatetimeButtonDate } from "./d-picker-datetime-button-date";
import { DPickerDatetimeButtonNext, DPickerDatetimeButtonNextOptions } from "./d-picker-datetime-button-next";
import { DPickerDatetimeLabel, DPickerDatetimeLabelOptions } from "./d-picker-datetime-label";
import { DPickerDatetimeLabelDate } from "./d-picker-datetime-label-date";
import { DPickerDatetimeSpace } from "./d-picker-datetime-space";
import { DPickerTime, DPickerTimeOptions, DThemePickerTime } from "./d-picker-time";
export declare type DPickerDatetimeLabelFormatter = (date: Date) => string;
export declare type DPickerDatetimeDateDecorator = (date: Date, button: DPickerDatetimeButtonDate) => void;
export declare type DPickerDatetimeDayLabels = [string, string, string, string, string, string, string];
export interface DPickerDatetimeDayOptions {
    start?: number;
    labels?: DPickerDatetimeDayLabels;
}
export interface DPickerDatetimeDateOptions {
    decorator?: DPickerDatetimeDateDecorator;
}
export interface DPickerDatetimeOptions<THEME extends DThemePickerDatetime = DThemePickerDatetime> extends DPickerTimeOptions<THEME> {
    back?: DPickerDatetimeButtonBackOptions | null;
    next?: DPickerDatetimeButtonNextOptions | null;
    day?: DPickerDatetimeDayOptions;
    label?: DPickerDatetimeLabelOptions;
    date?: DPickerDatetimeDateOptions;
}
export interface DThemePickerDatetime extends DThemePickerTime {
    getDayLabels(): DPickerDatetimeDayLabels;
    getDayStart(): number;
    getLabelFormatter(): DPickerDatetimeLabelFormatter;
    getDateDecorator(): DPickerDatetimeDateDecorator;
    getBackButtonOptions(): DPickerDatetimeButtonBackOptions | null;
    getNextButtonOptions(): DPickerDatetimeButtonNextOptions | null;
}
export declare class DPickerDatetime<THEME extends DThemePickerDatetime = DThemePickerDatetime, OPTIONS extends DPickerDatetimeOptions<THEME> = DPickerDatetimeOptions<THEME>> extends DPickerTime<THEME, OPTIONS> {
    protected _datePage: Date;
    protected _dateButtons: Array<DPickerDatetimeSpace | DPickerDatetimeButtonDate>;
    protected _dateDecorator: DPickerDatetimeDateDecorator;
    protected _label: DPickerDatetimeLabel;
    protected init(options?: OPTIONS): void;
    protected newChildren(theme: THEME, options: OPTIONS | undefined, margin: number): Array<DisplayObject | null>;
    get page(): Date;
    set page(datePage: Date);
    protected onReset(): void;
    next(): void;
    back(): void;
    onNewChanged(): void;
    protected onPageChanged(): void;
    protected adjustInputOptions(theme: THEME, options: DInputIntegerOptions, max: number): DInputIntegerOptions;
    protected getTimeLayoutWidth(): DCoordinateSize;
    protected toLabelOptions(theme: THEME, options?: DPickerDatetimeOptions): DPickerDatetimeLabelOptions;
    protected newLabel(theme: THEME, options?: DPickerDatetimeOptions): DPickerDatetimeLabel;
    protected newBackButton(theme: THEME, options?: OPTIONS): DPickerDatetimeButtonBack | null;
    protected newNextButton(theme: THEME, options?: OPTIONS): DPickerDatetimeButtonNext | null;
    protected newDateLabels(theme: THEME, options: OPTIONS | undefined): DPickerDatetimeLabelDate[];
    protected newDateLabel(theme: THEME, options: OPTIONS | undefined, label: string): DPickerDatetimeLabelDate;
    protected newDateButtons(theme: THEME, options: OPTIONS | undefined): Array<DPickerDatetimeSpace | DPickerDatetimeButtonDate>;
    protected newSpace(theme: THEME, options: OPTIONS | undefined): DPickerDatetimeSpace;
    protected newDateButton(theme: THEME, options: OPTIONS | undefined, date: number): DPickerDatetimeButtonDate;
    protected onDateButtonClicked(date: number): void;
    protected getType(): string;
}
