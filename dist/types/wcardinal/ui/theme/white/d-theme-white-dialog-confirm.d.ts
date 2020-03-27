import { DThemeDialogConfirm } from "../../d-dialog-confirm";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";
export declare class DThemeWhiteDialogConfirm extends DThemeWhiteDialogCommand implements DThemeDialogConfirm {
    getOk(): string | null;
    getCancel(): string | null;
    getMessage(): DStateAwareOrValue<string>;
}
