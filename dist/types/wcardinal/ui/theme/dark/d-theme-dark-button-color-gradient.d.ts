import { Texture } from "pixi.js";
import { DButtonColorGradient, DThemeButtonColorGradient } from "../../d-button-color-gradient";
import { DPickerColorGradientData } from "../../d-picker-color-gradient-data";
import { DThemeDarkButton } from "./d-theme-dark-button";
export declare class DThemeDarkButtonColorGradient extends DThemeDarkButton implements DThemeButtonColorGradient {
    getViewBaseTexture(): Texture | null;
    getTextFormatter(): (value: DPickerColorGradientData, caller: DButtonColorGradient) => string;
    newTextValue(): DPickerColorGradientData;
}
