import { DChartSeriesFill } from "./d-chart-series-fill";
import { DChartSeriesFillComputed, DChartSeriesFillComputedOptions } from "./d-chart-series-fill-computed";
export declare class DChartSeriesFillComputedImpl implements DChartSeriesFillComputed {
    enable: boolean;
    color: number;
    alpha: number;
    constructor(enable: boolean, color: number, alpha: number);
    static from(base: DChartSeriesFill, index: number, fill?: DChartSeriesFillComputedOptions): DChartSeriesFillComputed;
}
