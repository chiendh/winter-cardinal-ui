import { Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DButtonColor, DThemeButtonColor } from "../../d-button-color";
import { DColorAndAlpha } from "../../d-color";
import { DThemeWhiteButton } from "./d-theme-white-button";
export declare class DThemeWhiteButtonColor extends DThemeWhiteButton implements DThemeButtonColor {
    getImageTintColor(state: DBaseState): number | null;
    getImageSource(state: DBaseState): Texture;
    getTextFormatter(): (value: DColorAndAlpha, caller: DButtonColor) => string;
    newTextValue(): DColorAndAlpha;
}
