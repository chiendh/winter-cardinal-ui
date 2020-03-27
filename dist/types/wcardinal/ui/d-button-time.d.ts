import { DBaseState } from "./d-base-state";
import { DButton, DButtonOnOptions, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogTime, DDialogTimeOptions } from "./d-dialog-time";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
/**
 * Mappings of event names and handlers.
 */
export interface DButtonTimeOnOptions extends DButtonOnOptions<Date> {
    /**
     * Triggered when a selection is changed.
     *
     * @param self a button
     */
    change?: (newValue: Date, oldValue: Date, self: any) => void;
}
export interface DButtonTimeOptions<THEME extends DThemeButtonTime = DThemeButtonTime> extends DButtonOptions<Date, THEME> {
    dialog?: DDialogTimeOptions;
    on?: DButtonTimeOnOptions;
}
export interface DThemeButtonTime extends DThemeButton {
    getTextFormatter(): (value: Date, caller: DButtonTime) => string;
    getTextValue(state: DBaseState): Date;
    newTextValue(): Date;
}
export declare class DButtonTime<THEME extends DThemeButtonTime = DThemeButtonTime, OPTIONS extends DButtonTimeOptions<THEME> = DButtonTimeOptions<THEME>> extends DButton<Date, THEME, OPTIONS> {
    protected _dialog?: DDialogTime;
    protected _dialogOptions?: DDialogTimeOptions;
    protected _datetimeMask: DPickerDatetimeMask;
    protected init(options?: OPTIONS): void;
    getDatetimeMask(): DPickerDatetimeMask;
    get dialog(): DDialogTime;
    get value(): Date;
    set value(value: Date);
    protected getType(): string;
}
