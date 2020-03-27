import { DChartSeriesPoint, DChartSeriesPointOptions } from "./d-chart-series-point";
import { DChartSeriesScalar } from "./d-chart-series-scalar";
export declare class DChartSeriesPointImpl implements DChartSeriesPoint {
    x?: DChartSeriesScalar<number>;
    y?: DChartSeriesScalar<number>;
    constructor(options: DChartSeriesPointOptions | undefined);
}
