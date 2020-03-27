import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerTime, DPickerTimeOptions } from "./d-picker-time";
export interface DDialogTimeOptions<THEME extends DThemeDialogTime = DThemeDialogTime> extends DDialogCommandOptions<THEME> {
    picker?: DPickerTimeOptions;
}
export interface DThemeDialogTime extends DThemeDialogCommand {
}
export declare class DDialogTime<THEME extends DThemeDialogTime = DThemeDialogTime, OPTIONS extends DDialogTimeOptions<THEME> = DDialogTimeOptions<THEME>> extends DDialogCommand<THEME, OPTIONS> {
    protected _picker: DPickerTime;
    protected onInit(layout: DLayoutVertical, options?: OPTIONS): void;
    get current(): Date;
    set current(dateCurrent: Date);
    get new(): Date;
    set new(dateNew: Date);
    get picker(): DPickerTime;
    protected getType(): string;
}
