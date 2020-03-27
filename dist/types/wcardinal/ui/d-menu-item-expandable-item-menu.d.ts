import { DMenuItemMenu, DMenuItemMenuOptions, DThemeMenuItemMenu } from "./d-menu-item-menu";
export declare class DMenuItemExpandableItemMenu<VALUE = unknown, THEME extends DThemeMenuItemMenu = DThemeMenuItemMenu, OPTIONS extends DMenuItemMenuOptions<VALUE, THEME> = DMenuItemMenuOptions<VALUE, THEME>> extends DMenuItemMenu<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
