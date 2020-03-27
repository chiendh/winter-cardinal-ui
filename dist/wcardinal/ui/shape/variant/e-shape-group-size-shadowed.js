/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point } from "pixi.js";
var EShapeGroupSizeShadowed = /** @class */ (function () {
    function EShapeGroupSizeShadowed(parent, x, y) {
        this._parent = parent;
        this._size = new Point(x, y);
    }
    EShapeGroupSizeShadowed.prototype.init = function () {
        // DO NOTHING
    };
    Object.defineProperty(EShapeGroupSizeShadowed.prototype, "x", {
        get: function () {
            return this._size.x;
        },
        set: function (x) {
            var size = this._size;
            if (size.x !== x) {
                var ox = size.x;
                size.x = x;
                this.onChange(ox, size.y);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupSizeShadowed.prototype, "y", {
        get: function () {
            return this._size.y;
        },
        set: function (y) {
            var size = this._size;
            if (size.y !== y) {
                var oy = size.y;
                size.y = y;
                this.onChange(size.x, oy);
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupSizeShadowed.prototype.set = function (x, y) {
        var isChanged = false;
        var size = this._size;
        var ox = size.x;
        var oy = size.y;
        if (x != null && ox !== x) {
            isChanged = true;
            size.x = x;
        }
        if (y != null && oy !== y) {
            isChanged = true;
            size.y = y;
        }
        if (isChanged) {
            this.onChange(ox, oy);
        }
        return this;
    };
    EShapeGroupSizeShadowed.prototype.clone = function () {
        var size = this._size;
        return new EShapeGroupSizeShadowed(this._parent, size.x, size.y);
    };
    EShapeGroupSizeShadowed.prototype.copy = function () {
        // DO NOTHING
    };
    EShapeGroupSizeShadowed.prototype.copyFrom = function (point) {
        var x = point.x;
        var y = point.y;
        var size = this._size;
        var ox = size.x;
        var oy = size.y;
        if (ox !== x || oy !== y) {
            size.x = x;
            size.y = y;
            this.onChange(ox, oy);
        }
        return this;
    };
    EShapeGroupSizeShadowed.prototype.copyTo = function (point) {
        return this._size.copyTo(point);
    };
    EShapeGroupSizeShadowed.prototype.equals = function (point) {
        return this._size.equals(point);
    };
    EShapeGroupSizeShadowed.prototype.fit = function () {
        // DO NOTHING
    };
    EShapeGroupSizeShadowed.prototype.onChange = function (ox, oy) {
        this._parent.onSizeChange();
    };
    return EShapeGroupSizeShadowed;
}());
export { EShapeGroupSizeShadowed };
//# sourceMappingURL=e-shape-group-size-shadowed.js.map