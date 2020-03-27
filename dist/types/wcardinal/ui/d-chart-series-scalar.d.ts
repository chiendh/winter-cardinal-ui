export declare type DChartSeriesScalar<T> = (index: number) => T;
export declare class DChartSeriesScalars {
    static from<T>(value: T | T[] | DChartSeriesScalar<T> | undefined, def: T | T[] | DChartSeriesScalar<T>): DChartSeriesScalar<T>;
}
