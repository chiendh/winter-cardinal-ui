import { DChartRegion } from "./d-chart-region";
export declare class DChartRegionImplObservable implements DChartRegion {
    protected _from: number;
    protected _to: number;
    protected _onChange: () => void;
    constructor(from: number, to: number, onChange: () => void);
    get from(): number;
    set from(from: number);
    get to(): number;
    set to(to: number);
    set(from?: number, to?: number): this;
    add(from: number, to: number): this;
    clear(): this;
}
