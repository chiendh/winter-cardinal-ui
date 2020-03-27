import { IPoint } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DChartRegionImmutable } from "./d-chart-region";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesCoordinateContainer } from "./d-chart-series-coordinate";
import { EShape } from "./shape/e-shape";
export declare class DChartSeriesHitResult {
    shape: EShape | null;
    x: number;
    y: number;
    p0x: number;
    p0y: number;
    p1x: number;
    p1y: number;
    index: number;
    t: number;
    distance: number;
    constructor();
    copyFrom(other: DChartSeriesHitResult): this;
}
export interface DChartSeries {
    readonly domain: DChartRegionImmutable;
    readonly range: DChartRegionImmutable;
    readonly shape: EShape | null;
    readonly container: DChartSeriesContainer | null;
    readonly coordinate: DChartSeriesCoordinateContainer;
    readonly index: number;
    bind(container: DChartSeriesContainer, index: number): void;
    unbind(): void;
    toDirty(): void;
    update(): void;
    destroy(): void;
    hitTest(global: IPoint): boolean;
    calcHitPoint(global: IPoint, result: DChartSeriesHitResult): boolean;
    setState(state: DBaseState, isOn: boolean): void;
}
