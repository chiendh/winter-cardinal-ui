/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DAnimationTimings = /** @class */ (function () {
    function DAnimationTimings() {
    }
    DAnimationTimings.LINEAR = function (t) {
        return t;
    };
    DAnimationTimings.ELASTIC = function (t) {
        return t * (3 * (1 - t) * (1 - t) + t * (3 * (1 - t) + t));
    };
    DAnimationTimings.QUAD_IN_OUT = function (t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };
    return DAnimationTimings;
}());
export { DAnimationTimings };
//# sourceMappingURL=d-animation-timings.js.map