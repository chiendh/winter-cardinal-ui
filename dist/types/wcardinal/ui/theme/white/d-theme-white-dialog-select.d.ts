import { DDialogSelectItemTextFormatter, DThemeDialogSelect } from "../../d-dialog-select";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";
export declare class DThemeWhiteDialogSelect extends DThemeWhiteDialogCommand implements DThemeDialogSelect {
    getOk(): string | null;
    getCancel(): string | null;
    getItemTextFormatter(): DDialogSelectItemTextFormatter<any>;
    getNoteNoItemsText(): string;
    getNoteSearchingText(): string;
}
