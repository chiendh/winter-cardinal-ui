import { DListItem, DListItemOptions, DListItemSelection, DThemeListItem } from "./d-list-item";
export interface DMenuItemExpandableHeaderOptions<VALUE = unknown, THEME extends DThemeMenuItemExpandableHeader = DThemeMenuItemExpandableHeader> extends DListItemOptions<VALUE, THEME> {
}
export interface DThemeMenuItemExpandableHeader extends DThemeListItem {
}
export declare class DMenuItemExpandableHeader<VALUE = unknown, THEME extends DThemeMenuItemExpandableHeader = DThemeMenuItemExpandableHeader, OPTIONS extends DMenuItemExpandableHeaderOptions<VALUE, THEME> = DMenuItemExpandableHeaderOptions<VALUE, THEME>> extends DListItem<VALUE, THEME, OPTIONS> {
    protected init(options?: OPTIONS): void;
    protected getSelection(): DListItemSelection | null;
    protected getType(): string;
}
