/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DBasePaddingAdjustable = /** @class */ (function () {
    function DBasePaddingAdjustable(target) {
        this._target = target;
        this._adjuster = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
    }
    Object.defineProperty(DBasePaddingAdjustable.prototype, "adjuster", {
        get: function () {
            return this._adjuster;
        },
        enumerable: true,
        configurable: true
    });
    DBasePaddingAdjustable.prototype.getTheme = function () {
        return this._target.getTheme();
    };
    DBasePaddingAdjustable.prototype.setTheme = function (theme) {
        this._target.setTheme(theme);
    };
    DBasePaddingAdjustable.prototype.getLeft = function () {
        return this._target.getLeft() + this._adjuster.left;
    };
    Object.defineProperty(DBasePaddingAdjustable.prototype, "left", {
        get: function () {
            return this._target.left;
        },
        set: function (left) {
            this._target.left = left;
        },
        enumerable: true,
        configurable: true
    });
    DBasePaddingAdjustable.prototype.getTop = function () {
        return this._target.getTop() + this._adjuster.top;
    };
    Object.defineProperty(DBasePaddingAdjustable.prototype, "top", {
        get: function () {
            return this._target.top;
        },
        set: function (top) {
            this._target.top = top;
        },
        enumerable: true,
        configurable: true
    });
    DBasePaddingAdjustable.prototype.getRight = function () {
        return this._target.getRight() + this._adjuster.right;
    };
    Object.defineProperty(DBasePaddingAdjustable.prototype, "right", {
        get: function () {
            return this._target.right;
        },
        set: function (right) {
            this._target.right = right;
        },
        enumerable: true,
        configurable: true
    });
    DBasePaddingAdjustable.prototype.getBottom = function () {
        return this._target.getBottom() + this._adjuster.bottom;
    };
    Object.defineProperty(DBasePaddingAdjustable.prototype, "bottom", {
        get: function () {
            return this._target.bottom;
        },
        set: function (bottom) {
            this._target.bottom = bottom;
        },
        enumerable: true,
        configurable: true
    });
    DBasePaddingAdjustable.prototype.set = function (top, right, bottom, left) {
        this._target.set(top, right, bottom, left);
    };
    return DBasePaddingAdjustable;
}());
export { DBasePaddingAdjustable };
//# sourceMappingURL=d-base-padding-adjustable.js.map