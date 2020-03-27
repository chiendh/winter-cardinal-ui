import { DChartSeriesLinearParameters, DChartSeriesLinearParametersOptions } from "./d-chart-series-linear-parameters";
export declare class DChartSeriesExpressionParametersImpl implements DChartSeriesLinearParameters {
    protected _id: number;
    protected _idUpdated: number;
    protected _a: number;
    protected _b: number;
    protected _x0: number;
    protected _y0: number;
    constructor(a: number, b: number, x0: number, y0: number);
    get a(): number;
    set a(a: number);
    get b(): number;
    set b(b: number);
    get x0(): number;
    set x0(x0: number);
    get y0(): number;
    set y0(y0: number);
    toDirty(): void;
    isDirty(): boolean;
    toClean(): void;
    static from(options?: DChartSeriesLinearParametersOptions): DChartSeriesExpressionParametersImpl;
}
