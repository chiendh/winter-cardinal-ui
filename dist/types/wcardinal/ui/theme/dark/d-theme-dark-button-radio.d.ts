import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeButtonRadio } from "../../d-button-radio";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
export declare class DThemeDarkButtonRadio extends DThemeDarkButtonAmbient implements DThemeButtonRadio {
    COLOR: number;
    getBackgroundColor(state: DBaseState): number | null;
    getImageTintColor(state: DBaseState): number | null;
    isToggle(): boolean;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
}
