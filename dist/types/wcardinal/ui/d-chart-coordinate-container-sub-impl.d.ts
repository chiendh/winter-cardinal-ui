import { DChartCoordinate, DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
export declare class DChartCoordinateContainerSubImpl implements DChartCoordinateContainerSub {
    protected _list: DChartCoordinate[];
    protected _direction: DChartCoordinateDirection;
    protected _container: DChartCoordinateContainer;
    constructor(container: DChartCoordinateContainer, direction: DChartCoordinateDirection);
    get container(): DChartCoordinateContainer;
    add(coordinate: DChartCoordinate, index?: number): this;
    get(index: number): DChartCoordinate | null;
    indexOf(coordinate: DChartCoordinate): number;
    remove(coordinate: DChartCoordinate): DChartCoordinate | null;
    remove(index: number): DChartCoordinate | null;
    clear(): this;
    destroy(): this;
    size(): number;
    fit(from?: number, to?: number): this;
    mark(from?: number, to?: number): this;
    blend(ratio: number): this;
}
