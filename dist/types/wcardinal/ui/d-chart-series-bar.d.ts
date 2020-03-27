import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartRegion } from "./d-chart-region";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesLineOfAny, DChartSeriesLineOfAnyOptions, DChartSeriesLineOfAnyRegion } from "./d-chart-series-line-of-any";
import { DChartSeriesPaddingComputed } from "./d-chart-series-padding-computed";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
/**
 * A series represents bars.
 * Data points must be sorted in ascending order on the X axis.
 */
export declare class DChartSeriesBar extends DChartSeriesLineOfAny {
    protected _barCount: number;
    protected _barIndex: number;
    protected _xcoordinateId: number;
    protected _xcoordinateTransformId: number;
    protected _padding?: DChartSeriesPaddingComputed;
    constructor(options?: DChartSeriesLineOfAnyOptions);
    bind(container: DChartSeriesContainer, index: number): void;
    protected initLine(line: EShapeLineOfAny, options: DChartSeriesLineOfAnyOptions | undefined, container: DChartSeriesContainer, index: number): void;
    protected newLineOfAny(): EShapeLineOfAny;
    protected getSizeDefault(): number;
    protected adjustLineRegion(xmin: number, xmax: number, ymin: number, ymax: number, result: DChartSeriesLineOfAnyRegion): DChartSeriesLineOfAnyRegion;
    protected updateBarCountAndIndex(): boolean;
    protected applyLine(line: EShapeLineOfAny, xcoordinate: DChartCoordinate, ycoordinate: DChartCoordinate, sx: number, sy: number, cx: number, cy: number, values: number[]): void;
    protected calcRegion(points: Array<number | null>, domain: DChartRegion, range: DChartRegion): void;
}
