import { Texture } from "pixi.js";
import { DButtonColorGradient, DThemeButtonColorGradient } from "../../d-button-color-gradient";
import { DPickerColorGradientData } from "../../d-picker-color-gradient-data";
import { DThemeWhiteButton } from "./d-theme-white-button";
export declare class DThemeWhiteButtonColorGradient extends DThemeWhiteButton implements DThemeButtonColorGradient {
    getViewBaseTexture(): Texture | null;
    getTextFormatter(): (value: DPickerColorGradientData, caller: DButtonColorGradient) => string;
    newTextValue(): DPickerColorGradientData;
}
