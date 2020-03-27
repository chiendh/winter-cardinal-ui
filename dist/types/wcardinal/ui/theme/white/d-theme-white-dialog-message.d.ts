import { DThemeDialogMessage } from "../../d-dialog-message";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";
export declare class DThemeWhiteDialogMessage extends DThemeWhiteDialogConfirm implements DThemeDialogMessage {
    getOk(): string | null;
    getCancel(): string | null;
}
