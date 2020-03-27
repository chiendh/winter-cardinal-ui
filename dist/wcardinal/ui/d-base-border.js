/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBorderMask } from "./d-border-mask";
import { isFunction } from "./util/is-function";
import { isString } from "./util/is-string";
var DBaseBorder = /** @class */ (function () {
    function DBaseBorder(theme, options, callback) {
        this._theme = theme;
        this._callback = callback;
        if (options != null && options.border != null) {
            var border = options.border;
            this._color = border.color;
            this._alpha = border.alpha;
            this._width = border.width;
            this._align = border.align;
            this._mask = (isString(border.mask) ? DBorderMask[border.mask] : border.mask);
        }
    }
    DBaseBorder.prototype.getTheme = function () {
        return this._theme;
    };
    DBaseBorder.prototype.setTheme = function (theme) {
        this._theme = theme;
    };
    DBaseBorder.prototype.getColor = function (state) {
        var color = this._color;
        if (color !== undefined) {
            if (isFunction(color)) {
                var result = color(state);
                if (result !== undefined) {
                    return result;
                }
            }
            else {
                return color;
            }
        }
        return this._theme.getBorderColor(state);
    };
    Object.defineProperty(DBaseBorder.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (this._color !== color) {
                this._color = color;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseBorder.prototype.getAlpha = function (state) {
        var alpha = this._alpha;
        if (alpha !== undefined) {
            if (isFunction(alpha)) {
                var result = alpha(state);
                if (result !== undefined) {
                    return result;
                }
            }
            else {
                return alpha;
            }
        }
        return this._theme.getBorderAlpha(state);
    };
    Object.defineProperty(DBaseBorder.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            if (this._alpha !== alpha) {
                this._alpha = alpha;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseBorder.prototype.getWidth = function (state) {
        var width = this._width;
        if (width !== undefined) {
            if (isFunction(width)) {
                var result = width(state);
                if (result !== undefined) {
                    return result;
                }
            }
            else {
                return width;
            }
        }
        return this._theme.getBorderWidth(state);
    };
    Object.defineProperty(DBaseBorder.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            if (this._width !== width) {
                this._width = width;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseBorder.prototype.getAlign = function (state) {
        var align = this._align;
        if (align !== undefined) {
            if (isFunction(align)) {
                var result = align(state);
                if (result !== undefined) {
                    return result;
                }
            }
            else {
                return align;
            }
        }
        return this._theme.getBorderAlign(state);
    };
    Object.defineProperty(DBaseBorder.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (align) {
            if (this._align !== align) {
                this._align = align;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseBorder.prototype.getMask = function (state) {
        var mask = this._mask;
        if (mask !== undefined) {
            if (isFunction(mask)) {
                var result = mask(state);
                if (result !== undefined) {
                    return result;
                }
            }
            else {
                return mask;
            }
        }
        return this._theme.getBorderMask(state);
    };
    Object.defineProperty(DBaseBorder.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        set: function (mask) {
            if (this._mask !== mask) {
                this._mask = mask;
                this.onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseBorder.prototype.onChange = function () {
        var callback = this._callback;
        if (callback != null) {
            callback();
        }
    };
    return DBaseBorder;
}());
export { DBaseBorder };
//# sourceMappingURL=d-base-border.js.map