/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point } from "pixi.js";
import { toIndexOf } from "../../util/to-index-of";
import { EShapePointsStyle } from "../e-shape-points-style";
var EShapeLinePoints = /** @class */ (function () {
    function EShapeLinePoints(parent, points, segments, style) {
        // Calculate the center
        var values = [];
        var minX = 0;
        var maxX = 0;
        var minY = 0;
        var maxY = 0;
        var pointsLength = points.length;
        if (2 <= pointsLength) {
            minX = maxX = points[0];
            minY = maxY = points[1];
            for (var i = 2; i < pointsLength; i += 2) {
                var x = points[i];
                var y = points[i + 1];
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
                minY = Math.min(minY, y);
                maxY = Math.max(maxY, y);
            }
        }
        var cx = (maxX + minX) * 0.5;
        var cy = (maxY + minY) * 0.5;
        for (var i = 0; i < pointsLength; i += 2) {
            var x = points[i + 0] - cx;
            var y = points[i + 1] - cy;
            values.push(x, y);
        }
        var sx = maxX - minX;
        var sy = maxY - minY;
        //
        this._parent = parent;
        this._valuesBase = undefined;
        this._valuesBaseLength = values.length;
        this._values = values;
        this._segments = segments.slice(0);
        this._sizeBase = new Point(sx, sy);
        this.size = new Point(sx, sy);
        this.position = new Point(cx, cy);
        this._id = 0;
        this._style = style;
    }
    Object.defineProperty(EShapeLinePoints.prototype, "length", {
        get: function () {
            return this._values.length >> 1;
        },
        enumerable: true,
        configurable: true
    });
    EShapeLinePoints.prototype.fitToParentSize = function () {
        var size = this.size;
        var parentSize = this._parent.size;
        var ssx = parentSize.x;
        var ssy = parentSize.y;
        var threshold = 0.00001;
        if (threshold < Math.abs(ssx - size.x) || threshold < Math.abs(ssy - size.y)) {
            size.set(ssx, ssy);
            var sizeBase = this._sizeBase;
            var hasSizeBaseX = threshold < Math.abs(sizeBase.x);
            var hasSizeBaseY = threshold < Math.abs(sizeBase.y);
            if (hasSizeBaseX || hasSizeBaseY) {
                var scaleX = (hasSizeBaseX ? ssx / sizeBase.x : 1);
                var scaleY = (hasSizeBaseY ? ssy / sizeBase.y : 1);
                var values = this._values;
                var valuesBase = this._valuesBase;
                if (valuesBase == null) {
                    valuesBase = [];
                    this._valuesBase = valuesBase;
                    for (var i = 0, imax = this.length << 1; i < imax; i += 2) {
                        var x = values[i];
                        var y = values[i + 1];
                        values[i] = x * scaleX;
                        values[i + 1] = y * scaleY;
                        valuesBase.push(x, y);
                    }
                }
                else {
                    for (var i = 0, imax = this.length << 1; i < imax; i += 2) {
                        values[i] = valuesBase[i] * scaleX;
                        values[i + 1] = valuesBase[i + 1] * scaleY;
                    }
                }
                this._id += 1;
            }
        }
    };
    Object.defineProperty(EShapeLinePoints.prototype, "id", {
        get: function () {
            this.fitToParentSize();
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLinePoints.prototype, "values", {
        get: function () {
            this.fitToParentSize();
            return this._values;
        },
        set: function (values) {
            this.set(values, undefined, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLinePoints.prototype, "segments", {
        get: function () {
            return this._segments;
        },
        /**
         * Must be sorted in ascending order.
         */
        set: function (segments) {
            this.set(undefined, segments, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLinePoints.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (style) {
            this.set(undefined, undefined, style);
        },
        enumerable: true,
        configurable: true
    });
    EShapeLinePoints.prototype.copy = function (source) {
        return this.set(source.values, source.segments, source.style);
    };
    EShapeLinePoints.prototype.set = function (newValues, newSegments, newStyle) {
        var isDirty = false;
        var isUpdated = false;
        // Values
        if (newValues != null) {
            var values = this._values;
            var valuesBaseLength = this._valuesBaseLength;
            var newValuesLength = newValues.length;
            var iupdate = Math.min(newValuesLength, valuesBaseLength);
            this._valuesBase = undefined;
            if (values !== newValues) {
                for (var i = 0; i < iupdate; ++i) {
                    values[i] = newValues[i];
                }
                for (var i = iupdate; i < newValuesLength; ++i) {
                    values.push(newValues[i]);
                }
                if (valuesBaseLength !== newValuesLength) {
                    values.length = newValuesLength;
                    this._valuesBaseLength = newValuesLength;
                    isDirty = true;
                }
                else {
                    isUpdated = true;
                }
            }
            else {
                if (valuesBaseLength !== newValuesLength) {
                    this._valuesBaseLength = newValuesLength;
                    isDirty = true;
                }
                else {
                    isUpdated = true;
                }
            }
        }
        // Segments
        if (newSegments != null) {
            var segments = this._segments;
            if (segments !== newSegments) {
                var newSegmentsLength = newSegments.length;
                var iupdate = Math.min(segments.length, newSegmentsLength);
                for (var i = 0; i < iupdate; ++i) {
                    segments[i] = newSegments[i];
                }
                for (var i = iupdate; i < newSegmentsLength; ++i) {
                    segments.push(newSegments[i]);
                }
                if (segments.length !== newSegmentsLength) {
                    segments.length = newSegmentsLength;
                }
            }
            isUpdated = true;
        }
        // Style
        if (newStyle != null) {
            var oldStyle = this._style;
            if (oldStyle !== newStyle) {
                this._style = newStyle;
                isUpdated = true;
            }
        }
        //
        if (isDirty) {
            this._id += 1;
            var parent_1 = this._parent;
            var uploaded = parent_1.uploaded;
            if (uploaded) {
                if (uploaded.isCompatible(parent_1)) {
                    parent_1.updateUploaded();
                }
                else {
                    parent_1.uploaded = undefined;
                    parent_1.toDirty();
                }
            }
            else {
                parent_1.updateUploaded();
            }
        }
        else if (isUpdated) {
            this._id += 1;
            this._parent.updateUploaded();
        }
        return this;
    };
    EShapeLinePoints.prototype.clone = function (parent) {
        return new EShapeLinePoints(parent, this._values, this._segments, this._style);
    };
    EShapeLinePoints.prototype.toPoints = function (transform) {
        var result = [];
        var values = this.values;
        for (var i = 0, imax = values.length; i < imax; i += 2) {
            var point = new Point(values[i + 0], values[i + 1]);
            result.push(transform.apply(point, point));
        }
        return result;
    };
    EShapeLinePoints.prototype.serialize = function (manager) {
        return manager.add("[" + JSON.stringify(this._values) + "," + JSON.stringify(this._segments) + "," + this._style + "]");
    };
    EShapeLinePoints.prototype.calcHitPointAbs = function (x, y, ax, ay, threshold, range, tester, result) {
        var pointCount = this.length;
        if (2 <= pointCount) {
            var pointValues = this._values;
            var pointSegments = this._segments;
            var istart = 0;
            var iend = pointCount;
            if (range) {
                var rangeResult = range(x, y, threshold, pointValues, EShapeLinePoints.WORK_RANGE);
                istart = rangeResult[0];
                iend = rangeResult[1];
            }
            for (var i = istart, imax = Math.min(iend, pointCount - 1), iv = 2 * istart; i < imax; i += 1, iv += 2) {
                if (toIndexOf(pointSegments, i + 1) < 0) {
                    var p0x = pointValues[iv + 0];
                    var p0y = pointValues[iv + 1];
                    var p1x = pointValues[iv + 2];
                    var p1y = pointValues[iv + 3];
                    if (tester(x, y, p0x, p0y, p1x, p1y, i, threshold, result)) {
                        return true;
                    }
                }
            }
            if (2 < pointCount && pointCount <= iend && (this.style & EShapePointsStyle.CLOSED)) {
                if (toIndexOf(pointSegments, 0) < 0) {
                    var i = pointCount - 1;
                    var iv = i << 1;
                    var p0x = pointValues[iv + 0];
                    var p0y = pointValues[iv + 1];
                    var p1x = pointValues[0];
                    var p1y = pointValues[1];
                    if (tester(x, y, p0x, p0y, p1x, p1y, i, threshold, result)) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    EShapeLinePoints.WORK_RANGE = [0, 0];
    return EShapeLinePoints;
}());
export { EShapeLinePoints };
//# sourceMappingURL=e-shape-line-points.js.map