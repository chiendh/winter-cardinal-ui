/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DThemeDarkChartCoordinateLinear = /** @class */ (function () {
    function DThemeDarkChartCoordinateLinear() {
    }
    DThemeDarkChartCoordinateLinear.prototype.isZero = function (value) {
        return Math.abs(value) < 0.00001;
    };
    DThemeDarkChartCoordinateLinear.prototype.toStepScale = function (scale) {
        if (5.5 <= scale) {
            return 10;
        }
        else if (2.2 <= scale) {
            return 5;
        }
        else if (1.1 <= scale) {
            return 2;
        }
        return 1;
    };
    return DThemeDarkChartCoordinateLinear;
}());
export { DThemeDarkChartCoordinateLinear };
//# sourceMappingURL=d-theme-dark-chart-coordinate-linear.js.map