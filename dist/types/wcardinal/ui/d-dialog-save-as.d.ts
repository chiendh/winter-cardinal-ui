import { DDialogInputText, DDialogInputTextOptions, DThemeDialogInputText } from "./d-dialog-input-text";
export interface DDialogSaveAsOptions<THEME extends DThemeDialogSaveAs> extends DDialogInputTextOptions<THEME> {
}
export interface DThemeDialogSaveAs extends DThemeDialogInputText {
}
export declare class DDialogSaveAs<THEME extends DThemeDialogSaveAs = DThemeDialogSaveAs, OPTIONS extends DDialogSaveAsOptions<THEME> = DDialogSaveAsOptions<THEME>> extends DDialogInputText<THEME, OPTIONS> {
    protected onOpen(): void;
    protected onOk(): void;
    protected getType(): string;
}
