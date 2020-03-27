import { IPoint } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DChartSelectionStyle } from "./d-chart-selection";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { EShape } from "./shape/e-shape";
export interface DChartSelectionShapeOptions {
    enable?: boolean;
    shape?: EShape;
    style?: DChartSelectionStyle;
    state?: DBaseState;
    theme?: string | DThemeChartSelectionShape;
}
export interface DThemeChartSelectionShape {
    isEnabled(state: DBaseState): boolean;
    newShape(state: DBaseState): EShape;
}
export interface DChartSelectionShape {
    bind(container: DChartSeriesContainer): void;
    unbind(): void;
    set(container: DChartSeriesContainer, mappedPosition: IPoint, series: DChartSeries): void;
    unset(): void;
    update(container: DChartSeriesContainer, mappedPosition: IPoint): void;
}
