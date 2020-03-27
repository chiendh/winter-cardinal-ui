import { Matrix } from "pixi.js";
import { DChartAxis } from "./d-chart-axis";
import { DChartAxisBaseOptions, DThemeChartAxisBase } from "./d-chart-axis-base-options";
import { DChartAxisBaseBar, DChartAxisBaseTickContainer } from "./d-chart-axis-base-options-parser";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartCoordinate } from "./d-chart-coordinate";
import { EShapeTextLike } from "./shape/e-shape-text";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { DeepPartial } from "./util/deep-partial";
export declare class DChartAxisBase implements DChartAxis {
    protected _coordinateIndex: number;
    protected _padding: number;
    protected _position: DChartAxisPosition;
    protected _container?: DChartAxisContainer;
    protected _bar: DChartAxisBaseBar;
    protected _index: number;
    protected _tick: DChartAxisBaseTickContainer;
    protected _majorTicks: Float64Array;
    protected _minorTicks: Float64Array;
    protected _label?: DeepPartial<EShapeTextLike>;
    protected _theme: DThemeChartAxisBase;
    constructor(options?: DChartAxisBaseOptions);
    get position(): DChartAxisPosition;
    protected updateBar(container: DChartAxisContainer): void;
    updateTicksX(domainMin: number, domainMax: number, coordinate: DChartCoordinate, majorShapes: EShapeBar[], minorShapes: EShapeBar[], gridlineShapes: EShapeBar[] | undefined, shapePositionY: number, transform: Matrix, plotAreaHeight: number): void;
    updateTicksY(domainMin: number, domainMax: number, coordinate: DChartCoordinate, majorShapes: EShapeBar[], minorShapes: EShapeBar[], gridlineShapes: EShapeBar[] | undefined, shapePositionX: number, transform: Matrix, plotAreaWidth: number): void;
    protected updateTicks(container: DChartAxisContainer): void;
    bind(container: DChartAxisContainer, index: number): void;
    unbind(): void;
    update(): void;
    destroy(): void;
    protected toTheme(options?: DChartAxisBaseOptions): DThemeChartAxisBase;
    protected getThemeDefault(): DThemeChartAxisBase;
    protected getType(): string;
}
