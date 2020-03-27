import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DChartPlotArea, DChartPlotAreaOptions } from "./d-chart-plot-area";
export interface DChartOptions<THEME extends DThemeChart> extends DBaseOptions<THEME> {
    plotArea: DChartPlotAreaOptions;
}
export interface DThemeChart extends DThemeBase {
}
export declare class DChart<THEME extends DThemeChart = DThemeChart, OPTIONS extends DChartOptions<THEME> = DChartOptions<THEME>> extends DBase<THEME, OPTIONS> {
    protected _plotArea: DChartPlotArea;
    protected init(options?: OPTIONS): void;
    get plotArea(): DChartPlotArea;
    protected getType(): string;
    destroy(): void;
}
