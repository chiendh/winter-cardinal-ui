/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseStates } from "./d-base-states";
import { DChartSeriesBase } from "./d-chart-series-base";
import { DChartSeriesExpressionParametersImpl } from "./d-chart-series-linear-parameters-impl";
import { EShapeLine } from "./shape/variant/e-shape-line";
/**
 * A series represents a linear equation `a (x - x0) === b (y - y0)`.
 */
var DChartSeriesLinear = /** @class */ (function (_super) {
    __extends(DChartSeriesLinear, _super);
    function DChartSeriesLinear(options) {
        var _this = _super.call(this, options) || this;
        _this._line = null;
        _this._options = options;
        _this._plotAreaSizeXUpdated = NaN;
        _this._plotAreaSizeYUpdated = NaN;
        _this._parameters = DChartSeriesExpressionParametersImpl.from(options);
        return _this;
    }
    DChartSeriesLinear.prototype.bind = function (container, index) {
        var _a;
        var line = this._line;
        if (!line) {
            var stroke = this._stroke = container.newStroke(index, (_a = this._options) === null || _a === void 0 ? void 0 : _a.stroke);
            line = this._line = new EShapeLine([], [], stroke.width, stroke.style);
            line.stroke.color = stroke.color;
            line.stroke.alpha = stroke.alpha;
        }
        line.attach(container.plotArea.container, index);
        this._parameters.toDirty();
        this._plotAreaSizeXUpdated = NaN;
        this._plotAreaSizeYUpdated = NaN;
        _super.prototype.bind.call(this, container, index);
    };
    DChartSeriesLinear.prototype.unbind = function () {
        var line = this._line;
        if (line) {
            line.detach();
        }
        _super.prototype.unbind.call(this);
    };
    Object.defineProperty(DChartSeriesLinear.prototype, "shape", {
        get: function () {
            return this._line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesLinear.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        enumerable: true,
        configurable: true
    });
    DChartSeriesLinear.prototype.toDirty = function () {
        this._parameters.toDirty();
    };
    DChartSeriesLinear.prototype.update = function () {
        var line = this._line;
        var container = this._container;
        if (line && container) {
            var plotArea = container.plotArea;
            var coordinate = this._coordinate;
            var coordinateX = coordinate.x;
            var coordinateY = coordinate.y;
            if (coordinateX && coordinateY) {
                var plotAreaWidth = plotArea.width;
                var plotAreaHeight = plotArea.height;
                var parameters = this._parameters;
                var isParametersChanged = parameters.isDirty();
                var isCoordinateChanged = coordinate.isDirty(coordinateX, coordinateY);
                var isCoordinateTransformChanged = coordinate.isTransformDirty(coordinateX, coordinateY);
                var isPlotAreaSizeChagned = (plotAreaWidth !== this._plotAreaSizeXUpdated ||
                    plotAreaHeight !== this._plotAreaSizeYUpdated);
                if (isParametersChanged || isCoordinateChanged || isCoordinateTransformChanged || isPlotAreaSizeChagned) {
                    parameters.toClean();
                    this._plotAreaSizeXUpdated = plotAreaWidth;
                    this._plotAreaSizeYUpdated = plotAreaHeight;
                    this.updateLine(line, coordinateX, coordinateY, plotAreaWidth, plotAreaHeight);
                }
            }
        }
    };
    DChartSeriesLinear.prototype.updateLine = function (line, xcoordinate, ycoordinate, plotAreaSizeX, plotAreaSizeY) {
        var values = line.points.values;
        var segments = line.points.segments;
        var parameters = this._parameters;
        var a = parameters.a;
        var b = parameters.b;
        var x0 = parameters.x0;
        var y0 = parameters.y0;
        var aabs = Math.abs(a);
        var babs = Math.abs(b);
        var p0x = NaN;
        var p0y = NaN;
        var p1x = NaN;
        var p1y = NaN;
        var threshold = 0.00001;
        if (babs <= aabs) {
            var xfrom0 = xcoordinate.unmap(xcoordinate.transform.unmap(0));
            var xto0 = xcoordinate.unmap(xcoordinate.transform.unmap(plotAreaSizeX));
            p0x = Math.min(xfrom0, xto0);
            p1x = Math.max(xfrom0, xto0);
            if (threshold < aabs) {
                var yfrom = ycoordinate.unmap(ycoordinate.transform.unmap(0));
                var yto = ycoordinate.unmap(ycoordinate.transform.unmap(plotAreaSizeY));
                var xfrom1 = b * (yfrom - y0) / a + x0;
                var xto1 = b * (yto - y0) / a + x0;
                var p2x = Math.min(xfrom1, xto1);
                var p3x = Math.max(xfrom1, xto1);
                if (p0x < p2x) {
                    p0x = p2x;
                }
                if (p3x < p1x) {
                    p1x = p3x;
                }
            }
            p0y = a * (p0x - x0) + b * y0;
            p1y = a * (p1x - x0) + b * y0;
        }
        else {
            var yfrom0 = ycoordinate.unmap(ycoordinate.transform.unmap(0));
            var yto0 = ycoordinate.unmap(ycoordinate.transform.unmap(plotAreaSizeY));
            p0y = Math.min(yfrom0, yto0);
            p1y = Math.max(yfrom0, yto0);
            if (threshold < babs) {
                var xfrom = xcoordinate.unmap(xcoordinate.transform.unmap(0));
                var xto = xcoordinate.unmap(xcoordinate.transform.unmap(plotAreaSizeX));
                var yfrom1 = a * (xfrom - x0) / b + y0;
                var yto1 = a * (xto - x0) / b + y0;
                var p2y = Math.min(yfrom1, yto1);
                var p3y = Math.max(yfrom1, yto1);
                if (p0y < p2y) {
                    p0y = p2y;
                }
                if (p3y < p1y) {
                    p1y = p3y;
                }
            }
            p0x = b * (p0y - y0) + a * x0;
            p1x = b * (p1y - y0) + a * x0;
        }
        p0x = xcoordinate.transform.map(xcoordinate.map(p0x));
        p0y = ycoordinate.transform.map(ycoordinate.map(p0y));
        p1x = xcoordinate.transform.map(xcoordinate.map(p1x));
        p1y = ycoordinate.transform.map(ycoordinate.map(p1y));
        var cx = (p0x + p1x) * 0.5;
        var cy = (p0y + p1y) * 0.5;
        var sx = Math.abs(p1x - p0x);
        var sy = Math.abs(p1y - p0y);
        p0x -= cx;
        p0y -= cy;
        p1x -= cx;
        p1y -= cy;
        if (values.length !== 4) {
            values.length = 0;
            values.push(p0x, p0y, p1x, p1y);
        }
        else {
            values[0] = p0x;
            values[1] = p0y;
            values[2] = p1x;
            values[3] = p1y;
        }
        if (segments.length !== 0) {
            segments.length = 0;
        }
        line.disallowUploadedUpdate();
        line.points.set(values, segments);
        line.size.set(sx, sy);
        line.transform.position.set(cx, cy);
        line.allowUploadedUpdate();
        DApplications.update(line);
    };
    DChartSeriesLinear.prototype.updateRegion = function () {
        // DO NOTHING
    };
    DChartSeriesLinear.prototype.destroy = function () {
        var line = this._line;
        if (line) {
            this._line = null;
            line.detach();
            line.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    DChartSeriesLinear.prototype.hitTest = function (global) {
        var line = this._line;
        if (line) {
            var work = DChartSeriesLinear.WORK;
            var local = line.toLocal(global, undefined, work);
            return line.contains(local) != null;
        }
        return false;
    };
    DChartSeriesLinear.prototype.calcHitPoint = function (global, result) {
        var line = this._line;
        if (line) {
            var work = DChartSeriesLinear.WORK;
            var local = line.toLocal(global, undefined, work);
            result.shape = line;
            return line.calcHitPoint(local, this.toThreshold, null, this.calcHitPointHitTester, result);
        }
        return false;
    };
    DChartSeriesLinear.prototype.toThreshold = function (strokeWidth, strokeScale) {
        return +Infinity;
    };
    DChartSeriesLinear.prototype.calcHitPointHitTester = function (x, y, p0x, p0y, p1x, p1y, index, threshold, result) {
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
                    result.x = result.p0x = result.p1x = px + p2x;
                    result.y = result.p0y = result.p1y = py + p2y;
                    result.t = t;
                    result.index = index;
                    result.distance = distance;
                    return true;
                }
            }
        }
        return false;
    };
    DChartSeriesLinear.prototype.onStateChange = function (newState, oldState) {
        var isActive = DBaseStates.isActive(newState);
        var wasActive = DBaseStates.isActive(oldState);
        if (isActive !== wasActive) {
            var line = this._line;
            var stroke = this._stroke;
            if (line && stroke) {
                line.stroke.width = stroke.width * (isActive ? 2 : 1);
            }
        }
        _super.prototype.onStateChange.call(this, newState, oldState);
    };
    DChartSeriesLinear.WORK = new Point();
    return DChartSeriesLinear;
}(DChartSeriesBase));
export { DChartSeriesLinear };
//# sourceMappingURL=d-chart-series-linear.js.map