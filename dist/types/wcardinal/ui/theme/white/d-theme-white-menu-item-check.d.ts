import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuItemCheck } from "../../d-menu-item-check";
import { DThemeWhiteMenuItemText } from "./d-theme-white-menu-item-text";
export declare class DThemeWhiteMenuItemCheck extends DThemeWhiteMenuItemText implements DThemeMenuItemCheck {
    getBackgroundColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getImageAlignWith(): DAlignWith;
    getImageMarginHorizontal(): number;
}
