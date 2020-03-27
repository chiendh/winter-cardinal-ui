import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeCanvasContainer } from "../../d-canvas-container";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkCanvasContainer extends DThemeDarkBase implements DThemeCanvasContainer {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getPaddingLeft(): number;
    getPaddingTop(): number;
    getPaddingRight(): number;
    getPaddingBottom(): number;
    isOverflowMaskEnabled(): boolean;
    getInteractive(): DBaseInteractive;
}
