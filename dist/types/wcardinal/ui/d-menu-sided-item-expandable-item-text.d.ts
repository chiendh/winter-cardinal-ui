import { DMenuItemExpandableItemText } from "./d-menu-item-expandable-item-text";
import { DMenuItemTextOptions, DThemeMenuItemText } from "./d-menu-item-text";
export declare class DMenuSidedItemExpandableItemText<VALUE = unknown, THEME extends DThemeMenuItemText = DThemeMenuItemText, OPTIONS extends DMenuItemTextOptions<VALUE, THEME> = DMenuItemTextOptions<VALUE, THEME>> extends DMenuItemExpandableItemText<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
