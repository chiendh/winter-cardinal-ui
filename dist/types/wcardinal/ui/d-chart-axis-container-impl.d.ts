import { DChartAxis } from "./d-chart-axis";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartPlotArea } from "./d-chart-plot-area";
import { EShapeContainer } from "./shape/e-shape-container";
export declare class DChartAxisContainerImpl implements DChartAxisContainer {
    protected _plotArea: DChartPlotArea;
    protected _container: EShapeContainer;
    protected _list: Map<DChartAxisPosition, DChartAxis[]>;
    constructor(plotArea: DChartPlotArea, options?: DChartAxisContainerOptions);
    get container(): EShapeContainer;
    get plotArea(): DChartPlotArea;
    add(axis: DChartAxis): void;
    get(position: DChartAxisPosition, index: number): DChartAxis | null;
    indexOf(axis: DChartAxis): number;
    clear(position: DChartAxisPosition): this;
    size(position: DChartAxisPosition): number;
    update(): void;
    destroy(): void;
}
