import { DThemeDialogMessage } from "../../d-dialog-message";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";
export declare class DThemeDarkDialogMessage extends DThemeDarkDialogConfirm implements DThemeDialogMessage {
    getOk(): string | null;
    getCancel(): string | null;
}
