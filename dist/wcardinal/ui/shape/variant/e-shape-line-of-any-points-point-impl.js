/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isFunction, isNumber } from "../../util";
import { isStatic } from "./is-static";
import { toComputed } from "./to-computed";
var EShapeLineOfAnyPointsPointImpl = /** @class */ (function () {
    function EShapeLineOfAnyPointsPointImpl(parent, defX, defY) {
        this._parent = parent;
        this._id = 0;
        this._x = null;
        this._y = null;
        this._defX = defX;
        this._defY = defY;
        this._limit = null;
        this._limitComputed = 0;
        this._limitId = -1;
        this._limitParentLength = 0;
    }
    Object.defineProperty(EShapeLineOfAnyPointsPointImpl.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsPointImpl.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this.set(x, undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsPointImpl.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this.set(undefined, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeLineOfAnyPointsPointImpl.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        set: function (limit) {
            this._limit = limit;
        },
        enumerable: true,
        configurable: true
    });
    EShapeLineOfAnyPointsPointImpl.prototype.set = function (x, y) {
        var isChanged = false;
        if (x !== undefined && this._x !== x) {
            isChanged = true;
            this._x = x;
        }
        if (y !== undefined && this._y !== y) {
            isChanged = true;
            this._y = y;
        }
        if (isChanged) {
            this._id += 1;
            this._parent.updateUploaded();
        }
    };
    EShapeLineOfAnyPointsPointImpl.prototype.getX = function (index) {
        return toComputed(index, this._x, this._defX);
    };
    EShapeLineOfAnyPointsPointImpl.prototype.getY = function (index) {
        return toComputed(index, this._y, this._defY);
    };
    EShapeLineOfAnyPointsPointImpl.prototype.getLimit = function () {
        var limit = this._limit;
        if (limit != null) {
            return limit;
        }
        this.updateLimitComputed();
        return this._limitComputed;
    };
    EShapeLineOfAnyPointsPointImpl.prototype.updateLimitComputed = function () {
        var limitId = this._id;
        var parent = this._parent;
        var limitParentLength = parent.length;
        if (this._limitId !== limitId || this._limitParentLength !== limitParentLength) {
            this._limitId = limitId;
            this._limitParentLength = limitParentLength;
            this._limitComputed = Math.max(this.calcLimit(this._x, limitParentLength, this._defX), this.calcLimit(this._y, limitParentLength, this._defY));
        }
    };
    EShapeLineOfAnyPointsPointImpl.prototype.calcLimit = function (value, parentLenght, def) {
        if (isNumber(value)) {
            return Math.abs(value);
        }
        else if (isFunction(value)) {
            if (0 < parentLenght) {
                var result = Math.abs(value(0));
                for (var i = 1; i < parentLenght; ++i) {
                    result = Math.max(result, Math.abs(value(i)));
                }
                return result;
            }
            return 0;
        }
        else if (value != null) {
            var l = value.length;
            if (0 < l) {
                var result = value[0];
                for (var i = 1; i < l; ++i) {
                    result = Math.max(result, Math.abs(value[i]));
                }
                return result;
            }
            return 0;
        }
        else {
            return Math.abs(def);
        }
    };
    EShapeLineOfAnyPointsPointImpl.prototype.isStaticX = function () {
        return isStatic(this._x);
    };
    EShapeLineOfAnyPointsPointImpl.prototype.isStaticY = function () {
        return isStatic(this._y);
    };
    EShapeLineOfAnyPointsPointImpl.prototype.toDirty = function () {
        this._id += 1;
    };
    return EShapeLineOfAnyPointsPointImpl;
}());
export { EShapeLineOfAnyPointsPointImpl };
//# sourceMappingURL=e-shape-line-of-any-points-point-impl.js.map