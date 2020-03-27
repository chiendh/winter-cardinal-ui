/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesFillComputedImpl } from "./d-chart-series-fill-computed-impl";
import { DChartSeriesFillImpl } from "./d-chart-series-fill-impl";
import { DChartSeriesPaddingComputedImpl } from "./d-chart-series-padding-computed-impl";
import { DChartSeriesPaddingImpl } from "./d-chart-series-padding-impl";
import { DChartSeriesPointComputedImpl } from "./d-chart-series-point-computed-impl";
import { DChartSeriesPointImpl } from "./d-chart-series-point-impl";
import { DChartSeriesStrokeComputedImpl } from "./d-chart-series-stroke-computed-impl";
import { DChartSeriesStrokeImpl } from "./d-chart-series-stroke-impl";
var DChartSeriesContainerImpl = /** @class */ (function () {
    function DChartSeriesContainerImpl(plotArea, options) {
        this._plotArea = plotArea;
        this._domain = new DChartRegionImpl(NaN, NaN);
        this._range = new DChartRegionImpl(NaN, NaN);
        this._selection = (options && options.selection) || null;
        this._fill = new DChartSeriesFillImpl(options && options.fill);
        this._stroke = new DChartSeriesStrokeImpl(options && options.stroke);
        this._size = new DChartSeriesPointImpl(options && options.size);
        this._offset = new DChartSeriesPointImpl(options && options.offset);
        this._padding = new DChartSeriesPaddingImpl(options && options.padding);
        this._list = [];
        var list = options && options.list;
        if (list) {
            var listLength = list.length;
            if (0 < listLength) {
                for (var i = 0; i < listLength; ++i) {
                    this.add(list[i]);
                }
                this.update();
            }
        }
    }
    DChartSeriesContainerImpl.prototype.newFill = function (index, options) {
        return DChartSeriesFillComputedImpl.from(this._fill, index, options);
    };
    DChartSeriesContainerImpl.prototype.newStroke = function (index, options) {
        return DChartSeriesStrokeComputedImpl.from(this._stroke, index, options);
    };
    DChartSeriesContainerImpl.prototype.newSize = function (index, options, x, y) {
        return DChartSeriesPointComputedImpl.from(this._size, index, options, x, y);
    };
    DChartSeriesContainerImpl.prototype.newOffset = function (index, options, x, y) {
        return DChartSeriesPointComputedImpl.from(this._offset, index, options, x, y);
    };
    DChartSeriesContainerImpl.prototype.newPadding = function (index, options) {
        return DChartSeriesPaddingComputedImpl.from(this._padding, index, options);
    };
    Object.defineProperty(DChartSeriesContainerImpl.prototype, "plotArea", {
        get: function () {
            return this._plotArea;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesContainerImpl.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    DChartSeriesContainerImpl.prototype.update = function () {
        var list = this._list;
        for (var i = 0, imax = list.length; i < imax; ++i) {
            list[i].update();
        }
        var selection = this._selection;
        if (selection) {
            selection.update();
        }
    };
    DChartSeriesContainerImpl.prototype.add = function (series) {
        var list = this._list;
        series.bind(this, list.length);
        list.push(series);
    };
    DChartSeriesContainerImpl.prototype.get = function (index) {
        var list = this._list;
        if (0 <= index && index < list.length) {
            return list[index];
        }
        return null;
    };
    DChartSeriesContainerImpl.prototype.indexOf = function (series) {
        return this._list.indexOf(series);
    };
    DChartSeriesContainerImpl.prototype.clear = function () {
        var list = this._list;
        for (var i = 0, imax = list.length; i < imax; ++i) {
            list[i].destroy();
        }
        list.length = 0;
        return this;
    };
    DChartSeriesContainerImpl.prototype.size = function () {
        return this._list.length;
    };
    DChartSeriesContainerImpl.prototype.destroy = function () {
        this.clear();
        var selection = this._selection;
        if (selection) {
            selection.unbind();
        }
    };
    DChartSeriesContainerImpl.prototype.getDomain = function (coordinate, result) {
        result.clear();
        var list = this._list;
        for (var i = 0, imax = list.length; i < imax; ++i) {
            var series = list[i];
            if (series.coordinate.x === coordinate) {
                var domain = series.domain;
                result.add(domain.from, domain.to);
            }
        }
        return result;
    };
    DChartSeriesContainerImpl.prototype.getRange = function (coordinate, result) {
        result.clear();
        var list = this._list;
        for (var i = 0, imax = list.length; i < imax; ++i) {
            var series = list[i];
            if (series.coordinate.y === coordinate) {
                var range = series.range;
                result.add(range.from, range.to);
            }
        }
        return result;
    };
    Object.defineProperty(DChartSeriesContainerImpl.prototype, "domain", {
        get: function () {
            var result = this._domain;
            result.clear();
            var list = this._list;
            for (var i = 0, imax = list.length; i < imax; ++i) {
                var domain = list[i].domain;
                result.add(domain.from, domain.to);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesContainerImpl.prototype, "range", {
        get: function () {
            var result = this._range;
            result.clear();
            var list = this._list;
            for (var i = 0, imax = list.length; i < imax; ++i) {
                var range = list[i].range;
                result.add(range.from, range.to);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    DChartSeriesContainerImpl.prototype.hitTest = function (global) {
        var list = this._list;
        for (var i = list.length - 1; 0 <= i; --i) {
            var series = list[i];
            if (series.hitTest(global)) {
                return series;
            }
        }
        return null;
    };
    DChartSeriesContainerImpl.prototype.calcHitPoint = function (global, result) {
        var tmp1 = result;
        var tmp2 = DChartSeriesContainerImpl.WORK_CALCHITPOINT;
        var list = this._list;
        var closest = null;
        tmp2.distance = +Infinity;
        for (var i = list.length - 1; 0 <= i; --i) {
            var series = list[i];
            if (series.calcHitPoint(global, tmp1)) {
                if (tmp1.distance < tmp2.distance) {
                    closest = series;
                    var tmp = tmp1;
                    tmp1 = tmp2;
                    tmp2 = tmp;
                }
            }
        }
        if (closest && tmp2 !== result) {
            result.copyFrom(tmp2);
        }
        return closest;
    };
    DChartSeriesContainerImpl.WORK_CALCHITPOINT = new DChartSeriesHitResult();
    return DChartSeriesContainerImpl;
}());
export { DChartSeriesContainerImpl };
//# sourceMappingURL=d-chart-series-container-impl.js.map