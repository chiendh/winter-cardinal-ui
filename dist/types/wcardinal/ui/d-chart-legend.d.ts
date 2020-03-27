import { DBase, DBaseOptions, DThemeBase } from "./d-base";
export interface DChartLegendOptions<THEME extends DThemeChartLegend> extends DBaseOptions<THEME> {
}
export interface DThemeChartLegend extends DThemeBase {
}
export declare class DChartLegend<THEME extends DThemeChartLegend = DThemeChartLegend, OPTIONS extends DChartLegendOptions<THEME> = DChartLegendOptions<THEME>> extends DBase<THEME, OPTIONS> {
    protected init(options?: OPTIONS): void;
    protected getType(): string;
}
