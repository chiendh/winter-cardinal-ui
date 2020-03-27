import { DDialogConfirm, DDialogConfirmOptions, DThemeDialogConfirm } from "./d-dialog-confirm";
export interface DDialogMessageOptions<THEME extends DThemeDialogMessage> extends DDialogConfirmOptions<THEME> {
}
export interface DThemeDialogMessage extends DThemeDialogConfirm {
}
export declare class DDialogMessage<THEME extends DThemeDialogMessage = DThemeDialogMessage, OPTIONS extends DDialogMessageOptions<THEME> = DDialogMessageOptions<THEME>> extends DDialogConfirm<THEME, OPTIONS> {
    protected getType(): string;
}
