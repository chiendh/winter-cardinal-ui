/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DChartSeriesPaddingComputedImpl = /** @class */ (function () {
    function DChartSeriesPaddingComputedImpl(outer, inner) {
        this.outer = outer;
        this.inner = inner;
    }
    DChartSeriesPaddingComputedImpl.from = function (base, index, point) {
        if (point) {
            return new DChartSeriesPaddingComputedImpl((point.outer != null ? point.outer : base.outer(index)), (point.inner != null ? point.inner : base.inner(index)));
        }
        else {
            return new DChartSeriesPaddingComputedImpl(base.outer(index), base.inner(index));
        }
    };
    return DChartSeriesPaddingComputedImpl;
}());
export { DChartSeriesPaddingComputedImpl };
//# sourceMappingURL=d-chart-series-padding-computed-impl.js.map