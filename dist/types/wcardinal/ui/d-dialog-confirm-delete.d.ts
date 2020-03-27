import { DDialogConfirm, DDialogConfirmOptions, DThemeDialogConfirm } from "./d-dialog-confirm";
export interface DDialogConfirmDeleteOptions<THEME extends DThemeDialogConfirm> extends DDialogConfirmOptions<THEME> {
}
export interface DThemeDialogConfirmDelete extends DThemeDialogConfirm {
}
export declare class DDialogConfirmDelete<THEME extends DThemeDialogConfirm = DThemeDialogConfirm, OPTIONS extends DDialogConfirmDeleteOptions<THEME> = DDialogConfirmDeleteOptions<THEME>> extends DDialogConfirm<THEME, OPTIONS> {
    protected getType(): string;
}
