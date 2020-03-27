import { DMenuItemExpandableItemSeparator } from "./d-menu-item-expandable-item-separator";
import { DMenuItemSeparatorOptions, DThemeMenuItemSeparator } from "./d-menu-item-separator";
export declare class DMenuSidedItemExpandableItemSeparator<VALUE = unknown, THEME extends DThemeMenuItemSeparator = DThemeMenuItemSeparator, OPTIONS extends DMenuItemSeparatorOptions<VALUE, THEME> = DMenuItemSeparatorOptions<VALUE, THEME>> extends DMenuItemExpandableItemSeparator<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
