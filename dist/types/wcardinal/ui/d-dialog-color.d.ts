import { DColorAndAlpha } from "./d-color";
import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerColor, DPickerColorOptions } from "./d-picker-color";
import { DPickerColorRecent } from "./d-picker-color-recent";
export interface DDialogColorOptions<THEME extends DThemeDialogColor = DThemeDialogColor> extends DDialogCommandOptions<THEME> {
    picker?: DPickerColorOptions;
}
export interface DThemeDialogColor extends DThemeDialogCommand {
}
export declare class DDialogColor<THEME extends DThemeDialogColor = DThemeDialogColor, OPTIONS extends DDialogColorOptions<THEME> = DDialogColorOptions<THEME>> extends DDialogCommand<THEME, OPTIONS> {
    protected _picker: DPickerColor;
    protected onInit(layout: DLayoutVertical, options?: OPTIONS): void;
    get current(): DColorAndAlpha;
    get new(): DColorAndAlpha;
    get recent(): DPickerColorRecent;
    get picker(): DPickerColor;
    protected getType(): string;
}
