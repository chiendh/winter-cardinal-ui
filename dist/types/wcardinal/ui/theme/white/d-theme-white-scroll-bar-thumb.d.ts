import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBarThumb } from "../../d-scroll-bar-thumb";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhiteScrollBarThumb extends DThemeWhiteBase implements DThemeScrollBarThumb {
    COLOR: number;
    getBackgroundColor(state: DBaseState): number;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlpha(state: DBaseState): number;
    getBorderWidth(state: DBaseState): number;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getMinimumSize(): number;
}
