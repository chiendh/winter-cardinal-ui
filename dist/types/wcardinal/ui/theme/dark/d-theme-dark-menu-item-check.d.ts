import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuItemCheck } from "../../d-menu-item-check";
import { DThemeDarkMenuItemText } from "./d-theme-dark-menu-item-text";
export declare class DThemeDarkMenuItemCheck extends DThemeDarkMenuItemText implements DThemeMenuItemCheck {
    getBackgroundColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getImageAlignWith(): DAlignWith;
    getImageMarginHorizontal(): number;
}
