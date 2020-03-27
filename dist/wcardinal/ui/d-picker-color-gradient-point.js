/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DPickerColorGradientPoint = /** @class */ (function () {
    function DPickerColorGradientPoint(color, alpha, position, selected, callback) {
        this._color = color;
        this._alpha = alpha;
        this._position = position;
        this._callback = callback;
        this._selected = selected;
    }
    DPickerColorGradientPoint.prototype.set = function (color, alpha, position, selected) {
        if (this._color !== color || this._alpha !== alpha || this._position !== position || this._selected !== selected) {
            this._color = color;
            this._alpha = alpha;
            this._position = position;
            this._selected = selected;
            this._callback(this);
        }
    };
    Object.defineProperty(DPickerColorGradientPoint.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (this._color !== color) {
                this._color = color;
                this._callback(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerColorGradientPoint.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            if (this._alpha !== alpha) {
                this._alpha = alpha;
                this._callback(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerColorGradientPoint.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (position) {
            if (this._position !== position) {
                this._position = position;
                this._callback(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerColorGradientPoint.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            if (this._selected !== selected) {
                this._selected = selected;
                this._callback(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DPickerColorGradientPoint.prototype.toObject = function () {
        return {
            color: this._color,
            alpha: this._alpha,
            position: this._position
        };
    };
    return DPickerColorGradientPoint;
}());
export { DPickerColorGradientPoint };
//# sourceMappingURL=d-picker-color-gradient-point.js.map