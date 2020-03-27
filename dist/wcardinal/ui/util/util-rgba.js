/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var UtilRgba = /** @class */ (function () {
    function UtilRgba() {
    }
    UtilRgba.toCode = function (color, alpha) {
        var r = (color >> 16) & 0xff;
        var g = (color >> 8) & 0xff;
        var b = (color & 0xff);
        return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
    };
    return UtilRgba;
}());
export { UtilRgba };
//# sourceMappingURL=util-rgba.js.map