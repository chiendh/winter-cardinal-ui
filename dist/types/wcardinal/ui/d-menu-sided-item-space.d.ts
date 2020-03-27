import { DMenuItemSpace, DMenuItemSpaceOptions, DThemeMenuItemSpace } from "./d-menu-item-space";
export declare class DMenuSidedItemSpace<THEME extends DThemeMenuItemSpace = DThemeMenuItemSpace, OPTIONS extends DMenuItemSpaceOptions<THEME> = DMenuItemSpaceOptions<THEME>> extends DMenuItemSpace<THEME, OPTIONS> {
    protected getType(): string;
}
