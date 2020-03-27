import { DListItemSelection } from "./d-list-item";
import { DMenuItemLink, DMenuItemLinkOptions, DThemeMenuItemLink } from "./d-menu-item-link";
export declare class DMenuSidedItemLink<VALUE = unknown, THEME extends DThemeMenuItemLink = DThemeMenuItemLink, OPTIONS extends DMenuItemLinkOptions<VALUE, THEME> = DMenuItemLinkOptions<VALUE, THEME>> extends DMenuItemLink<VALUE, THEME, OPTIONS> {
    protected getSelection(): DListItemSelection | null;
    protected getType(): string;
}
