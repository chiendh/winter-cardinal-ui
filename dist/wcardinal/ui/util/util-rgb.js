/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { toPadded } from "./to-padded";
var UtilRgb = /** @class */ (function () {
    function UtilRgb() {
    }
    UtilRgb.toCode = function (color) {
        return toPadded(color.toString(16).toUpperCase(), 6, "0");
    };
    UtilRgb.fromCode = function (code) {
        var trimmed = code.trim().toLowerCase();
        if (trimmed.length === 6) {
            var color = Number("0x" + trimmed);
            if (color === color) {
                return color;
            }
        }
        return null;
    };
    UtilRgb.fromRgb = function (r, g, b) {
        return ((r * 0xff) << 16) + ((g * 0xff) << 8) + ((b * 0xff) | 0);
    };
    UtilRgb.blend = function (colorA, colorB, t) {
        var ar = ((colorA >> 16) & 0xff);
        var ag = ((colorA >> 8) & 0xff);
        var ab = ((colorA | 0) & 0xff);
        var br = ((colorB >> 16) & 0xff);
        var bg = ((colorB >> 8) & 0xff);
        var bb = ((colorB | 0) & 0xff);
        var w1 = Math.max(0, Math.min(1, t));
        var w0 = 1 - w1;
        var cr = Math.max(0, Math.min(0xff, ar * w0 + br * w1));
        var cg = Math.max(0, Math.min(0xff, ag * w0 + bg * w1));
        var cb = Math.max(0, Math.min(0xff, ab * w0 + bb * w1));
        return (cr << 16) + (cg << 8) + (cb | 0);
    };
    UtilRgb.brighten = function (color, amount) {
        return this.blend(color, 0xffffff, amount);
    };
    UtilRgb.darken = function (color, amount) {
        return this.blend(color, 0x000000, amount);
    };
    return UtilRgb;
}());
export { UtilRgb };
//# sourceMappingURL=util-rgb.js.map