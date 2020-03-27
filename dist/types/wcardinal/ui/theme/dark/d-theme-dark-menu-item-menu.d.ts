import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuItemMenu } from "../../d-menu-item-menu";
import { DThemeDarkMenuItem } from "./d-theme-dark-menu-item";
export declare class DThemeDarkMenuItemMenu extends DThemeDarkMenuItem implements DThemeMenuItemMenu {
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getImageAlignWith(): DAlignWith;
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageMarginHorizontal(): number;
}
