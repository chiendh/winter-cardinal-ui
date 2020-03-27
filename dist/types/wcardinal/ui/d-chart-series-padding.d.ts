import { DChartSeriesScalar } from "./d-chart-series-scalar";
export interface DChartSeriesPaddingOptions {
    outer?: number | number[] | DChartSeriesScalar<number>;
    inner?: number | number[] | DChartSeriesScalar<number>;
}
export interface DChartSeriesPadding {
    outer: DChartSeriesScalar<number>;
    inner: DChartSeriesScalar<number>;
}
