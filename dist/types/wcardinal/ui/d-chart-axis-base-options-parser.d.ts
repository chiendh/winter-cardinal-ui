import { DChartAxisBaseOptions, DChartAxisBaseTickContainerOptions, DChartAxisBaseTickMajorGridlineOptions, DChartAxisBaseTickMajorOptions, DChartAxisBaseTickMajorTextOptions, DThemeChartAxisBase } from "./d-chart-axis-base-options";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxisTickPosition } from "./d-chart-axis-tick-position";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapePointsStyleOption } from "./shape/e-shape-points-styles";
import { EShapeStrokeLike } from "./shape/e-shape-stroke";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeTextLike } from "./shape/e-shape-text";
import { EShapeTextAlignLike } from "./shape/e-shape-text-align";
import { EShapeTextDirection } from "./shape/e-shape-text-direction";
import { EShapeTextOffsetLike } from "./shape/e-shape-text-offset";
import { EShapeTextOutlineLike } from "./shape/e-shape-text-outline";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { DeepPartial } from "./util/deep-partial";
import { NumberFormatter } from "./util/number-formatter";
export interface DChartAxisBaseGridline {
    enable: boolean;
    style: EShapePointsStyle;
    stroke?: Partial<EShapeStrokeLike>;
    shapes?: EShapeBar[];
}
export interface DChartAxisBaseTickMajor {
    count: number;
    size: number;
    position: EShapeBarPosition;
    style: EShapePointsStyle;
    stroke?: Partial<EShapeStrokeLike>;
    text?: DChartAxisBaseTickMajorTextOptions;
    formatter: NumberFormatter;
    shapes?: EShapeBar[];
    gridline: DChartAxisBaseGridline;
}
export interface DChartAxisBaseTickMinor {
    count: number;
    size: number;
    position: EShapeBarPosition;
    style: EShapePointsStyle;
    stroke?: Partial<EShapeStrokeLike>;
    shapes?: EShapeBar[];
}
export interface DChartAxisBaseBar {
    style: EShapePointsStyle;
    stroke?: Partial<EShapeStrokeLike>;
    shape?: EShapeBar;
}
export interface DChartAxisBaseTickContainer {
    enable: boolean;
    major: DChartAxisBaseTickMajor;
    minor: DChartAxisBaseTickMinor;
}
export declare class DChartAxisBaseOptionParser {
    protected _coordinateIndex: number;
    protected _position: DChartAxisPosition;
    protected _tick: DChartAxisBaseTickContainer;
    protected _label: DeepPartial<EShapeTextLike> | undefined;
    protected _padding: number;
    protected _bar: DChartAxisBaseBar;
    constructor(theme: DThemeChartAxisBase, options?: DChartAxisBaseOptions);
    get coordinateIndex(): number;
    get padding(): number;
    get position(): DChartAxisPosition;
    get bar(): DChartAxisBaseBar;
    get tick(): DChartAxisBaseTickContainer;
    get label(): DeepPartial<EShapeTextLike> | undefined;
    protected toPosition(theme: DThemeChartAxisBase, options?: DChartAxisBaseOptions): DChartAxisPosition;
    protected toBar(theme: DThemeChartAxisBase, options?: DChartAxisBaseOptions): DChartAxisBaseBar;
    protected toTickContainer(theme: DThemeChartAxisBase, options?: DChartAxisBaseOptions): DChartAxisBaseTickContainer;
    protected toTickMajor(theme: DThemeChartAxisBase, options?: DChartAxisBaseTickContainerOptions): DChartAxisBaseTickMajor;
    protected toTickMajorGridline(theme: DThemeChartAxisBase, options: DChartAxisBaseTickMajorGridlineOptions | undefined, optionsStyle: EShapePointsStyleOption | undefined, optionsStroke: Partial<EShapeStrokeLike> | undefined): DChartAxisBaseGridline;
    protected toTickPosition(tickPosition: DChartAxisTickPosition | keyof typeof DChartAxisTickPosition): EShapeBarPosition;
    protected toMinorTick(theme: DThemeChartAxisBase, options?: DChartAxisBaseTickContainerOptions): DChartAxisBaseTickMinor;
    protected toBarStroke(theme: DThemeChartAxisBase, options?: Partial<EShapeStrokeLike>): EShapeStrokeLike;
    protected toTickMajorStroke(theme: DThemeChartAxisBase, optionsA?: Partial<EShapeStrokeLike>, optionsB?: Partial<EShapeStrokeLike>): EShapeStrokeLike;
    protected toTickMajorGridlineStroke(theme: DThemeChartAxisBase, optionsA?: Partial<EShapeStrokeLike>, optionsB?: Partial<EShapeStrokeLike>): EShapeStrokeLike;
    protected toTickMinorStroke(theme: DThemeChartAxisBase, optionsA?: Partial<EShapeStrokeLike>, optionsB?: Partial<EShapeStrokeLike>): EShapeStrokeLike;
    protected toStroke(optionsA: Partial<EShapeStrokeLike> | undefined, optionsB: Partial<EShapeStrokeLike> | undefined, enable: boolean, color: number, alpha: number, width: number, align: number, side: EShapeStrokeSide): EShapeStrokeLike;
    protected toMajorTickFormatter(theme: DThemeChartAxisBase, options?: DChartAxisBaseTickMajorOptions): NumberFormatter;
    protected toMajorTickText(theme: DThemeChartAxisBase, options?: DChartAxisBaseTickMajorTextOptions): DChartAxisBaseTickMajorTextOptions | undefined;
    protected toMajorTickTextOutline(theme: DThemeChartAxisBase, options?: Partial<EShapeTextOutlineLike>): Partial<EShapeTextOutlineLike> | undefined;
    protected toMajorTickTextAlign(theme: DThemeChartAxisBase, options?: Partial<EShapeTextAlignLike>): Partial<EShapeTextAlignLike> | undefined;
    protected toMajorTickTextOffset(theme: DThemeChartAxisBase, options?: Partial<EShapeTextOffsetLike>): Partial<EShapeTextOffsetLike> | undefined;
    protected toMajorTickTextSpacing(theme: DThemeChartAxisBase, options?: Partial<EShapeTextOffsetLike>): Partial<EShapeTextOffsetLike> | undefined;
    protected toMajorTickTextPadding(theme: DThemeChartAxisBase, options?: Partial<EShapeTextOffsetLike>): Partial<EShapeTextOffsetLike>;
    protected toTickMajorTextDirection(theme: DThemeChartAxisBase, options?: EShapeTextDirection): EShapeTextDirection;
    protected toMajorTickTextColor(theme: DThemeChartAxisBase, options?: number): number;
    protected toLabel(theme: DThemeChartAxisBase, options?: DChartAxisBaseOptions): DeepPartial<EShapeTextLike> | undefined;
    protected toLabelOutline(theme: DThemeChartAxisBase, options?: Partial<EShapeTextOutlineLike>): Partial<EShapeTextOutlineLike> | undefined;
    protected toLabelAlign(theme: DThemeChartAxisBase, options?: Partial<EShapeTextAlignLike>): Partial<EShapeTextAlignLike> | undefined;
    protected toLabelOffset(theme: DThemeChartAxisBase, options?: Partial<EShapeTextOffsetLike>): Partial<EShapeTextOffsetLike> | undefined;
    protected toLabelSpacing(theme: DThemeChartAxisBase, options?: Partial<EShapeTextOffsetLike>): Partial<EShapeTextOffsetLike> | undefined;
    protected toLabelPadding(theme: DThemeChartAxisBase, options?: Partial<EShapeTextOffsetLike>): Partial<EShapeTextOffsetLike>;
    protected toLabelDirection(theme: DThemeChartAxisBase, options?: EShapeTextDirection): EShapeTextDirection;
    protected toLabelColor(theme: DThemeChartAxisBase, options?: number): number;
}
