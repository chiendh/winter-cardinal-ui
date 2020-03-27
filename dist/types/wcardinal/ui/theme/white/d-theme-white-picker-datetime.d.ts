import { DPickerDatetimeDateDecorator, DPickerDatetimeDayLabels, DPickerDatetimeLabelFormatter, DThemePickerDatetime } from "../../d-picker-datetime";
import { DPickerDatetimeButtonBackOptions } from "../../d-picker-datetime-button-back";
import { DPickerDatetimeButtonNextOptions } from "../../d-picker-datetime-button-next";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeWhitePickerTime } from "./d-theme-white-picker-time";
export declare class DThemeWhitePickerDatetime extends DThemeWhitePickerTime implements DThemePickerDatetime {
    getDayLabels(): DPickerDatetimeDayLabels;
    getDayStart(): number;
    getLabelFormatter(): DPickerDatetimeLabelFormatter;
    getDateDecorator(): DPickerDatetimeDateDecorator;
    getBackButtonOptions(): DPickerDatetimeButtonBackOptions | null;
    getNextButtonOptions(): DPickerDatetimeButtonNextOptions | null;
    getMask(): DPickerDatetimeMask;
}
