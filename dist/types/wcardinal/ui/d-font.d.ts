import { DBaseState } from "./d-base-state";
export declare type DFontStyle = "normal" | "italic";
export declare type DFontWeight = "normal" | "bold" | "bolder" | "lighter" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "800";
export declare type DFontVariant = "normal" | "small-caps";
export interface DThemeFont {
    getFontFamilly(): string;
    getFontSize(): number;
    getFontWeight(): DFontWeight;
    getFontStyle(): DFontStyle;
    getFontVariant(): DFontVariant;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
    getLineHeight(): number;
}
