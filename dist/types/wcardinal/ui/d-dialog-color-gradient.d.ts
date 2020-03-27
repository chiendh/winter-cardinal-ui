import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerColorGradient, DPickerColorGradientOptions } from "./d-picker-color-gradient";
import { DPickerColorGradientData } from "./d-picker-color-gradient-data";
import { DPickerColorGradientRecent } from "./d-picker-color-gradient-recent";
export interface DDialogColorGradientOptions<THEME extends DThemeDialogColorGradient = DThemeDialogColorGradient> extends DDialogCommandOptions<THEME> {
    picker?: DPickerColorGradientOptions;
}
export interface DThemeDialogColorGradient extends DThemeDialogCommand {
}
export declare class DDialogColorGradient<THEME extends DThemeDialogColorGradient = DThemeDialogColorGradient, OPTIONS extends DDialogColorGradientOptions<THEME> = DDialogColorGradientOptions<THEME>> extends DDialogCommand<THEME, OPTIONS> {
    protected _picker: DPickerColorGradient;
    protected onInit(layout: DLayoutVertical, options?: OPTIONS): void;
    get data(): DPickerColorGradientData;
    get recent(): DPickerColorGradientRecent;
    get picker(): DPickerColorGradient;
    onKeyDown(e: KeyboardEvent): boolean;
    protected getType(): string;
}
