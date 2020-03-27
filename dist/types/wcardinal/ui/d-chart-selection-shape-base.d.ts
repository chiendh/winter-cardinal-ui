import { IPoint } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DChartSelectionStyle } from "./d-chart-selection";
import { DChartSelectionShape, DChartSelectionShapeOptions, DThemeChartSelectionShape } from "./d-chart-selection-shape";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { EShape } from "./shape/e-shape";
export declare abstract class DChartSelectionShapeBase implements DChartSelectionShape {
    protected _isEnabled: boolean;
    protected _shape?: EShape;
    protected _style: DChartSelectionStyle;
    protected _state: DBaseState;
    protected _theme: DThemeChartSelectionShape;
    constructor(options?: DChartSelectionShapeOptions);
    bind(container: DChartSeriesContainer): void;
    unbind(): void;
    protected newShape(theme: DThemeChartSelectionShape): EShape;
    set(container: DChartSeriesContainer, mappedPosition: IPoint, series: DChartSeries): void;
    protected setStyle(this: unknown, shape: EShape, series: DChartSeries): void;
    unset(): void;
    abstract update(container: DChartSeriesContainer, mappedPosition: IPoint): void;
    protected toTheme(options?: DChartSelectionShapeOptions): DThemeChartSelectionShape;
    protected getTheme(type: string): DThemeChartSelectionShape;
    protected abstract getType(): string;
}
