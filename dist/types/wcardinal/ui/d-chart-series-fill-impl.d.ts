import { DChartSeriesFill, DChartSeriesFillOptions } from "./d-chart-series-fill";
import { DChartSeriesScalar } from "./d-chart-series-scalar";
export declare class DChartSeriesFillImpl implements DChartSeriesFill {
    enable: DChartSeriesScalar<boolean>;
    color: DChartSeriesScalar<number>;
    alpha: DChartSeriesScalar<number>;
    constructor(options?: DChartSeriesFillOptions);
}
