import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeButtonCheck } from "../../d-button-check";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
export declare class DThemeDarkButtonCheck extends DThemeDarkButtonAmbient implements DThemeButtonCheck {
    COLOR: number;
    getBackgroundColor(state: DBaseState): number | null;
    getImageTintColor(state: DBaseState): number | null;
    isToggle(): boolean;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
}
