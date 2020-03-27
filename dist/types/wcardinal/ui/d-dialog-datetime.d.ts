import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerDatetime, DPickerDatetimeOptions } from "./d-picker-datetime";
export interface DDialogDatetimeOptions<THEME extends DThemeDialogDatetime = DThemeDialogDatetime> extends DDialogCommandOptions<THEME> {
    picker?: DPickerDatetimeOptions;
}
export interface DThemeDialogDatetime extends DThemeDialogCommand {
}
export declare class DDialogDatetime<THEME extends DThemeDialogDatetime = DThemeDialogDatetime, OPTIONS extends DDialogDatetimeOptions<THEME> = DDialogDatetimeOptions<THEME>> extends DDialogCommand<THEME, OPTIONS> {
    protected _picker: DPickerDatetime;
    protected onInit(layout: DLayoutVertical, options?: OPTIONS): void;
    get current(): Date;
    set current(dateCurrent: Date);
    get new(): Date;
    set new(dateNew: Date);
    get page(): Date;
    set page(datePage: Date);
    get picker(): DPickerDatetime;
    protected getType(): string;
}
