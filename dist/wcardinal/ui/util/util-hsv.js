/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var UtilHsv = /** @class */ (function () {
    function UtilHsv() {
    }
    UtilHsv.fromRgb = function (color) {
        var r = (color & 0xff0000) >> 16;
        var g = (color & 0x00ff00) >> 8;
        var b = (color & 0x0000ff) | 0;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var length = max - min;
        var h = 0;
        if (0 < length) {
            if (r === max) {
                h = 60 * (g - b) / length;
            }
            else if (g === max) {
                h = 60 * (b - r) / length + 120;
            }
            else if (b === max) {
                h = 60 * (r - g) / length + 240;
            }
            if (h < 0) {
                h += 360;
            }
        }
        var s = (length / max) * 255;
        var v = max;
        return [h, s, v];
    };
    UtilHsv.toRgb = function (h, s, v) {
        var max = v;
        var min = v - (s / 255) * v;
        var length = max - min;
        var r = 0;
        var g = 0;
        var b = 0;
        if (h <= 60) {
            r = max;
            g = (h / 60) * length + min;
            b = min;
        }
        else if (h <= 120) {
            r = ((120 - h) / 60) * length + min;
            g = max;
            b = min;
        }
        else if (h <= 180) {
            r = min;
            g = max;
            b = ((h - 120) / 60) * length + min;
        }
        else if (h <= 240) {
            r = min;
            g = ((240 - h) / 60) * length + min;
            b = max;
        }
        else if (h <= 300) {
            r = ((h - 240) / 60) * length + min;
            g = min;
            b = max;
        }
        else {
            r = max;
            g = min;
            b = ((360 - h) / 60) * length + min;
        }
        r = Math.max(0, Math.min(255, r));
        g = Math.max(0, Math.min(255, g));
        b = Math.max(0, Math.min(255, b));
        return (r << 16) | (g << 8) | b;
    };
    return UtilHsv;
}());
export { UtilHsv };
//# sourceMappingURL=util-hsv.js.map