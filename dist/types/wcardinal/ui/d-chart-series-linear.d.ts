import { IPoint, Point } from "pixi.js";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesBase, DChartSeriesBaseOptions } from "./d-chart-series-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesLinearParameters, DChartSeriesLinearParametersOptions } from "./d-chart-series-linear-parameters";
import { DChartSeriesExpressionParametersImpl } from "./d-chart-series-linear-parameters-impl";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { EShapeLine } from "./shape/variant/e-shape-line";
/**
 * {@link DChartSeriesLinear} options.
 */
export interface DChartSeriesLinearOptions extends DChartSeriesLinearParametersOptions, DChartSeriesBaseOptions {
    stroke?: DChartSeriesStrokeComputedOptions;
}
/**
 * A series represents a linear equation `a (x - x0) === b (y - y0)`.
 */
export declare class DChartSeriesLinear extends DChartSeriesBase {
    protected static WORK: Point;
    protected _line: EShapeLine | null;
    protected _options?: DChartSeriesLinearOptions;
    protected _plotAreaSizeXUpdated: number;
    protected _plotAreaSizeYUpdated: number;
    protected _parameters: DChartSeriesExpressionParametersImpl;
    protected _stroke?: DChartSeriesStrokeComputed;
    constructor(options?: DChartSeriesLinearOptions);
    bind(container: DChartSeriesContainer, index: number): void;
    unbind(): void;
    get shape(): EShapeLine | null;
    get parameters(): DChartSeriesLinearParameters;
    toDirty(): void;
    update(): void;
    protected updateLine(line: EShapeLine, xcoordinate: DChartCoordinate, ycoordinate: DChartCoordinate, plotAreaSizeX: number, plotAreaSizeY: number): void;
    protected updateRegion(): void;
    destroy(): void;
    hitTest(global: IPoint): boolean;
    calcHitPoint(global: IPoint, result: DChartSeriesHitResult): boolean;
    protected toThreshold(this: unknown, strokeWidth: number, strokeScale: number): number;
    calcHitPointHitTester(this: unknown, x: number, y: number, p0x: number, p0y: number, p1x: number, p1y: number, index: number, threshold: number, result: DChartSeriesHitResult): boolean;
    protected onStateChange(newState: number, oldState: number): void;
}
