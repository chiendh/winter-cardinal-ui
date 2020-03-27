/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isNaN } from "./util/is-nan";
var DChartRegionImpl = /** @class */ (function () {
    function DChartRegionImpl(from, to) {
        this.from = from;
        this.to = to;
    }
    DChartRegionImpl.prototype.set = function (from, to) {
        if (from != null) {
            this.from = from;
        }
        if (to != null) {
            this.to = to;
        }
        return this;
    };
    DChartRegionImpl.prototype.add = function (from, to) {
        if (!isNaN(from)) {
            this.from = (isNaN(this.from) ?
                from : Math.min(this.from, from));
        }
        if (!isNaN(to)) {
            this.to = (isNaN(this.to) ?
                to : Math.max(this.to, to));
        }
        return this;
    };
    DChartRegionImpl.prototype.clear = function () {
        this.from = NaN;
        this.to = NaN;
        return this;
    };
    return DChartRegionImpl;
}());
export { DChartRegionImpl };
//# sourceMappingURL=d-chart-region-impl.js.map