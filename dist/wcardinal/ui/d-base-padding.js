/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isNumber } from "./util/is-number";
var DBasePadding = /** @class */ (function () {
    function DBasePadding(theme, options, callback) {
        this._theme = theme;
        this._callback = callback;
        if (options != null && options.padding != null) {
            var padding = options.padding;
            if (isNumber(padding)) {
                this._left = padding;
                this._top = padding;
                this._right = padding;
                this._bottom = padding;
            }
            else {
                this._left = padding.left;
                this._top = padding.top;
                this._right = padding.right;
                this._bottom = padding.bottom;
            }
        }
    }
    DBasePadding.prototype.getTheme = function () {
        return this._theme;
    };
    DBasePadding.prototype.setTheme = function (theme) {
        this._theme = theme;
    };
    DBasePadding.prototype.getLeft = function () {
        var left = this._left;
        return left !== undefined ? left : this._theme.getPaddingLeft();
    };
    Object.defineProperty(DBasePadding.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (left) {
            if (this._left !== left) {
                this._left = left;
                if (this._callback != null) {
                    this._callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBasePadding.prototype.getTop = function () {
        var top = this._top;
        return top !== undefined ? top : this._theme.getPaddingTop();
    };
    Object.defineProperty(DBasePadding.prototype, "top", {
        get: function () {
            return this._top;
        },
        set: function (top) {
            if (this._top !== top) {
                this._top = top;
                if (this._callback != null) {
                    this._callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBasePadding.prototype.getRight = function () {
        var right = this._right;
        return right !== undefined ? right : this._theme.getPaddingRight();
    };
    Object.defineProperty(DBasePadding.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (right) {
            if (this._right !== right) {
                this._right = right;
                if (this._callback != null) {
                    this._callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBasePadding.prototype.getBottom = function () {
        var bottom = this._bottom;
        return bottom !== undefined ? bottom : this._theme.getPaddingBottom();
    };
    Object.defineProperty(DBasePadding.prototype, "bottom", {
        get: function () {
            return this._bottom;
        },
        set: function (bottom) {
            if (this._bottom !== bottom) {
                this._bottom = bottom;
                if (this._callback != null) {
                    this._callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBasePadding.prototype.set = function (top, right, bottom, left) {
        if (right == null) {
            this.top = top;
            this.right = top;
            this.bottom = top;
            this.left = top;
        }
        else if (bottom == null) {
            this.top = top;
            this.right = right;
            this.bottom = top;
            this.left = right;
        }
        else if (left == null) {
            this.top = top;
            this.right = right;
            this.bottom = bottom;
            this.left = right;
        }
        else {
            this.top = top;
            this.right = right;
            this.bottom = bottom;
            this.left = left;
        }
        if (this._callback != null) {
            this._callback();
        }
    };
    return DBasePadding;
}());
export { DBasePadding };
//# sourceMappingURL=d-base-padding.js.map