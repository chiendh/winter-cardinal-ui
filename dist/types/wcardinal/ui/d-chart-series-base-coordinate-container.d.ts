import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesCoordinateContainer, DChartSeriesCoordinateOptions } from "./d-chart-series-coordinate";
interface DChartSeriesBaseCoordinateContainerParent {
    container: DChartSeriesContainer | null;
}
export declare class DChartSeriesBaseCoordinateContainer implements DChartSeriesCoordinateContainer {
    protected _parent: DChartSeriesBaseCoordinateContainerParent;
    protected _coordinateIndexX: number;
    protected _coordinateIndexY: number;
    protected _coordinateIdUpdatedX: number;
    protected _coordinateIdUpdatedY: number;
    protected _coordinateTransformIdUpdatedX: number;
    protected _coordinateTransformIdUpdatedY: number;
    constructor(parent: DChartSeriesBaseCoordinateContainerParent, options?: DChartSeriesCoordinateOptions);
    get x(): DChartCoordinate | null;
    get y(): DChartCoordinate | null;
    isDirty(coordinateX: DChartCoordinate, coordinateY: DChartCoordinate): boolean;
    isTransformDirty(coordinateX: DChartCoordinate, coordinateY: DChartCoordinate): boolean;
    reset(): void;
    destroy(): void;
}
export {};
