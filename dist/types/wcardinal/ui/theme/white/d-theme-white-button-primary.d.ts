import { DBaseState } from "../../d-base-state";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
export declare class DThemeWhiteButtonPrimary extends DThemeWhiteButtonBase {
    COLOR: number;
    COLOR_HOVERED: number;
    COLOR_PRESSED: number;
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
}
