/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfRectangles } from "./shape/variant/e-shape-line-of-rectangles";
import { isArray } from "./util/is-array";
/**
 * A series represents bars.
 * Data points must be sorted in ascending order on the X axis.
 */
var DChartSeriesBar = /** @class */ (function (_super) {
    __extends(DChartSeriesBar, _super);
    function DChartSeriesBar(options) {
        var _this = _super.call(this, options) || this;
        _this._barCount = -1;
        _this._barIndex = -1;
        _this._xcoordinateId = -1;
        _this._xcoordinateTransformId = -1;
        return _this;
    }
    DChartSeriesBar.prototype.bind = function (container, index) {
        this._barCount = -1;
        this._barIndex = -1;
        this._xcoordinateId = -1;
        this._xcoordinateTransformId = -1;
        _super.prototype.bind.call(this, container, index);
    };
    DChartSeriesBar.prototype.initLine = function (line, options, container, index) {
        _super.prototype.initLine.call(this, line, options, container, index);
        this._padding = container.newPadding(index, options && options.padding);
    };
    DChartSeriesBar.prototype.newLineOfAny = function () {
        return new EShapeLineOfRectangles();
    };
    DChartSeriesBar.prototype.getSizeDefault = function () {
        return 1;
    };
    DChartSeriesBar.prototype.adjustLineRegion = function (xmin, xmax, ymin, ymax, result) {
        return _super.prototype.adjustLineRegion.call(this, xmin, xmax, Math.min(0, ymin), Math.max(0, ymax), result);
    };
    DChartSeriesBar.prototype.updateBarCountAndIndex = function () {
        if (this._barIndex < 0 || this._barCount < 0) {
            var barIndex = 0;
            var barCount = 0;
            var container = this._container;
            if (container) {
                for (var i = 0, imax = container.size(); i < imax; ++i) {
                    var series = container.get(i);
                    if (series === this) {
                        barIndex = barCount;
                    }
                    if (series instanceof DChartSeriesBar) {
                        barCount += 1;
                    }
                }
            }
            barCount = Math.max(1, barCount);
            this._barCount = barCount;
            this._barIndex = barIndex;
            return true;
        }
        return false;
    };
    DChartSeriesBar.prototype.applyLine = function (line, xcoordinate, ycoordinate, sx, sy, cx, cy, values) {
        // Offset
        var size = this._size;
        var offset = this._offset;
        var padding = this._padding;
        if (size && offset && padding) {
            var xcoordinateId = xcoordinate.id;
            var xcoordinateTransformId = xcoordinate.transform.id;
            if (this.updateBarCountAndIndex() || this._xcoordinateId !== xcoordinateId ||
                this._xcoordinateTransformId !== xcoordinateTransformId) {
                var barCount = this._barCount;
                var barIndex = this._barIndex;
                this._xcoordinateId = xcoordinateId;
                this._xcoordinateTransformId = xcoordinateTransformId;
                var x0 = xcoordinate.transform.map(xcoordinate.map(0));
                var x1 = xcoordinate.transform.map(xcoordinate.map(size.x));
                var totalBandWidth = Math.abs(x1 - x0) * (1 - padding.outer);
                if (barCount <= 1) {
                    line.points.offset.x = offset.x;
                    line.points.size.x = totalBandWidth;
                }
                else {
                    var totalBarWidth = totalBandWidth * (1 - padding.inner);
                    var totalPaddingInner = totalBandWidth - totalBarWidth;
                    var barWidth = totalBarWidth / barCount;
                    var barPadding = totalPaddingInner / (barCount - 1);
                    var barX = barWidth * (barIndex + 0.5) + barIndex * barPadding;
                    line.points.offset.x = offset.x + barX - totalBandWidth * 0.5;
                    line.points.size.x = barWidth;
                }
            }
        }
        // Sizes & Offsets
        var sizes = line.points.size.y;
        if (!isArray(sizes)) {
            sizes = [];
        }
        var sizesLength = sizes.length;
        var offsets = line.points.offset.y;
        if (!isArray(offsets)) {
            offsets = [];
        }
        var offsetsLength = offsets.length;
        var isize = 0;
        var y0 = ycoordinate.transform.map(ycoordinate.map(0)) - cy;
        for (var i = 0, imax = values.length; i < imax; i += 2, isize += 1) {
            var distance = values[i + 1] - y0;
            var s = Math.abs(distance);
            if (isize < sizesLength) {
                sizes[isize] = s;
            }
            else {
                sizes.push(s);
            }
            var o = -0.5 * distance;
            if (isize < offsetsLength) {
                offsets[isize] = o;
            }
            else {
                offsets.push(o);
            }
        }
        if (sizes.length !== isize) {
            sizes.length = isize;
        }
        if (offsets.length !== isize) {
            offsets.length = isize;
        }
        line.points.size.y = sizes;
        line.points.offset.y = offsets;
        // Others
        _super.prototype.applyLine.call(this, line, xcoordinate, ycoordinate, sx, sy, cx, cy, values);
    };
    DChartSeriesBar.prototype.calcRegion = function (points, domain, range) {
        _super.prototype.calcRegion.call(this, points, domain, range);
        var size = this._size;
        if (size) {
            var sx = size.x * 0.5;
            domain.set(domain.from - sx, domain.to + sx);
        }
        range.add(0, 0);
    };
    return DChartSeriesBar;
}(DChartSeriesLineOfAny));
export { DChartSeriesBar };
//# sourceMappingURL=d-chart-series-bar.js.map