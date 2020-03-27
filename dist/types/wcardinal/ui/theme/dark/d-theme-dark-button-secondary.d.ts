import { DBaseState } from "../../d-base-state";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
export declare class DThemeDarkButtonSecondary extends DThemeDarkButtonBase {
    COLOR: number;
    getBackgroundColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
}
