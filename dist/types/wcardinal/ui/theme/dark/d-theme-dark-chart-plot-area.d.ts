import { DBaseState } from "../../d-base-state";
import { DThemeChartPlotArea } from "../../d-chart-plot-area";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkChartPlotArea extends DThemeDarkBase implements DThemeChartPlotArea {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getPaddingTop(): number;
    getPaddingRight(): number;
    getPaddingBottom(): number;
    getPaddingLeft(): number;
    getBorderColor(state: DBaseState): number | null;
    isOverflowMaskEnabled(): boolean;
}
