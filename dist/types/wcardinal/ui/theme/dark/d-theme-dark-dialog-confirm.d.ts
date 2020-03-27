import { DThemeDialogConfirm } from "../../d-dialog-confirm";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";
export declare class DThemeDarkDialogConfirm extends DThemeDarkDialogCommand implements DThemeDialogConfirm {
    getOk(): string | null;
    getCancel(): string | null;
    getMessage(): DStateAwareOrValue<string>;
}
