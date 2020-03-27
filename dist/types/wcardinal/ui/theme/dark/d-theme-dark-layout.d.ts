import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeLayout } from "../../d-layout";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkLayout extends DThemeDarkBase implements DThemeLayout {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getMargin(): number;
    getInteractive(): DBaseInteractive;
    getDirection(): DLayoutDirection;
    getCornerAdjust(): boolean;
    getMultiplicity(): number;
    getReverse(): boolean;
}
