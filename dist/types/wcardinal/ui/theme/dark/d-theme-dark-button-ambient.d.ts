import { DBaseState } from "../../d-base-state";
import { DThemeButtonAmbient } from "../../d-button-ambient";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
export declare class DThemeDarkButtonAmbient extends DThemeDarkButtonBase implements DThemeButtonAmbient {
    COLOR: number;
    getBackgroundColor(state: DBaseState): number | null;
}
