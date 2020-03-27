/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DChartCoordinateLinearTick = /** @class */ (function () {
    function DChartCoordinateLinearTick(theme) {
        this._theme = theme;
    }
    DChartCoordinateLinearTick.prototype.calcStepMajor = function (domainMin, domainMax, count) {
        if (0 < count) {
            var span = Math.abs(domainMax - domainMin) / count;
            var power = Math.floor(Math.log(span) / Math.LN10);
            var base = Math.pow(10, power);
            return this._theme.toStepScale(span / base) * base;
        }
        return -1;
    };
    DChartCoordinateLinearTick.prototype.calcStepMinor = function (step, minorCount) {
        if (0 <= step) {
            return step / (minorCount + 1);
        }
        else {
            return -1;
        }
    };
    DChartCoordinateLinearTick.prototype.calcTickMinorPositions = function (step, count, majorPosition, rangeMin, rangeMax, iresult, result) {
        for (var i = 0; i < count; i += 1) {
            var minorPosition = majorPosition + (i + 1) * step;
            if (rangeMin <= minorPosition && minorPosition <= rangeMax) {
                result[iresult++] = minorPosition;
            }
        }
    };
    DChartCoordinateLinearTick.prototype.calculate = function (domainFrom, domainTo, majorCount, minorCountPerMajor, minorCount, majorResult, minorResult, coordinate) {
        if (majorCount <= 0) {
            return;
        }
        var transform = coordinate.transform;
        var domainMin = Math.min(domainFrom, domainTo);
        var domainMax = Math.max(domainFrom, domainTo);
        var majorStep = this.calcStepMajor(domainMin, domainMax, majorCount);
        if (majorStep <= 0) {
            majorResult[0] = domainMin;
            majorResult[1] = transform.map(coordinate.map(domainMin));
            majorResult[2] = 0;
            for (var i = 1; i < majorCount; ++i) {
                var imajorResult = i * 3;
                majorResult[imajorResult + 0] = NaN;
                majorResult[imajorResult + 1] = NaN;
                majorResult[imajorResult + 2] = NaN;
            }
            for (var i = 0; i < minorCount; ++i) {
                var iminorResult = i * 3;
                minorResult[iminorResult + 0] = NaN;
                minorResult[iminorResult + 1] = NaN;
                minorResult[iminorResult + 2] = NaN;
            }
            return;
        }
        // Major tick start position
        var idomainStart = Math.floor(domainMin / majorStep) - 1;
        var idomainEnd = Math.ceil(domainMax / majorStep) + 1;
        // Major / minor tick positions
        var minorStep = this.calcStepMinor(majorStep, minorCountPerMajor);
        var imajor = 0;
        var iminor = 0;
        for (var i = idomainStart; i <= idomainEnd; ++i) {
            var majorPosition = i * majorStep;
            if (imajor < majorCount) {
                if (domainMin <= majorPosition && majorPosition <= domainMax) {
                    var majorProjectedPosition = transform.map(coordinate.map(majorPosition));
                    var imajorResult = imajor * 3;
                    majorResult[imajorResult + 0] = majorPosition;
                    majorResult[imajorResult + 1] = majorProjectedPosition;
                    majorResult[imajorResult + 2] = majorStep;
                    imajor += 1;
                }
            }
            for (var j = 0; j < minorCountPerMajor; j += 1) {
                if (iminor < minorCount) {
                    var minorPosition = majorPosition + (j + 1) * minorStep;
                    if (domainMin <= minorPosition && minorPosition <= domainMax) {
                        var minorProjectedPosition = transform.map(coordinate.map(minorPosition));
                        var iminorResult = iminor * 3;
                        minorResult[iminorResult + 0] = minorPosition;
                        minorResult[iminorResult + 1] = minorProjectedPosition;
                        minorResult[iminorResult + 2] = minorStep;
                        iminor += 1;
                    }
                }
            }
        }
        for (var i = imajor; i < majorCount; ++i) {
            var imajorResult = i * 3;
            majorResult[imajorResult + 0] = NaN;
            majorResult[imajorResult + 1] = NaN;
            majorResult[imajorResult + 2] = NaN;
        }
        for (var i = iminor; i < minorCount; ++i) {
            var iminorResult = i * 3;
            minorResult[iminorResult + 0] = NaN;
            minorResult[iminorResult + 1] = NaN;
            minorResult[iminorResult + 2] = NaN;
        }
    };
    return DChartCoordinateLinearTick;
}());
export { DChartCoordinateLinearTick };
//# sourceMappingURL=d-chart-coordinate-linear-tick.js.map