import { IPoint } from "pixi.js";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
export declare class DChartSelectionMarker extends DChartSelectionShapeBase {
    update(container: DChartSeriesContainer, mappedPosition: IPoint): void;
    protected isVisible(container: DChartSeriesContainer, mappedPosition: IPoint): boolean;
    protected getType(): string;
}
