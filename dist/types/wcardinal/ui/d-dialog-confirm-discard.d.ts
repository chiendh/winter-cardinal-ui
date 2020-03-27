import { DDialogConfirm, DDialogConfirmOptions, DThemeDialogConfirm } from "./d-dialog-confirm";
export interface DDialogConfirmDiscardOptions<THEME extends DThemeDialogConfirm> extends DDialogConfirmOptions<THEME> {
}
export interface DThemeDialogConfirmDiscard extends DThemeDialogConfirm {
}
export declare class DDialogConfirmDiscard<THEME extends DThemeDialogConfirm = DThemeDialogConfirm, OPTIONS extends DDialogConfirmDiscardOptions<THEME> = DDialogConfirmDiscardOptions<THEME>> extends DDialogConfirm<THEME, OPTIONS> {
    protected getType(): string;
}
