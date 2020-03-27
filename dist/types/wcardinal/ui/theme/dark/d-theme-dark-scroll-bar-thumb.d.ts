import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBarThumb } from "../../d-scroll-bar-thumb";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkScrollBarThumb extends DThemeDarkBase implements DThemeScrollBarThumb {
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
