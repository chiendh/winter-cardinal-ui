import { DBase, DBaseOptions, DThemeBase } from "./d-base";
export interface DChartOverviewOptions<THEME extends DThemeChartOverview> extends DBaseOptions<THEME> {
}
export interface DThemeChartOverview extends DThemeBase {
}
export declare class DChartOverview<THEME extends DThemeChartOverview = DThemeChartOverview, OPTIONS extends DChartOverviewOptions<THEME> = DChartOverviewOptions<THEME>> extends DBase<THEME, OPTIONS> {
    protected init(options?: OPTIONS): void;
    protected getType(): string;
}
