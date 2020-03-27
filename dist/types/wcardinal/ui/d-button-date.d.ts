import { DBaseState } from "./d-base-state";
import { DButton, DButtonOnOptions, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDate, DDialogDateOptions } from "./d-dialog-date";
export interface DButtonDateOnOptions extends DButtonOnOptions<Date> {
    /**
     * Triggered when a selection is changed.
     *
     * @param newValue a newly selected value
     * @param oldValue a previously selected value
     * @param self a button
     */
    change?: (newValue: Date, oldValue: Date, self: any) => void;
}
export interface DButtonDateOptions<THEME extends DThemeButtonDate = DThemeButtonDate> extends DButtonOptions<Date, THEME> {
    dialog?: DDialogDateOptions;
    on?: DButtonDateOnOptions;
}
export interface DThemeButtonDate extends DThemeButton {
    getTextFormatter(): (value: Date, caller: DButtonDate) => string;
    getTextValue(state: DBaseState): Date;
    newTextValue(): Date;
}
export declare class DButtonDate<THEME extends DThemeButtonDate = DThemeButtonDate, OPTIONS extends DButtonDateOptions<THEME> = DButtonDateOptions<THEME>> extends DButton<Date, THEME, OPTIONS> {
    protected _dialog?: DDialogDate;
    protected _dialogOptions?: DDialogDateOptions;
    protected init(options?: OPTIONS): void;
    get dialog(): DDialogDate;
    get value(): Date;
    set value(value: Date);
    protected getType(): string;
}
