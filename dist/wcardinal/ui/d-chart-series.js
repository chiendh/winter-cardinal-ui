/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DChartSeriesHitResult = /** @class */ (function () {
    function DChartSeriesHitResult() {
        this.shape = null;
        this.x = 0;
        this.y = 0;
        this.p0x = 0;
        this.p0y = 0;
        this.p1x = 0;
        this.p1y = 0;
        this.index = 0;
        this.t = 0;
        this.distance = 0;
    }
    DChartSeriesHitResult.prototype.copyFrom = function (other) {
        this.shape = other.shape;
        this.x = other.x;
        this.y = other.y;
        this.p0x = other.p0x;
        this.p0y = other.p0y;
        this.p1x = other.p1x;
        this.p1y = other.p1y;
        this.index = other.index;
        this.t = other.t;
        this.distance = other.distance;
        return this;
    };
    return DChartSeriesHitResult;
}());
export { DChartSeriesHitResult };
//# sourceMappingURL=d-chart-series.js.map