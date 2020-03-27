import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
export declare class DThemeWhiteTableBodyCells {
    static readonly IMAGE_TINT_COLOR_FOCUSED: number;
    static readonly BACKGROUND_COLOR_EVEN = 16777215;
    static readonly BACKGROUND_COLOR_ODD: number;
    static readonly WEAK_STRONG_HIGHLIGHT_COLOR: number;
    static getBackgroundColor(state: DBaseState): number | null;
    static getBackgroundAlpha(state: DBaseState): number;
    static getBorderColor(state: DBaseState): number | null;
    static getBorderAlign(state: DBaseState): number;
    static getBorderMask(state: DBaseState): DBorderMask;
    static getColor(state: DBaseState): number;
    static getAlpha(state: DBaseState): number;
    static getImageTintColor(state: DBaseState): number | null;
    static getOutlineAlign(state: DBaseState): number;
    static getHeight(): DCoordinateSize;
    static getCornerMask(): DCornerMask;
}
