import { IPoint, Point } from "pixi.js";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesBase, DChartSeriesBaseOptions } from "./d-chart-series-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { EShapeLine } from "./shape/variant/e-shape-line";
/**
 * {@link DChartSeriesLine} options.
 */
export interface DChartSeriesLineOptions extends DChartSeriesBaseOptions {
    points?: Array<number | null>;
    stroke?: DChartSeriesStrokeComputedOptions;
}
/**
 * A series represents a polyline.
 * Data points must be sorted in ascending order on the X axis.
 */
export declare class DChartSeriesLine extends DChartSeriesBase {
    protected static WORK: Point;
    protected _line: EShapeLine | null;
    protected _options?: DChartSeriesLineOptions;
    protected _points: Array<number | null>;
    protected _pointId: number;
    protected _pointIdUpdated: number;
    protected _stroke?: DChartSeriesStrokeComputed;
    protected _centerX: number;
    protected _centerY: number;
    constructor(options?: DChartSeriesLineOptions);
    bind(container: DChartSeriesContainer, index: number): void;
    unbind(): void;
    get shape(): EShapeLine | null;
    get points(): Array<number | null>;
    set points(points: Array<number | null>);
    toDirty(): void;
    update(): void;
    protected updateLine(line: EShapeLine, xcoordinate: DChartCoordinate, ycoordinate: DChartCoordinate, isPointsDirty: boolean): void;
    protected updateRegion(): void;
    destroy(): void;
    hitTest(global: IPoint): boolean;
    calcHitPoint(global: IPoint, result: DChartSeriesHitResult): boolean;
    protected toThreshold(this: unknown, strokeWidth: number, strokeScale: number): number;
    calcHitPointTestRange(this: unknown, x: number, y: number, threshold: number, values: number[], result: [number, number]): [number, number];
    calcHitPointHitTester(this: unknown, x: number, y: number, p0x: number, p0y: number, p1x: number, p1y: number, index: number, threshold: number, result: DChartSeriesHitResult): boolean;
}
