/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DChartSeriesBase } from "./d-chart-series-base";
import { EShapeLine } from "./shape/variant/e-shape-line";
import { toCeilingIndex } from "./util/to-ceiling-index";
/**
 * A series represents a polyline.
 * Data points must be sorted in ascending order on the X axis.
 */
var DChartSeriesLine = /** @class */ (function (_super) {
    __extends(DChartSeriesLine, _super);
    function DChartSeriesLine(options) {
        var _this = _super.call(this, options) || this;
        _this._line = null;
        _this._options = options;
        _this._points = (options && options.points) || [];
        _this._pointId = 0;
        _this._pointIdUpdated = NaN;
        _this._centerX = 0;
        _this._centerY = 0;
        return _this;
    }
    DChartSeriesLine.prototype.bind = function (container, index) {
        var _a;
        var line = this._line;
        if (!line) {
            var stroke = this._stroke = container.newStroke(index, (_a = this._options) === null || _a === void 0 ? void 0 : _a.stroke);
            line = this._line = new EShapeLine([], [], stroke.width, stroke.style);
            line.stroke.copy(stroke);
        }
        line.attach(container.plotArea.container, index);
        this._pointIdUpdated = NaN;
        _super.prototype.bind.call(this, container, index);
    };
    DChartSeriesLine.prototype.unbind = function () {
        var line = this._line;
        if (line) {
            line.detach();
        }
        _super.prototype.unbind.call(this);
    };
    Object.defineProperty(DChartSeriesLine.prototype, "shape", {
        get: function () {
            return this._line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesLine.prototype, "points", {
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
    DChartSeriesLine.prototype.toDirty = function () {
        this._pointId += 1;
    };
    DChartSeriesLine.prototype.update = function () {
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
                    this.updateLine(line, coordinateX, coordinateY, isPointChanged || isCoordinateChanged);
                }
            }
        }
    };
    DChartSeriesLine.prototype.updateLine = function (line, xcoordinate, ycoordinate, isPointsDirty) {
        line.disallowUploadedUpdate();
        if (isPointsDirty) {
            var values = line.points.values;
            var segments = line.points.segments;
            var valuesLength = values.length;
            var segmentsLength = segments.length;
            var ivalues = 0;
            var isegments = 0;
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
                else {
                    var segment = (i >> 1) - isegments;
                    if (isegments < segmentsLength) {
                        segments[isegments] = segment;
                    }
                    else {
                        segments.push(segment);
                    }
                    isegments += 1;
                }
            }
            if (values.length !== ivalues) {
                values.length = ivalues;
            }
            if (segments.length !== isegments) {
                segments.length = isegments;
            }
            xcoordinate.mapAll(values, 0, ivalues, 2, 0);
            ycoordinate.mapAll(values, 0, ivalues, 2, 1);
            if (xmin !== xmin) {
                xmin = 0;
                xmax = 0;
                ymin = 0;
                ymax = 0;
            }
            xmin = xcoordinate.map(xmin);
            xmax = xcoordinate.map(xmax);
            ymin = ycoordinate.map(ymin);
            ymax = ycoordinate.map(ymax);
            var sx = Math.abs(xmax - xmin);
            var sy = Math.abs(ymax - ymin);
            var cx = (xmin + xmax) * 0.5;
            var cy = (ymin + ymax) * 0.5;
            for (var i = 0, imax = values.length; i < imax; i += 2) {
                values[i + 0] -= cx;
                values[i + 1] -= cy;
            }
            line.size.set(sx, sy);
            line.points.set(values, segments);
            this._centerX = cx;
            this._centerY = cy;
        }
        line.transform.position.set(xcoordinate.transform.map(this._centerX), ycoordinate.transform.map(this._centerY));
        line.transform.scale.set(xcoordinate.transform.scale, ycoordinate.transform.scale);
        line.allowUploadedUpdate();
        DApplications.update(line);
    };
    DChartSeriesLine.prototype.updateRegion = function () {
        var pointId = this._pointId;
        if (this._regionPointId !== pointId) {
            this._regionPointId = pointId;
            var points = this._points;
            var domain = this._domain;
            var range = this._range;
            domain.clear();
            range.clear();
            if (points != null) {
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
            }
        }
    };
    DChartSeriesLine.prototype.destroy = function () {
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
    DChartSeriesLine.prototype.hitTest = function (global) {
        var line = this._line;
        if (line) {
            var work = DChartSeriesLine.WORK;
            var local = line.toLocal(global, undefined, work);
            return line.contains(local) != null;
        }
        return false;
    };
    DChartSeriesLine.prototype.calcHitPoint = function (global, result) {
        var line = this._line;
        if (line) {
            var work = DChartSeriesLine.WORK;
            var local = line.toLocal(global, undefined, work);
            result.shape = line;
            return line.calcHitPoint(local, this.toThreshold, this.calcHitPointTestRange, this.calcHitPointHitTester, result);
        }
        return false;
    };
    DChartSeriesLine.prototype.toThreshold = function (strokeWidth, strokeScale) {
        return +Infinity;
    };
    DChartSeriesLine.prototype.calcHitPointTestRange = function (x, y, threshold, values, result) {
        var index = toCeilingIndex(values, x, 2, 0);
        result[0] = Math.max(0, index - 1);
        result[1] = index;
        return result;
    };
    DChartSeriesLine.prototype.calcHitPointHitTester = function (x, y, p0x, p0y, p1x, p1y, index, threshold, result) {
        if (p0x <= x && x < p1x) {
            var l = p1x - p0x;
            if (0.0001 < Math.abs(l)) {
                var t = (x - p0x) / l;
                var p2x = x;
                var p2y = p0y + t * (p1y - p0y);
                var distance = Math.abs(p2y - y);
                if (distance < threshold) {
                    var position = result.shape.transform.position;
                    var px = position.x;
                    var py = position.y;
                    result.x = px + p2x;
                    result.y = py + p2y;
                    result.p0x = px + p0x;
                    result.p0y = py + p0y;
                    result.p1x = px + p1x;
                    result.p1y = py + p1y;
                    result.t = t;
                    result.index = index;
                    result.distance = distance;
                    return true;
                }
            }
        }
        return false;
    };
    DChartSeriesLine.WORK = new Point();
    return DChartSeriesLine;
}(DChartSeriesBase));
export { DChartSeriesLine };
//# sourceMappingURL=d-chart-series-line.js.map