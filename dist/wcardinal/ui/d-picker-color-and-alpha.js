/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DPickerColorAndAlpha = /** @class */ (function () {
    function DPickerColorAndAlpha(colorAndAlpha, onColorChange, onAlphaChange) {
        this._colorAndAlpha = colorAndAlpha;
        this._onColorChange = onColorChange;
        this._onAlphaChange = onAlphaChange;
    }
    Object.defineProperty(DPickerColorAndAlpha.prototype, "color", {
        get: function () {
            return this._colorAndAlpha.color;
        },
        set: function (color) {
            if (this._colorAndAlpha.color !== color) {
                var callback = this._onColorChange;
                if (callback != null) {
                    callback(color);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerColorAndAlpha.prototype, "alpha", {
        get: function () {
            return this._colorAndAlpha.alpha;
        },
        set: function (alpha) {
            if (this._colorAndAlpha.alpha !== alpha) {
                var callback = this._onAlphaChange;
                if (callback != null) {
                    callback(alpha);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return DPickerColorAndAlpha;
}());
export { DPickerColorAndAlpha };
//# sourceMappingURL=d-picker-color-and-alpha.js.map