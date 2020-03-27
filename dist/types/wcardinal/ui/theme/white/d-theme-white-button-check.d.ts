import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeButtonCheck } from "../../d-button-check";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
export declare class DThemeWhiteButtonCheck extends DThemeWhiteButtonAmbient implements DThemeButtonCheck {
    readonly IMAGE_TINT_COLOR_FOCUSED: number;
    getBackgroundColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
    getBackgroundAlpha(state: DBaseState): number;
    getImageTintColor(state: DBaseState): number | null;
    isToggle(): boolean;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
}
