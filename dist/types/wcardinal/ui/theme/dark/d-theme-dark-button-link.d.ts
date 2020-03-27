import { DThemeButtonLink } from "../../d-button-link";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
export declare class DThemeDarkButtonLink extends DThemeDarkButtonAmbient implements DThemeButtonLink {
    getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId>;
}
