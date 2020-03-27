/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DPickerColorGradientPoint } from "./d-picker-color-gradient-point";
var POINT_SORTER = function (a, b) {
    return a.position - b.position;
};
var DPickerColorGradientData = /** @class */ (function (_super) {
    __extends(DPickerColorGradientData, _super);
    function DPickerColorGradientData() {
        var _this = _super.call(this) || this;
        _this._onChangeBound = function (target) {
            _this.onChange(target);
        };
        var first = new DPickerColorGradientPoint(0xffffff, 1, 0, false, _this._onChangeBound);
        var second = new DPickerColorGradientPoint(0x808080, 1, 1, true, _this._onChangeBound);
        _this._points = [first, second];
        _this._direction = -90;
        _this._selected = second;
        _this._workColor = [0, 0, 0];
        return _this;
    }
    DPickerColorGradientData.prototype.onChange = function (target) {
        var isSelectionChanged = (target.selected && this._selected !== target);
        if (isSelectionChanged) {
            var selected = this._selected;
            if (selected != null) {
                selected._selected = false;
            }
            this._selected = target;
        }
        this._points.sort(POINT_SORTER);
        if (isSelectionChanged) {
            this.emit("selectionchange", this._selected, this);
        }
        this.emit("change", this);
    };
    Object.defineProperty(DPickerColorGradientData.prototype, "points", {
        get: function () {
            return this._points;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerColorGradientData.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            if (this._direction !== direction) {
                this._direction = direction;
                this.emit("directionchange", direction, this);
                this.emit("change", this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerColorGradientData.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    DPickerColorGradientData.prototype.size = function () {
        return this._points.length;
    };
    DPickerColorGradientData.prototype.get = function (index) {
        var points = this._points;
        if (0 <= index && index < points.length) {
            return points[index];
        }
        return null;
    };
    DPickerColorGradientData.prototype.addAt = function (position) {
        var points = this._points;
        var previous = null;
        for (var i = 0, imax = points.length; i < imax; ++i) {
            var point = points[i];
            if (position <= point.position) {
                if (previous != null) {
                    var span = point.position - previous.position;
                    if (0.001 < span) {
                        var rgb0 = utils.hex2rgb(point.color, this._workColor);
                        var r0 = rgb0[0];
                        var g0 = rgb0[1];
                        var b0 = rgb0[2];
                        var rgb1 = utils.hex2rgb(previous.color, this._workColor);
                        var r1 = rgb1[0];
                        var g1 = rgb1[1];
                        var b1 = rgb1[2];
                        var ratio = (position - previous.position) / span;
                        var r = r0 * ratio + r1 * (1 - ratio);
                        var g = g0 * ratio + g1 * (1 - ratio);
                        var b = b0 * ratio + b1 * (1 - ratio);
                        var rgb = this._workColor;
                        rgb[0] = r;
                        rgb[1] = g;
                        rgb[2] = b;
                        var color = utils.rgb2hex(rgb);
                        var alpha = point.alpha * ratio + previous.alpha * (1 - ratio);
                        return this.add(color, alpha, position, true);
                    }
                }
                else {
                    return this.add(point.color, point.alpha, position, true);
                }
            }
            previous = point;
        }
        if (previous != null) {
            return this.add(previous.color, previous.alpha, position, true);
        }
        else {
            return this.add(0xffffff, 1.0, position, true);
        }
    };
    DPickerColorGradientData.prototype.add = function (color, alpha, position, selected) {
        var result = new DPickerColorGradientPoint(color, alpha, position, selected, this._onChangeBound);
        this._points.push(result);
        this._onChangeBound(result);
        return result;
    };
    DPickerColorGradientData.prototype.remove = function (point) {
        var points = this._points;
        if (2 < points.length) {
            for (var i = 0, imax = points.length; i < imax; ++i) {
                if (points[i] === point) {
                    points.splice(i, 1);
                    var isSelectionChanged = (this._selected === point);
                    if (isSelectionChanged) {
                        if (i + 1 < imax) {
                            this._selected = points[i];
                        }
                        else {
                            this._selected = points[i - 1];
                        }
                    }
                    if (isSelectionChanged) {
                        this.emit("selectionchange", this._selected, this);
                    }
                    this.emit("change", this);
                    return true;
                }
            }
        }
        return false;
    };
    DPickerColorGradientData.prototype.reset = function () {
        var oldDirection = this._direction;
        this._direction = -90;
        var points = this._points;
        var oldSelected = this._selected;
        var index = (oldSelected ? points.indexOf(oldSelected) : -1);
        points.length = 0;
        points.push(new DPickerColorGradientPoint(0xffffff, 0, 0, false, this._onChangeBound));
        points.push(new DPickerColorGradientPoint(0xffffff, 0, 1, false, this._onChangeBound));
        if (0 <= index && index < points.length) {
            var point = points[index];
            point._selected = true;
            this._selected = point;
        }
        else if (0 < points.length) {
            var point = points[points.length - 1];
            point._selected = true;
            this._selected = point;
        }
        else {
            this._selected = null;
        }
        if (oldSelected !== this._selected) {
            this.emit("selectionchange", this._selected, this);
        }
        if (oldDirection !== this._direction) {
            this.emit("directionchange", this._direction, this);
        }
        this.emit("change", this);
    };
    DPickerColorGradientData.prototype.toObject = function () {
        var pointsCopy = [];
        var points = this._points;
        for (var i = 0, imax = points.length; i < imax; ++i) {
            pointsCopy.push(points[i].toObject());
        }
        return {
            points: pointsCopy,
            direction: this._direction
        };
    };
    DPickerColorGradientData.prototype.fromObject = function (data) {
        var oldDirection = this._direction;
        this._direction = data.direction;
        var points = this._points;
        var oldSelected = this._selected;
        var index = (oldSelected ? points.indexOf(oldSelected) : -1);
        points.length = 0;
        for (var i = 0, imax = data.points.length; i < imax; ++i) {
            var pointLike = data.points[i];
            var point = new DPickerColorGradientPoint(pointLike.color, pointLike.alpha, pointLike.position, false, this._onChangeBound);
            points.push(point);
        }
        points.sort(POINT_SORTER);
        if (0 <= index && index < points.length) {
            var point = points[index];
            point._selected = true;
            this._selected = point;
        }
        else if (0 < points.length) {
            var point = points[points.length - 1];
            point._selected = true;
            this._selected = point;
        }
        else {
            this._selected = null;
        }
        if (oldSelected !== this._selected) {
            this.emit("selectionchange", this._selected, this);
        }
        if (oldDirection !== this._direction) {
            this.emit("directionchange", this._direction, this);
        }
        this.emit("change", this);
    };
    return DPickerColorGradientData;
}(utils.EventEmitter));
export { DPickerColorGradientData };
//# sourceMappingURL=d-picker-color-gradient-data.js.map