import { DThemeDialogProcessing } from "../../d-dialog-processing";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";
export declare class DThemeDarkDialogProcessing extends DThemeDarkDialogConfirm implements DThemeDialogProcessing {
    getOk(): string | null;
    getCancel(): string | null;
    getMessage(): DStateAwareOrValue<string>;
    getInterval(): number;
}
