import { IPoint, utils } from "pixi.js";
import { DBaseOnOptions } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DChartRegionImmutable } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesBaseCoordinateContainer } from "./d-chart-series-base-coordinate-container";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesCoordinateContainer, DChartSeriesCoordinateOptions } from "./d-chart-series-coordinate";
import { EShape } from "./shape/e-shape";
/**
 * {@link DChartSeriesBase} options.
 */
export interface DChartSeriesBaseOptions {
    coordinate?: DChartSeriesCoordinateOptions;
    on?: DBaseOnOptions;
}
/**
 * A series represents a polyline.
 */
export declare abstract class DChartSeriesBase extends utils.EventEmitter implements DChartSeries {
    protected _coordinate: DChartSeriesBaseCoordinateContainer;
    protected _container?: DChartSeriesContainer;
    protected _index: number;
    protected _domain: DChartRegionImpl;
    protected _range: DChartRegionImpl;
    protected _regionPointId: number;
    protected _state: DBaseState;
    protected _stateLocal: DBaseState;
    abstract readonly shape: EShape | null;
    constructor(options?: DChartSeriesBaseOptions);
    bind(container: DChartSeriesContainer, index: number): void;
    unbind(): void;
    abstract toDirty(): void;
    abstract update(): void;
    get domain(): DChartRegionImmutable;
    get range(): DChartRegionImmutable;
    get container(): DChartSeriesContainer | null;
    get index(): number;
    get coordinate(): DChartSeriesCoordinateContainer;
    protected abstract updateRegion(): void;
    destroy(): void;
    hitTest(global: IPoint): boolean;
    calcHitPoint(global: IPoint, result: DChartSeriesHitResult): boolean;
    setState(state: DBaseState, isOn: boolean): void;
    protected updateState(): void;
    protected mergeState(stateLocal: DBaseState, stateParent: DBaseState): DBaseState;
    protected onStateChange(newState: number, oldState: number): void;
}
