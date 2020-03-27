import { DChartCoordinateContainer, DChartCoordinateContainerOptions } from "./d-chart-coordinate-container";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartPlotArea } from "./d-chart-plot-area";
export declare class DChartCoordinateContainerImpl implements DChartCoordinateContainer {
    protected _x: DChartCoordinateContainerSub;
    protected _y: DChartCoordinateContainerSub;
    protected _plotArea: DChartPlotArea;
    constructor(plotArea: DChartPlotArea, options?: DChartCoordinateContainerOptions);
    get x(): DChartCoordinateContainerSub;
    get y(): DChartCoordinateContainerSub;
    get plotArea(): DChartPlotArea;
    fit(domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number): this;
    mark(domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number): this;
    blend(ratio: number): this;
}
