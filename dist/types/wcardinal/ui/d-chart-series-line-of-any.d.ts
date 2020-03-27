import { IPoint, Point } from "pixi.js";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartRegion } from "./d-chart-region";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesBase, DChartSeriesBaseOptions } from "./d-chart-series-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesFillComputed, DChartSeriesFillComputedOptions } from "./d-chart-series-fill-computed";
import { DChartSeriesPaddingComputedOptions } from "./d-chart-series-padding-computed";
import { DChartSeriesPointComputed, DChartSeriesPointComputedOptions } from "./d-chart-series-point-computed";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
/**
 * {@link DChartSeriesLineOfAny} options.
 */
export interface DChartSeriesLineOfAnyOptions extends DChartSeriesBaseOptions {
    points?: Array<number | null>;
    fill?: DChartSeriesFillComputedOptions;
    stroke?: DChartSeriesStrokeComputedOptions;
    size?: DChartSeriesPointComputedOptions;
    offset?: DChartSeriesPointComputedOptions;
    padding?: DChartSeriesPaddingComputedOptions;
}
export interface DChartSeriesLineOfAnyRegion {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
}
/**
 * A series represents a line of anything.
 * Data points must be sorted in ascending order on the X axis.
 */
export declare abstract class DChartSeriesLineOfAny extends DChartSeriesBase {
    protected static WORK: Point;
    protected static WORK_REGION?: DChartSeriesLineOfAnyRegion;
    protected _line: EShapeLineOfAny | null;
    protected _options?: DChartSeriesLineOfAnyOptions;
    protected _points: Array<number | null>;
    protected _pointId: number;
    protected _pointIdUpdated: number;
    protected _stroke?: DChartSeriesStrokeComputed;
    protected _fill?: DChartSeriesFillComputed;
    protected _size?: DChartSeriesPointComputed;
    protected _offset?: DChartSeriesPointComputed;
    constructor(options?: DChartSeriesLineOfAnyOptions);
    protected getSizeDefault(): number;
    protected getOffsetDefault(): number;
    bind(container: DChartSeriesContainer, index: number): void;
    protected initLine(line: EShapeLineOfAny, options: DChartSeriesLineOfAnyOptions | undefined, container: DChartSeriesContainer, index: number): void;
    protected abstract newLineOfAny(): EShapeLineOfAny;
    unbind(): void;
    get shape(): EShapeLineOfAny | null;
    get points(): Array<number | null>;
    set points(points: Array<number | null>);
    toDirty(): void;
    update(): void;
    protected updateLine(line: EShapeLineOfAny, xcoordinate: DChartCoordinate, ycoordinate: DChartCoordinate): void;
    protected adjustLineRegion(xmin: number, xmax: number, ymin: number, ymax: number, result: DChartSeriesLineOfAnyRegion): DChartSeriesLineOfAnyRegion;
    protected applyLine(line: EShapeLineOfAny, xcoordinate: DChartCoordinate, ycoordinate: DChartCoordinate, sx: number, sy: number, cx: number, cy: number, values: number[]): void;
    protected updateRegion(): void;
    protected calcRegion(points: Array<number | null>, domain: DChartRegion, range: DChartRegion): void;
    destroy(): void;
    hitTest(global: IPoint): boolean;
    calcHitPoint(global: IPoint, result: DChartSeriesHitResult): boolean;
    calcHitPointTestRange(this: unknown, x: number, y: number, ax: number, ay: number, ox: number, oy: number, threshold: number, values: number[], result: [number, number]): [number, number];
    calcHitPointHitTester(this: unknown, x: number, y: number, ax: number, ay: number, ox: number, oy: number, px: number, py: number, index: number, threshold: number, result: DChartSeriesHitResult): boolean;
}
