import { DChartSeriesPoint } from "./d-chart-series-point";
import { DChartSeriesPointComputed, DChartSeriesPointComputedOptions } from "./d-chart-series-point-computed";
export declare class DChartSeriesPointComputedImpl implements DChartSeriesPointComputed {
    x: number;
    y: number;
    constructor(x: number, y: number);
    static from(base: DChartSeriesPoint, index: number, point: DChartSeriesPointComputedOptions | undefined, x: number, y: number): DChartSeriesPointComputed;
}
