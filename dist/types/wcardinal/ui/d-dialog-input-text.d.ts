import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DInputTextAndLabel } from "./d-input-text-and-label";
import { DLayoutVertical } from "./d-layout-vertical";
export interface DDialogInputTextOptions<THEME extends DThemeDialogInputText> extends DDialogCommandOptions<THEME> {
    label?: string;
}
export interface DThemeDialogInputText extends DThemeDialogCommand {
    getLabel(): string;
    getLabelWidth(): number;
}
export declare class DDialogInputText<THEME extends DThemeDialogInputText = DThemeDialogInputText, OPTIONS extends DDialogInputTextOptions<THEME> = DDialogInputTextOptions<THEME>> extends DDialogCommand<THEME, OPTIONS> {
    protected _inputAndLabel: DInputTextAndLabel;
    protected onInit(layout: DLayoutVertical, options?: OPTIONS): void;
    get input(): import("./d-input-text").DInputText<import("./d-input-text").DThemeInputText, import("./d-input-text").DInputTextOptions<import("./d-input-text").DThemeInputText>>;
    get value(): string;
    set value(value: string);
    protected getType(): string;
}
