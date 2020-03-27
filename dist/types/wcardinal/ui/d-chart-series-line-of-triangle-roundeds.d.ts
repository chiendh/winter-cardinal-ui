import { DChartSeriesLineOfTriangles } from "./d-chart-series-line-of-triangles";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
/**
 * A series represents a line of rounded triangles.
 * Data points must be sorted in ascending order on the X axis.
 */
export declare class DChartSeriesLineOfTriangleRoundeds extends DChartSeriesLineOfTriangles {
    protected newLineOfAny(): EShapeLineOfAny;
}
