import { DBaseState } from "../../d-base-state";
import { DThemeChartPlotArea } from "../../d-chart-plot-area";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhiteChartPlotArea extends DThemeWhiteBase implements DThemeChartPlotArea {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getPaddingTop(): number;
    getPaddingRight(): number;
    getPaddingBottom(): number;
    getPaddingLeft(): number;
    getBorderColor(state: DBaseState): number | null;
    isOverflowMaskEnabled(): boolean;
}
