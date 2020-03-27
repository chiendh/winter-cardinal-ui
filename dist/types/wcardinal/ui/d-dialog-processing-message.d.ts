import { DDialogConfirmMessage, DDialogConfirmMessageOptions, DThemeDialogConfirmMessage } from "./d-dialog-confirm-message";
export declare class DDialogProcessingMessage<VALUE = unknown, THEME extends DThemeDialogConfirmMessage = DThemeDialogConfirmMessage, OPTIONS extends DDialogConfirmMessageOptions<VALUE, THEME> = DDialogConfirmMessageOptions<VALUE, THEME>> extends DDialogConfirmMessage<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
