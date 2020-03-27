import { interaction, Point, Rectangle, Renderer } from "pixi.js";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DChart } from "./d-chart";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { DChartAxisContainerImpl } from "./d-chart-axis-container-impl";
import { DChartCoordinateContainer, DChartCoordinateContainerOptions } from "./d-chart-coordinate-container";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartSeriesContainer, DChartSeriesContainerOptions } from "./d-chart-series-container";
import { DChartSeriesContainerImpl } from "./d-chart-series-container-impl";
import { DView, DViewOptions } from "./d-view";
import { DViewImpl } from "./d-view-impl";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";
export interface DChartPlotAreaOptions<THEME extends DThemeChartPlotArea = DThemeChartPlotArea> extends DBaseOptions<THEME> {
    mask?: boolean;
    coordinate?: DChartCoordinateContainerOptions;
    series?: DChartSeriesContainerOptions;
    axis?: DChartAxisContainerOptions;
    view?: DViewOptions;
}
export interface DThemeChartPlotArea extends DThemeBase {
    isOverflowMaskEnabled(): boolean;
}
export declare class DChartPlotArea<THEME extends DThemeChartPlotArea = DThemeChartPlotArea, OPTIONS extends DChartPlotAreaOptions<THEME> = DChartPlotAreaOptions<THEME>> extends DBase<THEME, OPTIONS> {
    protected _chart: DChart;
    protected _container: DChartPlotAreaContainer;
    protected _series: DChartSeriesContainerImpl;
    protected _coordinate: DChartCoordinateContainer;
    protected _axis: DChartAxisContainerImpl;
    protected _view: DViewImpl;
    protected _isViewDirty: boolean;
    protected _isBoundsInContainerDirty: boolean;
    protected _boundsInContainer: Rectangle;
    protected _overflowMask: DBaseOverflowMask | null;
    protected _workPoint: Point;
    protected _blendStartTime: number;
    protected _blendDuration: number;
    protected _blendTimeout: number | null;
    protected _onBlendBound: () => void;
    constructor(chart: DChart, options?: OPTIONS);
    protected init(options?: OPTIONS): void;
    onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void;
    protected getOrCreateOverflowMask(): DBaseOverflowMask;
    get coordinate(): DChartCoordinateContainer;
    get chart(): DChart;
    get series(): DChartSeriesContainer;
    get container(): DChartPlotAreaContainer;
    get axis(): DChartAxisContainer;
    get view(): DView;
    onWheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point): boolean;
    onDblClick(e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager): boolean;
    protected onDown(e: interaction.InteractionEvent): void;
    render(renderer: Renderer): void;
    destroy(): void;
    protected getType(): string;
    getBoundsInContainer(): Rectangle;
    fit(duration?: number, domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number): this;
    protected onBlend(): void;
}
