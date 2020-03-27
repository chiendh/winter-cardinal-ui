import { DMenu } from "./d-menu";
import { DMenuItemExpandableItemMenu } from "./d-menu-item-expandable-item-menu";
import { DMenuItemMenuOptions, DThemeMenuItemMenu } from "./d-menu-item-menu";
export declare class DMenuSidedItemExpandableItemMenu<VALUE = unknown, THEME extends DThemeMenuItemMenu = DThemeMenuItemMenu, OPTIONS extends DMenuItemMenuOptions<VALUE, THEME> = DMenuItemMenuOptions<VALUE, THEME>> extends DMenuItemExpandableItemMenu<VALUE, THEME, OPTIONS> {
    protected onOpen(menu: DMenu<VALUE>): void;
    protected getType(): string;
}
