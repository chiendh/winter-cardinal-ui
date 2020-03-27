import { DChartCoordinate } from "./d-chart-coordinate";
export interface DThemeChartCoordinateLogTick {
    toStepScale(scale: number): number;
}
export declare class DChartCoordinateLogTick {
    protected _theme: DThemeChartCoordinateLogTick;
    constructor(theme: DThemeChartCoordinateLogTick);
    protected calcStepMajor(domainMin: number, domainMax: number, count: number): number;
    protected calcStepMinor(step: number, minorCount: number): number;
    protected calcTickMinorPositions(step: number, count: number, majorPosition: number, rangeMin: number, rangeMax: number, iresult: number, result: Float64Array): void;
    calculate(domainFrom: number, domainTo: number, majorCount: number, minorCountPerMajor: number, minorCount: number, majorResult: Float64Array, minorResult: Float64Array, coordinate: DChartCoordinate): void;
}
