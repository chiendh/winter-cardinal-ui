import { DMenuItemLink, DMenuItemLinkOptions, DThemeMenuItemLink } from "./d-menu-item-link";
export declare class DMenuItemExpandableItemLink<VALUE = unknown, THEME extends DThemeMenuItemLink = DThemeMenuItemLink, OPTIONS extends DMenuItemLinkOptions<VALUE, THEME> = DMenuItemLinkOptions<VALUE, THEME>> extends DMenuItemLink<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
