import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeriesLineOfAny, DChartSeriesLineOfAnyOptions } from "./d-chart-series-line-of-any";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
/**
 * A series represents a line of triangles.
 * Data points must be sorted in ascending order on the X axis.
 */
export declare class DChartSeriesLineOfTriangles extends DChartSeriesLineOfAny {
    protected _sizeId: number;
    constructor(options?: DChartSeriesLineOfAnyOptions);
    protected newLineOfAny(): EShapeLineOfAny;
    protected applyLine(line: EShapeLineOfAny, xcoordinate: DChartCoordinate, ycoordinate: DChartCoordinate, sx: number, sy: number, cx: number, cy: number, values: number[]): void;
}
