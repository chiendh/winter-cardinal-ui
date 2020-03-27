/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var UtilAlpha = /** @class */ (function () {
    function UtilAlpha() {
    }
    UtilAlpha.blend = function (alphaA, alphaB, t) {
        var w = Math.max(0, Math.min(1, t));
        return Math.max(0, Math.min(1, alphaA * (1 - w) + alphaB * w));
    };
    return UtilAlpha;
}());
export { UtilAlpha };
//# sourceMappingURL=util-alpha.js.map