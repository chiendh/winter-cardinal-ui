/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DBasePoint = /** @class */ (function () {
    function DBasePoint(point, cb, scope) {
        this._point = point;
        this.cb = cb;
    }
    Object.defineProperty(DBasePoint.prototype, "x", {
        get: function () {
            return this._point.x;
        },
        set: function (x) {
            var point = this._point;
            if (point.x !== x) {
                point.x = x;
                this.cb.call(this.scope);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBasePoint.prototype, "y", {
        get: function () {
            return this._point.y;
        },
        set: function (y) {
            var point = this._point;
            if (point.y !== y) {
                point.y = y;
                this.cb.call(this.scope);
            }
        },
        enumerable: true,
        configurable: true
    });
    DBasePoint.prototype.set = function (x, y) {
        var point = this._point;
        if (point.x !== x || point.y !== y) {
            point.set(x, y);
            this.cb.call(this.scope);
        }
        return this;
    };
    DBasePoint.prototype.copyFrom = function (target) {
        var point = this._point;
        if (point.x !== target.x || point.y !== target.y) {
            point.copyFrom(target);
            this.cb.call(this.scope);
        }
        return this;
    };
    DBasePoint.prototype.copyTo = function (target) {
        return target.copyFrom(this._point);
    };
    DBasePoint.prototype.copy = function () {
        return this.copyFrom(arguments[0]);
    };
    DBasePoint.prototype.clone = function (cb, scope) {
        cb = cb || this.cb;
        scope = scope || this.scope;
        return new DBasePoint(this._point, cb, scope);
    };
    DBasePoint.prototype.equals = function (p) {
        return this._point.equals(p);
    };
    return DBasePoint;
}());
export { DBasePoint };
//# sourceMappingURL=d-base-point.js.map