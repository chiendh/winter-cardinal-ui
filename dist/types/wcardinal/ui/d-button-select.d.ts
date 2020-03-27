import { DBaseState } from "./d-base-state";
import { DButton, DButtonOnOptions, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogSelectOptions } from "./d-dialog-select";
/**
 * A dialog to select values.
 */
export interface DButtonSelectDialog<VALUE> {
    readonly value: VALUE | null;
    open(): Promise<void>;
}
/**
 * A function to retrieve a selected value from a dialog.
 */
export declare type DButtonSelectGetter<VALUE, DIALOG> = (dialog: DIALOG) => VALUE | null;
/**
 * A function to set a selecte value to a dialog.
 * Called before opening a dialog.
 */
export declare type DButtonSelectSetter<VALUE, DIALOG> = (dialog: DIALOG, value: VALUE | null) => void;
/**
 * Mappings of event names and handlers.
 */
export interface DButtonSelectOnOptions<VALUE> extends DButtonOnOptions<VALUE> {
    /**
     * Triggered when a selection is changed.
     *
     * @param newValue a newly selected value
     * @param oldValue a previously selected value
     * @param self a button
     */
    change?: (newValue: VALUE | null, oldValue: VALUE | null, self: any) => void;
}
export interface DButtonSelectOptions<VALUE extends unknown = unknown, DIALOG_VALUE extends unknown = unknown, DIALOG extends DButtonSelectDialog<DIALOG_VALUE> = DButtonSelectDialog<DIALOG_VALUE>, THEME extends DThemeButtonSelect = DThemeButtonSelect> extends DButtonOptions<VALUE | null, THEME> {
    /**
     * A function to retrieve a selected value from a dialog.
     */
    getter?: DButtonSelectGetter<VALUE, DIALOG>;
    /**
     * A function to set a selected value to a dialog.
     * Called before opening a dialog.
     */
    setter?: DButtonSelectSetter<VALUE, DIALOG>;
    /**
     * A dialog to select values.
     */
    dialog?: DDialogSelectOptions<DIALOG_VALUE> | DIALOG;
    on?: DButtonSelectOnOptions<VALUE>;
}
export interface DThemeButtonSelect extends DThemeButton {
    getTextFormatter(): (value: unknown | null, caller: DButtonSelect) => string;
    getTextValue(state: DBaseState): unknown | null;
    newTextValue(): unknown | null;
}
export declare class DButtonSelect<VALUE extends unknown = unknown, DIALOG_VALUE extends unknown = unknown, DIALOG extends DButtonSelectDialog<DIALOG_VALUE> = DButtonSelectDialog<DIALOG_VALUE>, THEME extends DThemeButtonSelect = DThemeButtonSelect, OPTIONS extends DButtonSelectOptions<VALUE, DIALOG_VALUE, DIALOG, THEME> = DButtonSelectOptions<VALUE, DIALOG_VALUE, DIALOG, THEME>> extends DButton<VALUE | null, THEME, OPTIONS> {
    protected _dialog?: DIALOG;
    protected init(options?: OPTIONS): void;
    get dialog(): DIALOG;
    protected toOptions(options?: OPTIONS): OPTIONS | undefined;
    get value(): VALUE | null;
    set value(value: VALUE | null);
    protected getType(): string;
}
