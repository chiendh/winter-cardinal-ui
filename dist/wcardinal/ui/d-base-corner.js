/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DCornerMask } from "./d-corner-mask";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";
var DBaseCorner = /** @class */ (function () {
    function DBaseCorner(theme, options, callback) {
        this._theme = theme;
        this._callback = callback;
        if (options != null && options.corner != null) {
            var corner = options.corner;
            if (isNumber(corner)) {
                this._radius = corner;
                this._mask = undefined;
            }
            else {
                this._radius = corner.radius;
                this._mask = (isString(corner.mask) ? DCornerMask[corner.mask] : corner.mask);
            }
        }
    }
    DBaseCorner.prototype.getTheme = function () {
        return this._theme;
    };
    DBaseCorner.prototype.setTheme = function (theme) {
        this._theme = theme;
    };
    DBaseCorner.prototype.getRadius = function () {
        var radius = this._radius;
        return (radius !== undefined ? radius : this._theme.getCornerRadius());
    };
    Object.defineProperty(DBaseCorner.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (radius) {
            if (this._radius !== radius) {
                this._radius = radius;
                var callback = this._callback;
                if (callback != null) {
                    callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseCorner.prototype.getMask = function () {
        var mask = this._mask;
        return (mask !== undefined ? mask : this._theme.getCornerMask());
    };
    Object.defineProperty(DBaseCorner.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        set: function (mask) {
            if (this._mask !== mask) {
                this._mask = mask;
                var callback = this._callback;
                if (callback != null) {
                    callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseCorner.prototype.set = function (radius, mask) {
        var isChanged = false;
        if (this._radius !== radius) {
            this._radius = radius;
            isChanged = true;
        }
        if (this._mask !== mask) {
            this._mask = mask;
            isChanged = true;
        }
        var callback = this._callback;
        if (isChanged && callback != null) {
            callback();
        }
    };
    return DBaseCorner;
}());
export { DBaseCorner };
//# sourceMappingURL=d-base-corner.js.map