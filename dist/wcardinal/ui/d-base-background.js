/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isFunction } from "./util/is-function";
var DBaseBackground = /** @class */ (function () {
    function DBaseBackground(theme, options, callback) {
        this._theme = theme;
        this._callback = callback;
        if (options != null && options.background != null) {
            var background = options.background;
            this._color = background.color;
            this._alpha = background.alpha;
        }
    }
    DBaseBackground.prototype.getTheme = function () {
        return this._theme;
    };
    DBaseBackground.prototype.setTheme = function (theme) {
        this._theme = theme;
    };
    DBaseBackground.prototype.getColor = function (state) {
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
        return this._theme.getBackgroundColor(state);
    };
    Object.defineProperty(DBaseBackground.prototype, "color", {
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
    DBaseBackground.prototype.getAlpha = function (state) {
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
        return this._theme.getBackgroundAlpha(state);
    };
    Object.defineProperty(DBaseBackground.prototype, "alpha", {
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
    DBaseBackground.prototype.onChange = function () {
        var callback = this._callback;
        if (callback != null) {
            callback();
        }
    };
    return DBaseBackground;
}());
export { DBaseBackground };
//# sourceMappingURL=d-base-background.js.map