import { DChartSeriesScalar } from "./d-chart-series-scalar";
import { DChartSeriesStroke, DChartSeriesStrokeOptions } from "./d-chart-series-stroke";
import { EShapePointsStyleOption } from "./shape/e-shape-points-styles";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
export declare class DChartSeriesStrokeImpl implements DChartSeriesStroke {
    enable: DChartSeriesScalar<boolean>;
    color: DChartSeriesScalar<number>;
    alpha: DChartSeriesScalar<number>;
    width: DChartSeriesScalar<number>;
    align: DChartSeriesScalar<number>;
    side: DChartSeriesScalar<EShapeStrokeSide>;
    style: DChartSeriesScalar<EShapePointsStyleOption>;
    constructor(options?: DChartSeriesStrokeOptions);
}
