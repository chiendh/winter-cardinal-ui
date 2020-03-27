import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuItemMenu } from "../../d-menu-item-menu";
import { DThemeWhiteMenuItem } from "./d-theme-white-menu-item";
export declare class DThemeWhiteMenuItemMenu extends DThemeWhiteMenuItem implements DThemeMenuItemMenu {
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getImageAlignWith(): DAlignWith;
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageMarginHorizontal(): number;
}
