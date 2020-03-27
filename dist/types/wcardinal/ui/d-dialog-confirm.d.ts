import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DDialogConfirmMessage, DDialogConfirmMessageOptions } from "./d-dialog-confirm-message";
import { DLayoutVertical } from "./d-layout-vertical";
import { DStateAwareOrValue } from "./d-state-aware";
export interface DDialogConfirmOptions<THEME extends DThemeDialogConfirm = DThemeDialogConfirm> extends DDialogCommandOptions<THEME> {
    message?: DStateAwareOrValue<string> | DDialogConfirmMessageOptions | DDialogConfirmMessage;
}
export interface DThemeDialogConfirm extends DThemeDialogCommand {
    getMessage(): DStateAwareOrValue<string>;
}
export declare class DDialogConfirm<THEME extends DThemeDialogConfirm = DThemeDialogConfirm, OPTIONS extends DDialogConfirmOptions<THEME> = DDialogConfirmOptions<THEME>> extends DDialogCommand<THEME, OPTIONS> {
    protected _message: DDialogConfirmMessage;
    protected onInit(layout: DLayoutVertical, options?: OPTIONS): void;
    protected toMessage(theme: DThemeDialogConfirm, options?: DDialogConfirmOptions): DDialogConfirmMessage;
    protected toMessageOptionsMerged(options: DDialogConfirmMessageOptions, message: DStateAwareOrValue<string>): DDialogConfirmMessageOptions;
    protected toMessageOptions(message: DStateAwareOrValue<string>): DDialogConfirmMessageOptions;
    protected newMessage(options: DDialogConfirmMessageOptions): DDialogConfirmMessage;
    get message(): DDialogConfirmMessage;
    protected getType(): string;
}
