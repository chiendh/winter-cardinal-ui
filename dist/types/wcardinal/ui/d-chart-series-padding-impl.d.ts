import { DChartSeriesPadding, DChartSeriesPaddingOptions } from "./d-chart-series-padding";
import { DChartSeriesScalar } from "./d-chart-series-scalar";
export declare class DChartSeriesPaddingImpl implements DChartSeriesPadding {
    outer: DChartSeriesScalar<number>;
    inner: DChartSeriesScalar<number>;
    constructor(options: DChartSeriesPaddingOptions | undefined);
}
