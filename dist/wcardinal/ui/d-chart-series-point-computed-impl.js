/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DChartSeriesPointComputedImpl = /** @class */ (function () {
    function DChartSeriesPointComputedImpl(x, y) {
        this.x = x;
        this.y = y;
    }
    DChartSeriesPointComputedImpl.from = function (base, index, point, x, y) {
        if (point) {
            return new DChartSeriesPointComputedImpl((point.x != null ? point.x : (base.x != null ? base.x(index) : x)), (point.y != null ? point.y : (base.y != null ? base.y(index) : y)));
        }
        else {
            return new DChartSeriesPointComputedImpl(base.x != null ? base.x(index) : x, base.y != null ? base.y(index) : y);
        }
    };
    return DChartSeriesPointComputedImpl;
}());
export { DChartSeriesPointComputedImpl };
//# sourceMappingURL=d-chart-series-point-computed-impl.js.map