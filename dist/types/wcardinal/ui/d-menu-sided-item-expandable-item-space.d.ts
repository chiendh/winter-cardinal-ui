import { DMenuItemExpandableItemSpace } from "./d-menu-item-expandable-item-space";
import { DMenuItemSpaceOptions, DThemeMenuItemSpace } from "./d-menu-item-space";
export declare class DMenuSidedItemExpandableItemSpace<THEME extends DThemeMenuItemSpace = DThemeMenuItemSpace, OPTIONS extends DMenuItemSpaceOptions<THEME> = DMenuItemSpaceOptions<THEME>> extends DMenuItemExpandableItemSpace<THEME, OPTIONS> {
    protected getType(): string;
}
