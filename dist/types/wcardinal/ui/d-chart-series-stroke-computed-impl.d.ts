import { DChartSeriesStroke } from "./d-chart-series-stroke";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
export declare class DChartSeriesStrokeComputedImpl implements DChartSeriesStrokeComputed {
    enable: boolean;
    color: number;
    alpha: number;
    width: number;
    align: number;
    side: EShapeStrokeSide;
    style: EShapePointsStyle;
    constructor(enable: boolean, color: number, alpha: number, width: number, align: number, side: EShapeStrokeSide, style: EShapePointsStyle);
    static from(base: DChartSeriesStroke, index: number, stroke?: DChartSeriesStrokeComputedOptions): DChartSeriesStrokeComputed;
}
