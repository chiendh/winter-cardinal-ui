import { DBaseState } from "../../d-base-state";
import { DThemeButtonAmbient } from "../../d-button-ambient";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
export declare class DThemeWhiteButtonAmbient extends DThemeWhiteButtonBase implements DThemeButtonAmbient {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
}
