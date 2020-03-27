/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DChartSeriesBase } from "./d-chart-series-base";
import { toCeilingIndex } from "./util/to-ceiling-index";
/**
 * A series represents a line of anything.
 * Data points must be sorted in ascending order on the X axis.
 */
var DChartSeriesLineOfAny = /** @class */ (function (_super) {
    __extends(DChartSeriesLineOfAny, _super);
    function DChartSeriesLineOfAny(options) {
        var _this = _super.call(this, options) || this;
        _this._line = null;
        _this._options = options;
        _this._points = (options && options.points) || [];
        _this._pointId = 0;
        _this._pointIdUpdated = NaN;
        return _this;
    }
    DChartSeriesLineOfAny.prototype.getSizeDefault = function () {
        return 10;
    };
    DChartSeriesLineOfAny.prototype.getOffsetDefault = function () {
        return 0;
    };
    DChartSeriesLineOfAny.prototype.bind = function (container, index) {
        var line = this._line;
        if (!line) {
            line = this._line = this.newLineOfAny();
            var options = this._options;
            this.initLine(line, options, container, index);
        }
        line.attach(container.plotArea.container, index);
        this._pointIdUpdated = NaN;
        _super.prototype.bind.call(this, container, index);
    };
    DChartSeriesLineOfAny.prototype.initLine = function (line, options, container, index) {
        var fill = container.newFill(index, options && options.fill);
        this._fill = fill;
        line.fill.copy(fill);
        var stroke = container.newStroke(index, options && options.stroke);
        this._stroke = stroke;
        line.stroke.copy(stroke);
        var sizeDefault = this.getSizeDefault();
        var size = container.newSize(index, options && options.size, sizeDefault, sizeDefault);
        this._size = size;
        line.points.size.set(size.x, size.y);
        var offsetDefault = this.getOffsetDefault();
        var offset = container.newOffset(index, options && options.offset, offsetDefault, offsetDefault);
        this._offset = offset;
        line.points.offset.set(offset.x, offset.y);
    };
    DChartSeriesLineOfAny.prototype.unbind = function () {
        var line = this._line;
        if (line) {
            line.detach();
        }
        _super.prototype.unbind.call(this);
    };
    Object.defineProperty(DChartSeriesLineOfAny.prototype, "shape", {
        get: function () {
            return this._line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesLineOfAny.prototype, "points", {
        get: function () {
            return this._points;
        },
        set: function (points) {
            this._points = points;
            this._pointId += 1;
        },
        enumerable: true,
        configurable: true
    });
    DChartSeriesLineOfAny.prototype.toDirty = function () {
        this._pointId += 1;
    };
    DChartSeriesLineOfAny.prototype.update = function () {
        var line = this._line;
        if (line) {
            var coordinate = this._coordinate;
            var coordinateX = coordinate.x;
            var coordinateY = coordinate.y;
            if (coordinateX && coordinateY) {
                var pointId = this._pointId;
                var isPointChanged = (pointId !== this._pointIdUpdated);
                var isCoordinateChanged = coordinate.isDirty(coordinateX, coordinateY);
                var isCoordinateTransformChanged = coordinate.isTransformDirty(coordinateX, coordinateY);
                if (isPointChanged || isCoordinateChanged || isCoordinateTransformChanged) {
                    this._pointIdUpdated = pointId;
                    this.updateLine(line, coordinateX, coordinateY);
                }
            }
        }
    };
    DChartSeriesLineOfAny.prototype.updateLine = function (line, xcoordinate, ycoordinate) {
        var values = line.points.values;
        var valuesLength = values.length;
        var ivalues = 0;
        var points = this._points;
        var xmin = NaN;
        var xmax = NaN;
        var ymin = NaN;
        var ymax = NaN;
        for (var i = 0, imax = points.length; i < imax; i += 2) {
            var x = points[i];
            var y = points[i + 1];
            if (x != null && y != null) {
                if (ivalues < valuesLength) {
                    values[ivalues] = x;
                    values[ivalues + 1] = y;
                }
                else {
                    values.push(x, y);
                }
                ivalues += 2;
                if (xmin !== xmin) {
                    xmin = x;
                    xmax = x;
                    ymin = y;
                    ymax = y;
                }
                else {
                    xmin = Math.min(xmin, x);
                    xmax = Math.max(xmax, x);
                    ymin = Math.min(ymin, y);
                    ymax = Math.max(ymax, y);
                }
            }
        }
        if (values.length !== ivalues) {
            values.length = ivalues;
        }
        xcoordinate.mapAll(values, 0, ivalues, 2, 0);
        ycoordinate.mapAll(values, 0, ivalues, 2, 1);
        xcoordinate.transform.mapAll(values, 0, ivalues, 2, 0);
        ycoordinate.transform.mapAll(values, 0, ivalues, 2, 1);
        if (xmin !== xmin) {
            xmin = 0;
            xmax = 0;
            ymin = 0;
            ymax = 0;
        }
        var region = this.adjustLineRegion(xmin, xmax, ymin, ymax, DChartSeriesLineOfAny.WORK_REGION || {
            xmin: 0, xmax: 0,
            ymin: 0, ymax: 0
        });
        xmin = xcoordinate.transform.map(xcoordinate.map(region.xmin));
        xmax = xcoordinate.transform.map(xcoordinate.map(region.xmax));
        ymin = ycoordinate.transform.map(ycoordinate.map(region.ymin));
        ymax = ycoordinate.transform.map(ycoordinate.map(region.ymax));
        var sx = Math.abs(xmax - xmin);
        var sy = Math.abs(ymax - ymin);
        var cx = (xmin + xmax) * 0.5;
        var cy = (ymin + ymax) * 0.5;
        for (var i = 0, imax = values.length; i < imax; i += 2) {
            values[i + 0] -= cx;
            values[i + 1] -= cy;
        }
        line.disallowUploadedUpdate();
        this.applyLine(line, xcoordinate, ycoordinate, sx, sy, cx, cy, values);
        line.allowUploadedUpdate();
        DApplications.update(line);
    };
    DChartSeriesLineOfAny.prototype.adjustLineRegion = function (xmin, xmax, ymin, ymax, result) {
        result.xmin = xmin;
        result.xmax = xmax;
        result.ymin = ymin;
        result.ymax = ymax;
        return result;
    };
    DChartSeriesLineOfAny.prototype.applyLine = function (line, xcoordinate, ycoordinate, sx, sy, cx, cy, values) {
        line.points.set(values);
        line.size.set(sx, sy);
        line.transform.position.set(cx, cy);
    };
    DChartSeriesLineOfAny.prototype.updateRegion = function () {
        var pointId = this._pointId;
        if (this._regionPointId !== pointId) {
            this._regionPointId = pointId;
            var points = this._points;
            var domain = this._domain;
            var range = this._range;
            domain.clear();
            range.clear();
            this.calcRegion(points, domain, range);
        }
    };
    DChartSeriesLineOfAny.prototype.calcRegion = function (points, domain, range) {
        for (var i = 0, imax = points.length; i < imax; i += 2) {
            var xraw = points[i];
            if (xraw != null) {
                domain.add(xraw, xraw);
            }
            var yraw = points[i + 1];
            if (yraw != null) {
                range.add(yraw, yraw);
            }
        }
    };
    DChartSeriesLineOfAny.prototype.destroy = function () {
        var line = this._line;
        if (line) {
            this._line = null;
            line.detach();
            line.destroy();
        }
        this._points.length = 0;
        this._pointId = 0;
        this._pointIdUpdated = NaN;
        _super.prototype.destroy.call(this);
    };
    DChartSeriesLineOfAny.prototype.hitTest = function (global) {
        var line = this._line;
        if (line) {
            var work = DChartSeriesLineOfAny.WORK;
            var local = line.toLocal(global, undefined, work);
            return line.contains(local) != null;
        }
        return false;
    };
    DChartSeriesLineOfAny.prototype.calcHitPoint = function (global, result) {
        var line = this._line;
        if (line) {
            var work = DChartSeriesLineOfAny.WORK;
            var local = line.toLocal(global, undefined, work);
            result.shape = line;
            return line.calcHitPoint(local, null, this.calcHitPointTestRange, this.calcHitPointHitTester, result);
        }
        return false;
    };
    DChartSeriesLineOfAny.prototype.calcHitPointTestRange = function (x, y, ax, ay, ox, oy, threshold, values, result) {
        var to = toCeilingIndex(values, x + ax + ox, 2, 0);
        var from = 0;
        for (var i = to - 1, iv = i << 1; 0 <= i; i -= 1, iv -= 2) {
            if (values[iv] <= x - ax) {
                from = i;
                break;
            }
        }
        result[0] = from;
        result[1] = from !== to ? to : Math.min(values.length << 1, to + 1);
        return result;
    };
    DChartSeriesLineOfAny.prototype.calcHitPointHitTester = function (x, y, ax, ay, ox, oy, px, py, index, threshold, result) {
        var shape = result.shape;
        if (shape.containsPointAbs(x, y, ax, ay, ox, oy, px, py)) {
            var position = shape.transform.position;
            result.x = result.p0x = result.p1x = position.x + px;
            result.y = result.p0y = result.p1y = position.y + py;
            result.t = threshold;
            result.index = index;
            var dx = x - (px + ox);
            var dy = y - (py + oy);
            result.distance = Math.sqrt(dx * dx + dy * dy);
            return true;
        }
        return false;
    };
    DChartSeriesLineOfAny.WORK = new Point();
    return DChartSeriesLineOfAny;
}(DChartSeriesBase));
export { DChartSeriesLineOfAny };
//# sourceMappingURL=d-chart-series-line-of-any.js.map