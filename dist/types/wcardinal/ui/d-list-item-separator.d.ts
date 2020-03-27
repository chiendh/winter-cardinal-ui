import { DListItem, DListItemOptions, DThemeListItem } from "./d-list-item";
export interface DListItemSeparatorOptions<VALUE, THEME extends DThemeListItemSeparator> extends DListItemOptions<VALUE, THEME> {
    separator?: true;
}
export interface DThemeListItemSeparator extends DThemeListItem {
}
export declare class DListItemSeparator<VALUE, THEME extends DThemeListItemSeparator = DThemeListItemSeparator, OPTIONS extends DListItemSeparatorOptions<VALUE, THEME> = DListItemSeparatorOptions<VALUE, THEME>> extends DListItem<VALUE, THEME, OPTIONS> {
    protected init(options?: OPTIONS): void;
    protected initReflowable(): void;
    protected getType(): string;
}
