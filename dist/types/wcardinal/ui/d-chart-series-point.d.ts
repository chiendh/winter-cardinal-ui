import { DChartSeriesScalar } from "./d-chart-series-scalar";
export interface DChartSeriesPointOptions {
    x?: number | number[] | DChartSeriesScalar<number>;
    y?: number | number[] | DChartSeriesScalar<number>;
}
export interface DChartSeriesPoint {
    x?: DChartSeriesScalar<number>;
    y?: DChartSeriesScalar<number>;
}
