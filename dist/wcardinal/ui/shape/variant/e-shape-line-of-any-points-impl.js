/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point } from "pixi.js";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeLineOfAnyPointsFillImpl } from "./e-shape-line-of-any-points-fill-impl";
import { EShapeLineOfAnyPointsPointImpl } from "./e-shape-line-of-any-points-point-impl";
import { EShapeLineOfAnyPointsStrokeImpl } from "./e-shape-line-of-any-points-stroke-impl";
var EShapeLineOfAnyPointsImpl = /** @class */ (function () {
    function EShapeLineOfAnyPointsImpl(parent) {
        this._parent = parent;
        this._values = [];
        this._valuesLength = 0;
        this._segments = [];
        this._size = new EShapeLineOfAnyPointsPointImpl(this, EShapeDefaults.SIZE_X, EShapeDefaults.SIZE_Y);
        this._offset = new EShapeLineOfAnyPointsPointImpl(this, 0, 0);
        this._fill = new EShapeLineOfAnyPointsFillImpl(parent);
        this._stroke = new EShapeLineOfAnyPointsStrokeImpl(parent);
        this._id = 0;
    }
    Object.defineProperty(EShapeLineOfAnyPointsImpl.prototype, "length", {
        get: function () {
            return this._values.length >> 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsImpl.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsImpl.prototype, "values", {
        get: function () {
            return this._values;
        },
        set: function (values) {
            this.set(values, undefined, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsImpl.prototype, "segments", {
        get: function () {
            return this._segments;
        },
        set: function (segments) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsImpl.prototype, "style", {
        get: function () {
            return EShapePointsStyle.NONE;
        },
        set: function (style) {
            this.set(undefined, undefined, style);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsImpl.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsImpl.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsImpl.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsImpl.prototype, "stroke", {
        get: function () {
            return this._stroke;
        },
        enumerable: true,
        configurable: true
    });
    EShapeLineOfAnyPointsImpl.prototype.copy = function (source) {
        return this.set(source.values, source.segments, source.style);
    };
    EShapeLineOfAnyPointsImpl.prototype.set = function (newValues, newSegments, newStyle) {
        var isDirty = false;
        var isUpdated = false;
        // Values
        if (newValues != null) {
            var values = this._values;
            var valuesLength = this._valuesLength;
            var newValuesLength = newValues.length;
            if (values !== newValues) {
                var iupdate = Math.min(valuesLength, newValuesLength);
                for (var i = 0; i < iupdate; ++i) {
                    values[i] = newValues[i];
                }
                for (var i = iupdate; i < newValuesLength; ++i) {
                    values.push(newValues[i]);
                }
                if (valuesLength !== newValuesLength) {
                    values.length = newValuesLength;
                    this._valuesLength = newValuesLength;
                    isDirty = true;
                }
                else {
                    isUpdated = true;
                }
            }
            else {
                if (valuesLength !== newValuesLength) {
                    this._valuesLength = newValuesLength;
                    isDirty = true;
                }
                else {
                    isUpdated = true;
                }
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
    EShapeLineOfAnyPointsImpl.prototype.updateUploaded = function () {
        this._parent.updateUploaded();
    };
    EShapeLineOfAnyPointsImpl.prototype.clone = function (parent) {
        return new EShapeLineOfAnyPointsImpl(parent);
    };
    EShapeLineOfAnyPointsImpl.prototype.toPoints = function (transform) {
        var result = [];
        var values = this.values;
        for (var i = 0, imax = values.length; i < imax; i += 2) {
            var point = new Point(values[i + 0], values[i + 1]);
            result.push(transform.apply(point, point));
        }
        return result;
    };
    EShapeLineOfAnyPointsImpl.prototype.serialize = function (manager) {
        return manager.add("[]");
    };
    EShapeLineOfAnyPointsImpl.prototype.calcHitPointAbs = function (x, y, threshold, range, tester, result) {
        var pointCount = this.length;
        var pointValues = this._values;
        var size = this._size;
        var offset = this._offset;
        var istart = 0;
        var iend = pointCount;
        if (range) {
            var s = size.getLimit() * 0.5;
            var o = offset.getLimit();
            var rangeResult = range(x, y, s, s, o, o, threshold, pointValues, EShapeLineOfAnyPointsImpl.WORK_RANGE);
            istart = rangeResult[0];
            iend = rangeResult[1];
        }
        tester = tester;
        for (var i = istart, imax = Math.min(iend, pointCount), iv = istart << 1; i < imax; i += 1, iv += 2) {
            var px = pointValues[iv];
            var py = pointValues[iv + 1];
            var sx = size.getX(i) * 0.5;
            var sy = size.getY(i) * 0.5;
            var ox = offset.getX(i);
            var oy = offset.getY(i);
            if (tester(x, y, sx, sy, ox, oy, px, py, i, threshold, result)) {
                return true;
            }
        }
        return false;
    };
    EShapeLineOfAnyPointsImpl.WORK_RANGE = [0, 0];
    return EShapeLineOfAnyPointsImpl;
}());
export { EShapeLineOfAnyPointsImpl };
//# sourceMappingURL=e-shape-line-of-any-points-impl.js.map