import { Texture } from "pixi.js";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemePickerColorGradient } from "../../d-picker-color-gradient";
import { DPickerColorGradientDataLike } from "../../d-picker-color-gradient-data";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhitePickerColorGradient extends DThemeWhiteBase implements DThemePickerColorGradient {
    getGradientPointsWidth(): number;
    getGradientPointsMargin(): number;
    getGradientAnchorTexture(): Texture;
    getGradientAnchorOutlinedTexture(): Texture;
    getGradientAnchorOutlineTexture(): Texture;
    getGradientDirectionMargin(): number;
    getGradientDirectionTexture(): Texture;
    getGradientRecentColumn(): number;
    getGradientRecentWidth(): number;
    getGradientRecentMargin(): number;
    getGradientRecentCount(): number;
    getGradientRecents(): DPickerColorGradientDataLike[];
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getInteractive(): DBaseInteractive;
}
