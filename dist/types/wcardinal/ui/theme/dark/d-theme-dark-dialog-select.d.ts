import { DDialogSelectItemTextFormatter, DThemeDialogSelect } from "../../d-dialog-select";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";
export declare class DThemeDarkDialogSelect extends DThemeDarkDialogCommand implements DThemeDialogSelect {
    getOk(): string | null;
    getCancel(): string | null;
    getItemTextFormatter(): DDialogSelectItemTextFormatter<any>;
    getNoteNoItemsText(): string;
    getNoteSearchingText(): string;
}
