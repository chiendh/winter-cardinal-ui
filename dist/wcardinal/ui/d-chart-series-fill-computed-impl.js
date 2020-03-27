/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DChartSeriesFillComputedImpl = /** @class */ (function () {
    function DChartSeriesFillComputedImpl(enable, color, alpha) {
        this.enable = enable;
        this.color = color;
        this.alpha = alpha;
    }
    DChartSeriesFillComputedImpl.from = function (base, index, fill) {
        if (fill) {
            return new DChartSeriesFillComputedImpl((fill.enable != null ? fill.enable : base.enable(index)), (fill.color != null ? fill.color : base.color(index)), (fill.alpha != null ? fill.alpha : base.alpha(index)));
        }
        else {
            return new DChartSeriesFillComputedImpl(base.enable(index), base.color(index), base.alpha(index));
        }
    };
    return DChartSeriesFillComputedImpl;
}());
export { DChartSeriesFillComputedImpl };
//# sourceMappingURL=d-chart-series-fill-computed-impl.js.map