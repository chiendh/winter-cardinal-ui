/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DChartCoordinateLogTick = /** @class */ (function () {
    function DChartCoordinateLogTick(theme) {
        this._theme = theme;
    }
    DChartCoordinateLogTick.prototype.calcStepMajor = function (domainMin, domainMax, count) {
        if (0 < count) {
            var span = Math.abs(domainMax - domainMin) / count;
            var power = Math.floor(Math.log(span) / Math.LN10);
            var base = Math.pow(10, power);
            return this._theme.toStepScale(span / base) * base;
        }
        return -1;
    };
    DChartCoordinateLogTick.prototype.calcStepMinor = function (step, minorCount) {
        if (0 <= step) {
            return step / (minorCount + 1);
        }
        else {
            return -1;
        }
    };
    DChartCoordinateLogTick.prototype.calcTickMinorPositions = function (step, count, majorPosition, rangeMin, rangeMax, iresult, result) {
        for (var i = 0; i < count; i += 1) {
            var minorPosition = majorPosition + (i + 1) * step;
            if (rangeMin <= minorPosition && minorPosition <= rangeMax) {
                result[iresult++] = minorPosition;
            }
        }
    };
    DChartCoordinateLogTick.prototype.calculate = function (domainFrom, domainTo, majorCount, minorCountPerMajor, minorCount, majorResult, minorResult, coordinate) {
        if (majorCount <= 0) {
            return;
        }
        var transform = coordinate.transform;
        var domainFromMapped = coordinate.map(domainFrom);
        var domainToMapped = coordinate.map(domainTo);
        var domainMinMapped = Math.min(domainFromMapped, domainToMapped);
        var domainMaxMapped = Math.max(domainFromMapped, domainToMapped);
        var majorStepMapped = this.calcStepMajor(domainMinMapped, domainMaxMapped, majorCount);
        if (majorStepMapped <= 0) {
            var domainMin = Math.min(domainFrom, domainTo);
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
        var idomainStartMapped = Math.floor(domainMinMapped / majorStepMapped) - 1;
        var idomainEndMapped = Math.ceil(domainMaxMapped / majorStepMapped) + 1;
        // Major / minor tick positions
        var minorStepMapped = this.calcStepMinor(majorStepMapped, minorCountPerMajor);
        var imajor = 0;
        var iminor = 0;
        for (var i = idomainStartMapped; i <= idomainEndMapped; ++i) {
            var majorPositionMapped = i * majorStepMapped;
            if (imajor < majorCount) {
                if (domainMinMapped <= majorPositionMapped && majorPositionMapped <= domainMaxMapped) {
                    var majorPosition = coordinate.unmap(majorPositionMapped);
                    var majorProjectedPosition = transform.map(majorPositionMapped);
                    var majorStep = coordinate.unmap(majorPositionMapped - 1);
                    var imajorResult = imajor * 3;
                    majorResult[imajorResult + 0] = majorPosition;
                    majorResult[imajorResult + 1] = majorProjectedPosition;
                    majorResult[imajorResult + 2] = majorStep;
                    imajor += 1;
                }
            }
            for (var j = 0; j < minorCountPerMajor; j += 1) {
                if (iminor < minorCount) {
                    var minorPositionMapped = majorPositionMapped + (j + 1) * minorStepMapped;
                    if (domainMinMapped <= minorPositionMapped && minorPositionMapped <= domainMaxMapped) {
                        var minorPosition = coordinate.unmap(minorPositionMapped);
                        var minorProjectedPosition = transform.map(minorPositionMapped);
                        var minorStep = coordinate.unmap(minorPositionMapped - 1);
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
    return DChartCoordinateLogTick;
}());
export { DChartCoordinateLogTick };
//# sourceMappingURL=d-chart-coordinate-log-tick.js.map