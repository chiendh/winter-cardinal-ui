/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var ESnapperResult = /** @class */ (function () {
    function ESnapperResult() {
        this.distance = NaN;
        this.result = 0;
        this.threshold = 10;
    }
    ESnapperResult.prototype.reset = function (value, scale) {
        this.distance = NaN;
        this.result = value;
        this.threshold = (0.0001 < scale ? 10 / scale : 10);
    };
    ESnapperResult.prototype.set = function (value, snapped) {
        var newDistance = Math.abs(snapped - value);
        if (newDistance <= this.threshold) {
            var oldDistance = this.distance;
            if (oldDistance !== oldDistance || newDistance < oldDistance) {
                this.distance = newDistance;
                this.result = snapped;
            }
        }
    };
    return ESnapperResult;
}());
export { ESnapperResult };
//# sourceMappingURL=e-snapper-result.js.map