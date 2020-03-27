import { IPoint } from "pixi.js";
import { DChartSelectionGridlineContainer, DChartSelectionGridlineContainerOptions } from "./d-chart-selection-gridline-container";
import { DChartSelectionShape } from "./d-chart-selection-shape";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
export declare class DChartSelectionGridlineContainerImpl implements DChartSelectionGridlineContainer {
    protected _x: DChartSelectionShape;
    protected _y: DChartSelectionShape;
    constructor(options?: DChartSelectionGridlineContainerOptions);
    get x(): DChartSelectionShape;
    get y(): DChartSelectionShape;
    bind(container: DChartSeriesContainer): void;
    unbind(): void;
    set(container: DChartSeriesContainer, mappedPosition: IPoint, series: DChartSeries): void;
    unset(): void;
    update(container: DChartSeriesContainer, mappedPosition: IPoint): void;
}
