import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerDate, DPickerDateOptions } from "./d-picker-date";
export interface DDialogDateOptions<THEME extends DThemeDialogDate = DThemeDialogDate> extends DDialogCommandOptions<THEME> {
    picker?: DPickerDateOptions;
}
export interface DThemeDialogDate extends DThemeDialogCommand {
}
export declare class DDialogDate<THEME extends DThemeDialogDate = DThemeDialogDate, OPTIONS extends DDialogDateOptions<THEME> = DDialogDateOptions<THEME>> extends DDialogCommand<THEME, OPTIONS> {
    protected _picker: DPickerDate;
    protected onInit(layout: DLayoutVertical, options?: OPTIONS): void;
    get current(): Date;
    set current(dateCurrent: Date);
    get new(): Date;
    set new(dateNew: Date);
    get page(): Date;
    set page(datePage: Date);
    get picker(): DPickerDate;
    protected getType(): string;
}
