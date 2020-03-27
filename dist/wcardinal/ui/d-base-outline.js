/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBorderMask } from "./d-border-mask";
import { isFunction } from "./util/is-function";
import { isString } from "./util/is-string";
var DBaseOutline = /** @class */ (function () {
    function DBaseOutline(theme, options, callback) {
        this._theme = theme;
        this._callback = callback;
        if (options != null && options.outline != null) {
            var outline = options.outline;
            this._color = outline.color;
            this._alpha = outline.alpha;
            this._width = outline.width;
            this._offset = outline.offset;
            this._align = outline.align;
            this._mask = (isString(outline.mask) ? DBorderMask[outline.mask] : outline.mask);
        }
    }
    DBaseOutline.prototype.getTheme = function () {
        return this._theme;
    };
    DBaseOutline.prototype.setTheme = function (theme) {
        this._theme = theme;
    };
    DBaseOutline.prototype.getColor = function (state) {
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
        return this._theme.getOutlineColor(state);
    };
    Object.defineProperty(DBaseOutline.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (this._color !== color) {
                this._color = color;
                var callback = this._callback;
                if (callback != null) {
                    callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseOutline.prototype.getAlpha = function (state) {
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
        return this._theme.getOutlineAlpha(state);
    };
    Object.defineProperty(DBaseOutline.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            if (this._alpha !== alpha) {
                this._alpha = alpha;
                var callback = this._callback;
                if (callback != null) {
                    callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseOutline.prototype.getWidth = function (state) {
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
        return this._theme.getOutlineWidth(state);
    };
    Object.defineProperty(DBaseOutline.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            if (this._width !== width) {
                this._width = width;
                var callback = this._callback;
                if (callback != null) {
                    callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseOutline.prototype.getOffset = function (state) {
        var offset = this._offset;
        if (offset !== undefined) {
            if (isFunction(offset)) {
                var result = offset(state);
                if (result !== undefined) {
                    return result;
                }
            }
            else {
                return offset;
            }
        }
        return this._theme.getOutlineOffset(state);
    };
    Object.defineProperty(DBaseOutline.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (offset) {
            if (this._offset !== offset) {
                this._offset = offset;
                var callback = this._callback;
                if (callback != null) {
                    callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseOutline.prototype.getAlign = function (state) {
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
        return this._theme.getOutlineAlign(state);
    };
    Object.defineProperty(DBaseOutline.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (align) {
            if (this._align !== align) {
                this._align = align;
                var callback = this._callback;
                if (callback != null) {
                    callback();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseOutline.prototype.getMask = function (state) {
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
        return this._theme.getOutlineMask(state);
    };
    Object.defineProperty(DBaseOutline.prototype, "mask", {
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
    return DBaseOutline;
}());
export { DBaseOutline };
//# sourceMappingURL=d-base-outline.js.map