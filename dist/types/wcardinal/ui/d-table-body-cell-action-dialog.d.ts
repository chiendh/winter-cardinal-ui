import { DTableBodyCellSelectDialog, DTableBodyCellSelectDialogOptions, DThemeTableBodyCellSelectDialog } from "./d-table-body-cell-select-dialog";
export interface DTableBodyCellActionDialogOptions<ROW = unknown, THEME extends DThemeTableBodyCellActionDialog = DThemeTableBodyCellActionDialog> extends DTableBodyCellSelectDialogOptions<ROW, unknown, THEME> {
}
export interface DThemeTableBodyCellActionDialog extends DThemeTableBodyCellSelectDialog {
}
export declare class DTableBodyCellActionDialog<ROW = unknown, THEME extends DThemeTableBodyCellActionDialog = DThemeTableBodyCellActionDialog, OPTIONS extends DTableBodyCellActionDialogOptions<ROW, THEME> = DTableBodyCellActionDialogOptions<ROW, THEME>> extends DTableBodyCellSelectDialog<ROW, unknown, THEME, OPTIONS> {
    protected getType(): string;
}
