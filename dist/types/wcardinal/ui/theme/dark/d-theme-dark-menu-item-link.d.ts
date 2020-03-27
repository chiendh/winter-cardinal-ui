import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeMenuItemLink } from "../../d-menu-item-link";
import { DThemeDarkMenuItemText } from "./d-theme-dark-menu-item-text";
export declare class DThemeDarkMenuItemLink extends DThemeDarkMenuItemText implements DThemeMenuItemLink {
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getImageTintAlpha(state: DBaseState): number;
    getImageAlignWith(): DAlignWith;
    getImageAlignHorizontal(): DAlignHorizontal;
    getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId>;
}
