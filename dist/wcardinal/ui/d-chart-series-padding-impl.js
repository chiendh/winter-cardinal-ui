/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartSeriesScalars } from "./d-chart-series-scalar";
var DChartSeriesPaddingImpl = /** @class */ (function () {
    function DChartSeriesPaddingImpl(options) {
        this.outer = DChartSeriesScalars.from(options && options.outer, 0.2);
        this.inner = DChartSeriesScalars.from(options && options.inner, 0.1);
    }
    return DChartSeriesPaddingImpl;
}());
export { DChartSeriesPaddingImpl };
//# sourceMappingURL=d-chart-series-padding-impl.js.map