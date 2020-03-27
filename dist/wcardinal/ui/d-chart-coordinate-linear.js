/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateLinearTick } from "./d-chart-coordinate-linear-tick";
import { DChartCoordinateTransformImpl } from "./d-chart-coordinate-transform-impl";
import { DChartCoordinateTransformMarkImpl } from "./d-chart-coordinate-transform-mark";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DThemes } from "./theme/d-themes";
import { isNaN } from "./util/is-nan";
var DChartCoordinateLinear = /** @class */ (function () {
    function DChartCoordinateLinear(options) {
        this._id = 0;
        this._direction = DChartCoordinateDirection.X;
        var theme = this.toTheme(options);
        this._theme = theme;
        this._transform = new DChartCoordinateTransformImpl(theme);
        this._tick = new DChartCoordinateLinearTick(theme);
        this._work = new DChartRegionImpl(NaN, NaN);
        this._mark = new DChartCoordinateTransformMarkImpl();
    }
    DChartCoordinateLinear.prototype.bind = function (container, direction) {
        this._container = container;
        this._direction = direction;
        this._transform.bind(container, direction);
    };
    DChartCoordinateLinear.prototype.unbind = function () {
        this._container = undefined;
        this._transform.unbind();
    };
    DChartCoordinateLinear.prototype.fit = function (from, to) {
        this.doFit(from, to, this._transform);
    };
    DChartCoordinateLinear.prototype.mark = function (from, to) {
        var mark = this._mark;
        var transform = this._transform;
        mark.oldTranslate = transform.translate;
        mark.oldScale = transform.scale;
        this.doFit(from, to, mark);
    };
    DChartCoordinateLinear.prototype.blend = function (ratio) {
        this._transform.blend(ratio, this._mark);
    };
    DChartCoordinateLinear.prototype.doFit = function (from, to, result) {
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
    DChartCoordinateLinear.prototype.toFitDomain = function (from, to, plotArea, result) {
        if (from != null && to != null) {
            result.set(from, to);
        }
        else {
            plotArea.series.getDomain(this, result);
            result.set(from, to);
        }
        return result;
    };
    DChartCoordinateLinear.prototype.toFitRange = function (from, to, plotArea, result) {
        if (from != null && to != null) {
            result.set(from, to);
        }
        else {
            plotArea.series.getRange(this, result);
            result.set(from, to);
        }
        return result;
    };
    DChartCoordinateLinear.prototype.doFit_ = function (pixelFrom, pixelTo, region, result) {
        var regionFrom = region.from;
        var regionTo = region.to;
        if (!(isNaN(regionFrom) || isNaN(regionTo))) {
            // Scale
            var newScale = 1;
            var regionSize = (regionTo - regionFrom);
            if (!this._theme.isZero(regionSize)) {
                var pixelSize = (pixelTo - pixelFrom);
                newScale = pixelSize / regionSize;
            }
            else {
                newScale = (pixelTo < pixelFrom ? -1 : 1);
            }
            // Translation
            var newTranslation = pixelFrom - regionFrom * newScale;
            // Done
            result.set(newTranslation, newScale);
        }
    };
    Object.defineProperty(DChartCoordinateLinear.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartCoordinateLinear.prototype, "transform", {
        get: function () {
            return this._transform;
        },
        enumerable: true,
        configurable: true
    });
    DChartCoordinateLinear.prototype.map = function (value) {
        return value;
    };
    DChartCoordinateLinear.prototype.mapAll = function (values, ifrom, iend, stride, offset) {
        // DO NOTHING
    };
    DChartCoordinateLinear.prototype.unmap = function (value) {
        return value;
    };
    DChartCoordinateLinear.prototype.unmapAll = function (values, ifrom, iend, stride, offset) {
        // DO NOTHING
    };
    DChartCoordinateLinear.prototype.ticks = function (domainFrom, domainTo, majorCount, minorCountPerMajor, minorCount, majorResult, minorResult) {
        this._tick.calculate(domainFrom, domainTo, majorCount, minorCountPerMajor, minorCount, majorResult, minorResult, this);
    };
    DChartCoordinateLinear.prototype.toTheme = function (options) {
        return (options && options.theme) || this.getThemeDefault();
    };
    DChartCoordinateLinear.prototype.getThemeDefault = function () {
        return DThemes.getInstance().get(this.getType());
    };
    DChartCoordinateLinear.prototype.getType = function () {
        return "DChartCoordinateLinear";
    };
    return DChartCoordinateLinear;
}());
export { DChartCoordinateLinear };
//# sourceMappingURL=d-chart-coordinate-linear.js.map