/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DThemeWhiteChartCoordinateLinear = /** @class */ (function () {
    function DThemeWhiteChartCoordinateLinear() {
    }
    DThemeWhiteChartCoordinateLinear.prototype.isZero = function (value) {
        return Math.abs(value) < 0.00001;
    };
    DThemeWhiteChartCoordinateLinear.prototype.toStepScale = function (scale) {
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
    return DThemeWhiteChartCoordinateLinear;
}());
export { DThemeWhiteChartCoordinateLinear };
//# sourceMappingURL=d-theme-white-chart-coordinate-linear.js.map