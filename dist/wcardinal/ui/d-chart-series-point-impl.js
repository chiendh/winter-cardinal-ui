/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartSeriesScalars } from "./d-chart-series-scalar";
var DChartSeriesPointImpl = /** @class */ (function () {
    function DChartSeriesPointImpl(options) {
        if (options) {
            if (options.x != null) {
                this.x = DChartSeriesScalars.from(options.x, 0);
            }
            if (options.y != null) {
                this.y = DChartSeriesScalars.from(options.y, 0);
            }
        }
    }
    return DChartSeriesPointImpl;
}());
export { DChartSeriesPointImpl };
//# sourceMappingURL=d-chart-series-point-impl.js.map