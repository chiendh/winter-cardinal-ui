import { DBaseState } from "../../d-base-state";
import { DFontStyle, DFontVariant, DFontWeight, DThemeFont } from "../../d-font";
export declare class DThemeWhiteFont implements DThemeFont {
    getFontFamilly(): string;
    getFontSize(): number;
    getColor(state: DBaseState): number;
    getFontWeight(): DFontWeight;
    getFontStyle(): DFontStyle;
    getFontVariant(): DFontVariant;
    getAlpha(state: DBaseState): number;
    getLineHeight(): number;
    static getColor(state: DBaseState): number;
    static getAlpha(state: DBaseState): number;
}
