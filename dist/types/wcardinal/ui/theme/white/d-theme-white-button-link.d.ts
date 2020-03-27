import { DThemeButtonLink } from "../../d-button-link";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
export declare class DThemeWhiteButtonLink extends DThemeWhiteButtonAmbient implements DThemeButtonLink {
    getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId>;
}
