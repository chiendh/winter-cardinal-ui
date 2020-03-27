import { DChartRegion } from "./d-chart-region";
export declare class DChartRegionImpl implements DChartRegion {
    from: number;
    to: number;
    constructor(from: number, to: number);
    set(from?: number, to?: number): this;
    add(from: number, to: number): this;
    clear(): this;
}
