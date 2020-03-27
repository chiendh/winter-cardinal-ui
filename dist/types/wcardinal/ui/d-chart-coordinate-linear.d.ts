import { DChartCoordinate, DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartCoordinateLinearTick, DThemeChartCoordinateLinearTick } from "./d-chart-coordinate-linear-tick";
import { DChartCoordinateTransform, DThemeChartCoordinateTransform } from "./d-chart-coordinate-transform";
import { DChartCoordinateTransformMark, DChartCoordinateTransformMarkImpl } from "./d-chart-coordinate-transform-mark";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartRegion } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
export interface DThemeChartCoordinateLinear extends DThemeChartCoordinateTransform, DThemeChartCoordinateLinearTick {
}
export interface DChartCoordinateLinearOptions {
    theme?: DThemeChartCoordinateLinear;
}
export declare class DChartCoordinateLinear implements DChartCoordinate {
    protected _id: number;
    protected _transform: DChartCoordinateTransform;
    protected _container?: DChartCoordinateContainerSub;
    protected _direction: DChartCoordinateDirection;
    protected _theme: DThemeChartCoordinateLinear;
    protected _work: DChartRegionImpl;
    protected _tick: DChartCoordinateLinearTick;
    protected _mark: DChartCoordinateTransformMarkImpl;
    constructor(options?: DChartCoordinateLinearOptions);
    bind(container: DChartCoordinateContainerSub, direction: DChartCoordinateDirection): void;
    unbind(): void;
    fit(from?: number, to?: number): void;
    mark(from?: number, to?: number): void;
    blend(ratio: number): void;
    protected doFit(from: number | undefined, to: number | undefined, result: DChartCoordinateTransformMark | DChartCoordinateTransform): void;
    protected toFitDomain(from: number | undefined, to: number | undefined, plotArea: DChartPlotArea, result: DChartRegion): DChartRegion;
    protected toFitRange(from: number | undefined, to: number | undefined, plotArea: DChartPlotArea, result: DChartRegion): DChartRegion;
    protected doFit_(pixelFrom: number, pixelTo: number, region: DChartRegion, result: DChartCoordinateTransformMark | DChartCoordinateTransform): void;
    get id(): number;
    get transform(): DChartCoordinateTransform;
    map(value: number): number;
    mapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void;
    unmap(value: number): number;
    unmapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void;
    ticks(domainFrom: number, domainTo: number, majorCount: number, minorCountPerMajor: number, minorCount: number, majorResult: Float64Array, minorResult: Float64Array): void;
    protected toTheme(options?: DChartCoordinateLinearOptions): DThemeChartCoordinateLinear;
    protected getThemeDefault(): DThemeChartCoordinateLinear;
    protected getType(): string;
}
