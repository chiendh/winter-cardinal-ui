/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point, Rectangle, utils } from "pixi.js";
import { isNaN } from "../util/is-nan";
import { ESnapperGrid } from "./e-snapper-grid";
import { ESnapperResult } from "./e-snapper-result";
import { ESnapperTarget } from "./e-snapper-target";
var EPSILON = 0.00001;
export var ESnapperModifierAnchor;
(function (ESnapperModifierAnchor) {
    ESnapperModifierAnchor[ESnapperModifierAnchor["NONE"] = 0] = "NONE";
    ESnapperModifierAnchor[ESnapperModifierAnchor["TOP_LEFT"] = 1] = "TOP_LEFT";
    ESnapperModifierAnchor[ESnapperModifierAnchor["TOP_CENTER"] = 2] = "TOP_CENTER";
    ESnapperModifierAnchor[ESnapperModifierAnchor["TOP_RIGHT"] = 3] = "TOP_RIGHT";
    ESnapperModifierAnchor[ESnapperModifierAnchor["MIDDLE_LEFT"] = 4] = "MIDDLE_LEFT";
    ESnapperModifierAnchor[ESnapperModifierAnchor["MIDDLE_RIGHT"] = 5] = "MIDDLE_RIGHT";
    ESnapperModifierAnchor[ESnapperModifierAnchor["BOTTOM_LEFT"] = 6] = "BOTTOM_LEFT";
    ESnapperModifierAnchor[ESnapperModifierAnchor["BOTTOM_CENTER"] = 7] = "BOTTOM_CENTER";
    ESnapperModifierAnchor[ESnapperModifierAnchor["BOTTOM_RIGHT"] = 8] = "BOTTOM_RIGHT";
    ESnapperModifierAnchor[ESnapperModifierAnchor["ROTATION"] = 9] = "ROTATION";
})(ESnapperModifierAnchor || (ESnapperModifierAnchor = {}));
var ESnapper = /** @class */ (function (_super) {
    __extends(ESnapper, _super);
    function ESnapper(parent) {
        var _this = _super.call(this) || this;
        _this._points = [
            new Point(),
            new Point(),
            new Point(),
            new Point(),
            new Point() // Center
        ];
        _this._normals = [
            new Point(),
            new Point()
        ];
        _this._lengths = [
            1,
            1
        ];
        _this._workScale = new Point();
        _this._workSnapResultX = new ESnapperResult();
        _this._workSnapResultY = new ESnapperResult();
        _this._workScaleResult = {
            distance: 0,
            scale: new Point()
        };
        _this._workTranslate = new Point();
        _this._workSnapRectangle = new Rectangle();
        _this._workSnap = new Point();
        // Grid
        _this.grid = new ESnapperGrid();
        // Target
        _this.target = new ESnapperTarget();
        //
        _this._parent = parent;
        _this._isEnabled = true;
        return _this;
    }
    ESnapper.prototype.isEnabled = function () {
        return this._isEnabled;
    };
    ESnapper.prototype.toggle = function () {
        this._isEnabled = !this._isEnabled;
        this.emit("change", this);
        return this._isEnabled;
    };
    ESnapper.prototype.enable = function () {
        if (this._isEnabled !== true) {
            this._isEnabled = true;
            this.emit("change", this);
        }
    };
    ESnapper.prototype.disable = function () {
        if (this._isEnabled !== false) {
            this._isEnabled = false;
            this.emit("change", this);
        }
    };
    ESnapper.prototype.prepare = function (modifier) {
        modifier.updateTransform();
        var localTransform = modifier.transform.localTransform;
        var sx = modifier.width;
        var sy = modifier.height;
        var points = this._points;
        points[0].set(0, 0);
        points[1].set(sx, 0);
        points[2].set(sx, sy);
        points[3].set(0, sy);
        points[4].set(sx * 0.5, sy * 0.5);
        localTransform.apply(points[0], points[0]);
        localTransform.apply(points[1], points[1]);
        localTransform.apply(points[2], points[2]);
        localTransform.apply(points[3], points[3]);
        localTransform.apply(points[4], points[4]);
    };
    ESnapper.prototype.prepareForTranslate = function (modifier) {
        if (this._isEnabled) {
            this.prepare(modifier);
        }
    };
    ESnapper.prototype.snap = function (point, result) {
        var px = point.x;
        var py = point.y;
        var canvas = this._parent.canvas;
        var x = this._workSnapResultX;
        var y = this._workSnapResultY;
        // Canvas
        if (canvas != null) {
            var scale = Math.max(canvas.scale.x, canvas.scale.y);
            x.reset(px, scale);
            y.reset(py, scale);
            x.set(px, 0);
            x.set(px, canvas.width);
            y.set(py, 0);
            y.set(py, canvas.height);
        }
        else {
            x.reset(px, 1);
            y.reset(py, 1);
        }
        // Target
        this.target.snap(px, py, x, y);
        // Grid
        this.grid.snap(px, x);
        this.grid.snap(py, y);
        //
        result.x = (isNaN(x.distance) ? NaN : x.result);
        result.y = (isNaN(y.distance) ? NaN : y.result);
        return result;
    };
    ESnapper.prototype.toSnapped = function (point, result) {
        var px = point.x;
        var py = point.y;
        if (this._isEnabled) {
            this.snap(point, result);
            var x = result.x;
            var y = result.y;
            result.set(isNaN(x) ? px : x, isNaN(y) ? py : y);
        }
        else {
            result.set(px, py);
        }
        return result;
    };
    ESnapper.prototype.toTranslationSnapped = function (delta, result) {
        var dx = delta.x;
        var dy = delta.y;
        var x = NaN;
        var y = NaN;
        if (this._isEnabled) {
            var workTranslate = this._workTranslate;
            var points = this._points;
            for (var i = 0, imax = points.length; i < imax; ++i) {
                var point = points[i];
                workTranslate.set(point.x + dx, point.y + dy);
                this.snap(workTranslate, workTranslate);
                // X
                if (!isNaN(workTranslate.x)) {
                    var newDx = workTranslate.x - point.x;
                    if (isNaN(x) || Math.abs(newDx - dx) < Math.abs(x - dx)) {
                        x = newDx;
                    }
                }
                // Y
                if (!isNaN(workTranslate.y)) {
                    var newDy = workTranslate.y - point.y;
                    if (isNaN(y) || Math.abs(newDy - dy) < Math.abs(y - dy)) {
                        y = newDy;
                    }
                }
            }
        }
        result.x = (isNaN(x) ? dx : x);
        result.y = (isNaN(y) ? dy : y);
        return result;
    };
    ESnapper.prototype.prepareForRotate = function (modifier) {
        //
    };
    ESnapper.prototype.getGridSizeRotation = function () {
        return 5;
    };
    ESnapper.prototype.toRadian = function (value) {
        return value / 180 * Math.PI;
    };
    ESnapper.prototype.toDegree = function (value) {
        return value / Math.PI * 180;
    };
    ESnapper.prototype.toRotationSnapped = function (baseRotation, deltaRotation) {
        if (this._isEnabled) {
            var gridSize = this.getGridSizeRotation();
            var newRotation = baseRotation + deltaRotation;
            var newRotationDegree = Math.round(this.toDegree(newRotation));
            var newRotationDegreeResidual = newRotationDegree % 90;
            if (Math.abs(newRotationDegreeResidual) <= gridSize) {
                return this.toRadian(newRotationDegree - newRotationDegreeResidual) - baseRotation;
            }
            else {
                if (90 - gridSize <= newRotationDegreeResidual) {
                    return this.toRadian(newRotationDegree + (90 - newRotationDegreeResidual)) - baseRotation;
                }
                else if (newRotationDegreeResidual <= -90 + gridSize) {
                    return this.toRadian(newRotationDegree - (90 + newRotationDegreeResidual)) - baseRotation;
                }
                else {
                    return deltaRotation;
                }
            }
        }
        return deltaRotation;
    };
    ESnapper.prototype.calcNormalizedVector = function (p0, p1, result) {
        var dx = p1.x - p0.x;
        var dy = p1.y - p0.y;
        var l = Math.sqrt(dx * dx + dy * dy);
        if (EPSILON < l) {
            var d = 1 / l;
            result.x = dx * d;
            result.y = dy * d;
        }
        else {
            result.x = 1;
            result.y = 0;
        }
        return l;
    };
    ESnapper.prototype.prepareForScale = function (modifier, anchor) {
        if (this._isEnabled) {
            this.prepare(modifier);
            var points = this._points;
            var normals = this._normals;
            var lengths = this._lengths;
            switch (anchor) {
                case ESnapperModifierAnchor.TOP_LEFT:
                    lengths[0] = this.calcNormalizedVector(points[1], points[0], normals[0]);
                    lengths[1] = this.calcNormalizedVector(points[3], points[0], normals[1]);
                    break;
                case ESnapperModifierAnchor.TOP_CENTER:
                    lengths[0] = this.calcNormalizedVector(points[3], points[0], normals[0]);
                    break;
                case ESnapperModifierAnchor.TOP_RIGHT:
                    lengths[0] = this.calcNormalizedVector(points[0], points[1], normals[0]);
                    lengths[1] = this.calcNormalizedVector(points[2], points[1], normals[1]);
                    break;
                case ESnapperModifierAnchor.MIDDLE_LEFT:
                    lengths[0] = this.calcNormalizedVector(points[1], points[0], normals[0]);
                    break;
                case ESnapperModifierAnchor.NONE:
                    break;
                case ESnapperModifierAnchor.MIDDLE_RIGHT:
                    lengths[0] = this.calcNormalizedVector(points[0], points[1], normals[0]);
                    break;
                case ESnapperModifierAnchor.BOTTOM_LEFT:
                    lengths[0] = this.calcNormalizedVector(points[2], points[3], normals[0]);
                    lengths[1] = this.calcNormalizedVector(points[0], points[3], normals[1]);
                    break;
                case ESnapperModifierAnchor.BOTTOM_CENTER:
                    lengths[0] = this.calcNormalizedVector(points[0], points[3], normals[0]);
                    break;
                case ESnapperModifierAnchor.BOTTOM_RIGHT:
                    lengths[0] = this.calcNormalizedVector(points[3], points[2], normals[0]);
                    lengths[1] = this.calcNormalizedVector(points[1], points[2], normals[1]);
                    break;
            }
        }
    };
    ESnapper.prototype.setScaleSnappedResult = function (distance, length, move, axis, // true => x axis, false y axis
    result) {
        if (EPSILON < length) {
            if (isNaN(result.distance) || distance < result.distance) {
                result.distance = distance;
                var newScale = 1 + move / length;
                if (axis) {
                    result.scale.x = newScale;
                }
                else {
                    result.scale.y = newScale;
                }
            }
        }
    };
    ESnapper.prototype.calcScaleSnapped1D = function (transform, point, normal, length, axis, result) {
        var work = this._workScale;
        transform.apply(point, work);
        var tx = work.x;
        var ty = work.y;
        this.snap(work, work);
        var x = work.x;
        var y = work.y;
        // X coordinate
        if (!isNaN(x)) {
            var nx = Math.abs(normal.x);
            if (EPSILON < nx) {
                var dx = (x - tx) / normal.x;
                var distance = Math.abs(dx);
                var mx = (x - point.x) / normal.x;
                this.setScaleSnappedResult(distance, length, mx, axis, result);
            }
        }
        // Y coordinate
        if (!isNaN(y)) {
            var ny = Math.abs(normal.y);
            if (EPSILON < ny) {
                var dy = (y - ty) / normal.y;
                var distance = Math.abs(dy);
                var my = (y - point.y) / normal.y;
                this.setScaleSnappedResult(distance, length, my, axis, result);
            }
        }
    };
    ESnapper.prototype.calcScaleSnappedX = function (transform, point, normal, length, result) {
        this.calcScaleSnapped1D(transform, point, normal, length, true, result);
    };
    ESnapper.prototype.calcScaleSnappedY = function (transform, point, normal, length, result) {
        this.calcScaleSnapped1D(transform, point, normal, length, false, result);
    };
    ESnapper.prototype.calcScaleSnapped2D = function (transform, point, normals, lengths, result) {
        var work = this._workScale;
        transform.apply(point, work);
        var tx = work.x;
        var ty = work.y;
        this.snap(work, work);
        var x = work.x;
        var y = work.y;
        if (isNaN(x)) {
            if (isNaN(y)) {
                return;
            }
            else {
                x = tx;
            }
        }
        else {
            if (isNaN(y)) {
                y = ty;
            }
        }
        // (x, y) = (tx, ty) + normalA * a + normalB * b
        // dx = x - tx
        // dy = y - ty
        // V = ( a, b )^T
        // D = ( dx, dy )^T
        // A = | normalA.x normalB.x |
        //     | normalA.y normalB.y |
        // A V = D
        // det A = normalA.x * normalB.y - normalB.x * normalA.y
        // A^-1 = |  normalB.y -normalB.x | / det A
        //        | -normalA.y  normalA.x |
        var detA = normals[0].x * normals[1].y - normals[1].x * normals[0].y;
        if (EPSILON < Math.abs(detA)) {
            var dx = x - tx;
            var dy = y - ty;
            var distance = Math.abs(dx * dx + dy * dy);
            if (isNaN(result.distance) || distance < result.distance) {
                result.distance = distance;
                var mdx = x - point.x;
                var mdy = y - point.y;
                var mx = (+normals[1].y * mdx - normals[1].x * mdy) / detA;
                var my = (-normals[0].y * mdx + normals[0].x * mdy) / detA;
                result.scale.set(1 + mx / lengths[0], 1 + my / lengths[1]);
            }
        }
    };
    ESnapper.prototype.calcScaleSnappedXY = function (transform, pointO, pointX, pointY, normals, lengths, result) {
        this.calcScaleSnapped2D(transform, pointO, normals, lengths, result);
        this.calcScaleSnappedX(transform, pointY, normals[0], lengths[0], result);
        this.calcScaleSnappedY(transform, pointX, normals[1], lengths[1], result);
    };
    ESnapper.prototype.toScaleSnapped = function (transform, anchor, keepRatio, scale) {
        if (this._isEnabled) {
            var points = this._points;
            var normals = this._normals;
            var lengths = this._lengths;
            var work = this._workScaleResult;
            work.distance = NaN;
            work.scale.set(scale.x, scale.y);
            switch (anchor) {
                case ESnapperModifierAnchor.TOP_LEFT:
                    this.calcScaleSnappedXY(transform, points[0], points[1], points[3], normals, lengths, work);
                    break;
                case ESnapperModifierAnchor.TOP_CENTER:
                    this.calcScaleSnappedY(transform, points[0], normals[0], lengths[0], work);
                    this.calcScaleSnappedY(transform, points[1], normals[0], lengths[0], work);
                    break;
                case ESnapperModifierAnchor.TOP_RIGHT:
                    this.calcScaleSnappedXY(transform, points[1], points[0], points[2], normals, lengths, work);
                    break;
                case ESnapperModifierAnchor.MIDDLE_LEFT:
                    this.calcScaleSnappedX(transform, points[0], normals[0], lengths[0], work);
                    this.calcScaleSnappedX(transform, points[3], normals[0], lengths[0], work);
                    break;
                case ESnapperModifierAnchor.NONE:
                    break;
                case ESnapperModifierAnchor.MIDDLE_RIGHT:
                    this.calcScaleSnappedX(transform, points[1], normals[0], lengths[0], work);
                    this.calcScaleSnappedX(transform, points[2], normals[0], lengths[0], work);
                    break;
                case ESnapperModifierAnchor.BOTTOM_LEFT:
                    this.calcScaleSnappedXY(transform, points[3], points[2], points[0], normals, lengths, work);
                    break;
                case ESnapperModifierAnchor.BOTTOM_CENTER:
                    this.calcScaleSnappedY(transform, points[2], normals[0], lengths[0], work);
                    this.calcScaleSnappedY(transform, points[3], normals[0], lengths[0], work);
                    break;
                case ESnapperModifierAnchor.BOTTOM_RIGHT:
                    this.calcScaleSnappedXY(transform, points[2], points[3], points[1], normals, lengths, work);
                    break;
            }
            if (!isNaN(work.distance)) {
                scale.copyFrom(work.scale);
                if (keepRatio) {
                    switch (anchor) {
                        case ESnapperModifierAnchor.TOP_LEFT:
                        case ESnapperModifierAnchor.TOP_RIGHT:
                        case ESnapperModifierAnchor.BOTTOM_LEFT:
                        case ESnapperModifierAnchor.BOTTOM_RIGHT:
                            scale.x = scale.y = Math.max(scale.x, scale.y);
                            break;
                        case ESnapperModifierAnchor.TOP_CENTER:
                        case ESnapperModifierAnchor.BOTTOM_CENTER:
                            scale.x = scale.y;
                            break;
                        case ESnapperModifierAnchor.MIDDLE_LEFT:
                        case ESnapperModifierAnchor.MIDDLE_RIGHT:
                            scale.y = scale.x;
                            break;
                        case ESnapperModifierAnchor.NONE:
                            break;
                    }
                }
                return true;
            }
        }
        return false;
    };
    ESnapper.prototype.reset = function () {
        this.enable();
        this.target.reset();
        this.grid.reset();
    };
    ESnapper.prototype.serialize = function () {
        return [
            (this._isEnabled ? 1 : 0),
            this.target.serialize(),
            this.grid.serialize()
        ];
    };
    ESnapper.prototype.deserialize = function (serialized) {
        if (serialized[0] !== 0) {
            this.enable();
        }
        else {
            this.disable();
        }
        this.target.deserialize(serialized[1]);
        this.grid.deserialize(serialized[2]);
    };
    return ESnapper;
}(utils.EventEmitter));
export { ESnapper };
//# sourceMappingURL=e-snapper.js.map