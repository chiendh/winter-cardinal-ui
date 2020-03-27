import { DBaseState } from "./d-base-state";
import { DButton, DButtonOnOptions, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDatetime, DDialogDatetimeOptions } from "./d-dialog-datetime";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
/**
 * Mappings of event names and handlers.
 */
export interface DButtonDatetimeOnOptions extends DButtonOnOptions<Date> {
    /**
     * Triggered when a selection is changed.
     *
     * @param self a button
     */
    change?: (newValue: Date, oldValue: Date, self: any) => void;
}
export interface DButtonDatetimeOptions<THEME extends DThemeButtonDatetime = DThemeButtonDatetime> extends DButtonOptions<Date, THEME> {
    dialog?: DDialogDatetimeOptions;
    on?: DButtonDatetimeOnOptions;
}
export interface DThemeButtonDatetime extends DThemeButton {
    getTextFormatter(): (value: Date, caller: DButtonDatetime) => string;
    getTextValue(state: DBaseState): Date;
    newTextValue(): Date;
}
export declare class DButtonDatetime<THEME extends DThemeButtonDatetime = DThemeButtonDatetime, OPTIONS extends DButtonDatetimeOptions<THEME> = DButtonDatetimeOptions<THEME>> extends DButton<Date, THEME, OPTIONS> {
    protected _dialog?: DDialogDatetime;
    protected _dialogOptions?: DDialogDatetimeOptions;
    protected _datetimeMask: DPickerDatetimeMask;
    protected init(options?: OPTIONS): void;
    getDatetimeMask(): DPickerDatetimeMask;
    get dialog(): DDialogDatetime;
    get value(): Date;
    set value(value: Date);
    protected getType(): string;
}
