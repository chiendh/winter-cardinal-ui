/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartColorSet2 } from "./d-chart-color-set";
import { DChartSeriesScalars } from "./d-chart-series-scalar";
import { EShapeDefaults } from "./shape/e-shape-defaults";
var DChartSeriesFillImpl = /** @class */ (function () {
    function DChartSeriesFillImpl(options) {
        this.enable = DChartSeriesScalars.from(options && options.enable, true);
        this.color = DChartSeriesScalars.from(options && options.color, DChartColorSet2);
        this.alpha = DChartSeriesScalars.from(options && options.alpha, EShapeDefaults.FILL_ALPHA);
    }
    return DChartSeriesFillImpl;
}());
export { DChartSeriesFillImpl };
//# sourceMappingURL=d-chart-series-fill-impl.js.map