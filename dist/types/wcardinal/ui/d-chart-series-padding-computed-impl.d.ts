import { DChartSeriesPadding } from "./d-chart-series-padding";
import { DChartSeriesPaddingComputed, DChartSeriesPaddingComputedOptions } from "./d-chart-series-padding-computed";
export declare class DChartSeriesPaddingComputedImpl implements DChartSeriesPaddingComputed {
    outer: number;
    inner: number;
    constructor(outer: number, inner: number);
    static from(base: DChartSeriesPadding, index: number, point: DChartSeriesPaddingComputedOptions | undefined): DChartSeriesPaddingComputed;
}
