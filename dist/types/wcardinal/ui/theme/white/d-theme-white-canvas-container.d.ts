import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeCanvasContainer } from "../../d-canvas-container";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhiteCanvasContainer extends DThemeWhiteBase implements DThemeCanvasContainer {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getPaddingLeft(): number;
    getPaddingTop(): number;
    getPaddingRight(): number;
    getPaddingBottom(): number;
    isOverflowMaskEnabled(): boolean;
    getInteractive(): DBaseInteractive;
    getCornerMask(): DCornerMask;
}
