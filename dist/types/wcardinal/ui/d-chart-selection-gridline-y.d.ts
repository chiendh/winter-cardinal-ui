import { IPoint } from "pixi.js";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
export declare class DChartSelectionGridlineY extends DChartSelectionShapeBase {
    update(container: DChartSeriesContainer, mappedPosition: IPoint): void;
    protected isVisible(container: DChartSeriesContainer, mappedY: number): boolean;
    protected getType(): string;
}
