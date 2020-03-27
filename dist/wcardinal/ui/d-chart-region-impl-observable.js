/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isNaN } from "./util/is-nan";
var DChartRegionImplObservable = /** @class */ (function () {
    function DChartRegionImplObservable(from, to, onChange) {
        this._from = from;
        this._to = to;
        this._onChange = onChange;
    }
    Object.defineProperty(DChartRegionImplObservable.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (from) {
            this.set(from, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartRegionImplObservable.prototype, "to", {
        get: function () {
            return this._to;
        },
        set: function (to) {
            this.set(undefined, to);
        },
        enumerable: true,
        configurable: true
    });
    DChartRegionImplObservable.prototype.set = function (from, to) {
        var isChanged = false;
        if (from != null && this._from !== from) {
            if (!isNaN(this._from) || !isNaN(from)) {
                this._from = from;
                isChanged = true;
            }
        }
        if (to != null && this._to !== to) {
            if (!isNaN(this._to) || !isNaN(to)) {
                this._to = to;
                isChanged = true;
            }
        }
        if (isChanged) {
            this._onChange();
        }
        return this;
    };
    DChartRegionImplObservable.prototype.add = function (from, to) {
        var newFrom;
        if (!isNaN(from)) {
            newFrom = (isNaN(this.from) ?
                from : Math.min(this.from, from));
        }
        var newTo;
        if (!isNaN(to)) {
            newTo = (isNaN(this.to) ?
                to : Math.max(this.to, to));
        }
        return this.set(newFrom, newTo);
    };
    DChartRegionImplObservable.prototype.clear = function () {
        return this.set(NaN, NaN);
    };
    return DChartRegionImplObservable;
}());
export { DChartRegionImplObservable };
//# sourceMappingURL=d-chart-region-impl-observable.js.map