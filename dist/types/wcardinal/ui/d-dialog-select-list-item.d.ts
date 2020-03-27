import { DListItem, DListItemOptions, DThemeListItem } from "./d-list-item";
export interface DDialogSelectListItemOptions<VALUE = unknown, THEME extends DThemeDialogSelecListItem = DThemeDialogSelecListItem> extends DListItemOptions<VALUE, THEME> {
}
export interface DThemeDialogSelecListItem extends DThemeListItem {
}
export declare class DDialogSelectListItem<VALUE = unknown, THEME extends DThemeDialogSelecListItem = DThemeDialogSelecListItem, OPTIONS extends DDialogSelectListItemOptions<VALUE, THEME> = DDialogSelectListItemOptions<VALUE, THEME>> extends DListItem<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
