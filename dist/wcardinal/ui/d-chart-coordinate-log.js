/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateLogTick } from "./d-chart-coordinate-log-tick";
import { DChartCoordinateTransformImpl } from "./d-chart-coordinate-transform-impl";
import { DChartCoordinateTransformMarkImpl } from "./d-chart-coordinate-transform-mark";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DThemes } from "./theme/d-themes";
import { isNaN } from "./util/is-nan";
var DChartCoordinateLog = /** @class */ (function () {
    function DChartCoordinateLog(options) {
        this._id = 0;
        this._direction = DChartCoordinateDirection.X;
        var theme = this.toTheme(options);
        this._theme = theme;
        this._transform = new DChartCoordinateTransformImpl(theme);
        this._tick = new DChartCoordinateLogTick(theme);
        this._work = new DChartRegionImpl(NaN, NaN);
        this._mark = new DChartCoordinateTransformMarkImpl();
    }
    DChartCoordinateLog.prototype.bind = function (container, direction) {
        this._container = container;
        this._direction = direction;
    };
    DChartCoordinateLog.prototype.unbind = function () {
        this._container = undefined;
    };
    DChartCoordinateLog.prototype.fit = function (from, to) {
        this.doFit(from, to, this._transform);
    };
    DChartCoordinateLog.prototype.mark = function (from, to) {
        var mark = this._mark;
        var transform = this._transform;
        mark.oldTranslate = transform.translate;
        mark.oldScale = transform.scale;
        this.doFit(from, to, mark);
    };
    DChartCoordinateLog.prototype.blend = function (ratio) {
        this._transform.blend(ratio, this._mark);
    };
    DChartCoordinateLog.prototype.doFit = function (from, to, result) {
        var container = this._container;
        if (container) {
            var plotArea = container.container.plotArea;
            var padding = plotArea.padding;
            var work = this._work;
            switch (this._direction) {
                case DChartCoordinateDirection.X:
                    this.doFit_(padding.getLeft(), plotArea.width - padding.getRight(), this.toFitDomain(from, to, plotArea, work), result);
                    break;
                case DChartCoordinateDirection.Y:
                    this.doFit_(plotArea.height - padding.getBottom(), padding.getTop(), this.toFitRange(from, to, plotArea, work), result);
                    break;
            }
        }
    };
    DChartCoordinateLog.prototype.toFitDomain = function (from, to, plotArea, result) {
        if (from != null && to != null) {
            result.set(from, to);
        }
        else {
            plotArea.series.getDomain(this, result);
            result.set(from, to);
        }
        return result;
    };
    DChartCoordinateLog.prototype.toFitRange = function (from, to, plotArea, result) {
        if (from != null && to != null) {
            result.set(from, to);
        }
        else {
            plotArea.series.getRange(this, result);
            result.set(from, to);
        }
        return result;
    };
    DChartCoordinateLog.prototype.doFit_ = function (pixelFrom, pixelTo, region, result) {
        var regionFrom = region.from;
        var regionTo = region.to;
        if (!(isNaN(regionFrom) || isNaN(regionTo))) {
            // Scale
            var newScale = 1;
            var regionFromMapped = this.map(regionFrom);
            var regionToMapped = this.map(regionTo);
            var regionSizeMapped = (regionToMapped - regionFromMapped);
            if (!this._theme.isZero(regionSizeMapped)) {
                var pixelSize = (pixelTo - pixelFrom);
                newScale = pixelSize / regionSizeMapped;
            }
            else {
                newScale = (pixelTo < pixelFrom ? -1 : 1);
            }
            // Translation
            var newTranslation = pixelFrom - regionFromMapped * newScale;
            // Done
            result.set(newTranslation, newScale);
        }
    };
    Object.defineProperty(DChartCoordinateLog.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartCoordinateLog.prototype, "transform", {
        get: function () {
            return this._transform;
        },
        enumerable: true,
        configurable: true
    });
    DChartCoordinateLog.prototype.map = function (value) {
        return Math.log(Math.max(0, value)) / Math.LN10;
    };
    DChartCoordinateLog.prototype.mapAll = function (values, ifrom, iend, stride, offset) {
        var factor = 1 / Math.LN10;
        for (var i = ifrom + offset; i < iend; i += stride) {
            var value = values[i];
            values[i] = Math.log(Math.max(0, value)) * factor;
        }
    };
    DChartCoordinateLog.prototype.unmap = function (value) {
        return Math.pow(10, value);
    };
    DChartCoordinateLog.prototype.unmapAll = function (values, ifrom, iend, stride, offset) {
        for (var i = ifrom + offset; i < iend; i += stride) {
            values[i] = Math.pow(10, values[i]);
        }
    };
    DChartCoordinateLog.prototype.ticks = function (domainFrom, domainTo, majorCount, minorCountPerMajor, minorCount, majorResult, minorResult) {
        this._tick.calculate(domainFrom, domainTo, majorCount, minorCountPerMajor, minorCount, majorResult, minorResult, this);
    };
    DChartCoordinateLog.prototype.toTheme = function (options) {
        return (options && options.theme) || this.getThemeDefault();
    };
    DChartCoordinateLog.prototype.getThemeDefault = function () {
        return DThemes.getInstance().get(this.getType());
    };
    DChartCoordinateLog.prototype.getType = function () {
        return "DChartCoordinateLog";
    };
    return DChartCoordinateLog;
}());
export { DChartCoordinateLog };
//# sourceMappingURL=d-chart-coordinate-log.js.map