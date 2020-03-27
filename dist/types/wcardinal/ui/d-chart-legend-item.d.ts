import { DBase, DBaseOptions, DThemeBase } from "./d-base";
export interface DChartLegendItemOptions<THEME extends DThemeChartLegendItem> extends DBaseOptions<THEME> {
}
export interface DThemeChartLegendItem extends DThemeBase {
}
export declare class DChartLegendItem<THEME extends DThemeChartLegendItem = DThemeChartLegendItem, OPTIONS extends DChartLegendItemOptions<THEME> = DChartLegendItemOptions<THEME>> extends DBase<THEME, OPTIONS> {
    protected init(options?: OPTIONS): void;
    protected getType(): string;
}
