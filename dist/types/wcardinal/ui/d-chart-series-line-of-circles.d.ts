import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
/**
 * A series represents a line of circles.
 * Data points must be sorted in ascending order on the X axis.
 */
export declare class DChartSeriesLineOfCircles extends DChartSeriesLineOfAny {
    protected newLineOfAny(): EShapeLineOfAny;
}
