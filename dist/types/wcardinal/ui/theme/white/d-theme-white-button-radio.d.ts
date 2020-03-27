import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeButtonRadio } from "../../d-button-radio";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
export declare class DThemeWhiteButtonRadio extends DThemeWhiteButtonAmbient implements DThemeButtonRadio {
    readonly IMAGE_TINT_COLOR_FOCUSED: number;
    getBackgroundColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
    getBackgroundAlpha(state: DBaseState): number;
    getImageTintColor(state: DBaseState): number | null;
    isToggle(): boolean;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
}
