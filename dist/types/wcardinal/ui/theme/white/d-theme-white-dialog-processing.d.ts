import { DThemeDialogProcessing } from "../../d-dialog-processing";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";
export declare class DThemeWhiteDialogProcessing extends DThemeWhiteDialogConfirm implements DThemeDialogProcessing {
    getOk(): string | null;
    getCancel(): string | null;
    getMessage(): DStateAwareOrValue<string>;
    getInterval(): number;
}
