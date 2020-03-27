/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartColorSet2 } from "./d-chart-color-set";
import { DChartSeriesScalars } from "./d-chart-series-scalar";
import { EShapeDefaults } from "./shape/e-shape-defaults";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
var DChartSeriesStrokeImpl = /** @class */ (function () {
    function DChartSeriesStrokeImpl(options) {
        this.enable = DChartSeriesScalars.from(options && options.enable, true);
        this.color = DChartSeriesScalars.from(options && options.color, DChartColorSet2);
        this.alpha = DChartSeriesScalars.from(options && options.alpha, EShapeDefaults.STROKE_ALPHA);
        this.width = DChartSeriesScalars.from(options && options.width, EShapeDefaults.STROKE_WIDTH);
        this.align = DChartSeriesScalars.from(options && options.width, EShapeDefaults.STROKE_ALIGN);
        this.side = DChartSeriesScalars.from(options && options.side, EShapeStrokeSide.ALL);
        this.style = DChartSeriesScalars.from(options && options.style, EShapePointsStyle.NON_EXPANDING_WIDTH |
            EShapePointsStyle.NON_SHRINKING_WIDTH |
            EShapePointsStyle.NON_SCALING_DOT_AND_DASH);
    }
    return DChartSeriesStrokeImpl;
}());
export { DChartSeriesStrokeImpl };
//# sourceMappingURL=d-chart-series-stroke-impl.js.map