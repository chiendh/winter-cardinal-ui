import { DMenuItemSeparator, DMenuItemSeparatorOptions, DThemeMenuItemSeparator } from "./d-menu-item-separator";
export declare class DMenuItemExpandableItemSeparator<VALUE = unknown, THEME extends DThemeMenuItemSeparator = DThemeMenuItemSeparator, OPTIONS extends DMenuItemSeparatorOptions<VALUE, THEME> = DMenuItemSeparatorOptions<VALUE, THEME>> extends DMenuItemSeparator<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
