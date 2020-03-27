/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateContainerSubImpl } from "./d-chart-coordinate-container-sub-impl";
import { isArray } from "./util/is-array";
var DChartCoordinateContainerImpl = /** @class */ (function () {
    function DChartCoordinateContainerImpl(plotArea, options) {
        this._plotArea = plotArea;
        var x = this._x = new DChartCoordinateContainerSubImpl(this, DChartCoordinateDirection.X);
        var y = this._y = new DChartCoordinateContainerSubImpl(this, DChartCoordinateDirection.Y);
        if (options) {
            var cxs = options.x;
            if (cxs) {
                if (isArray(cxs)) {
                    for (var i = 0, imax = cxs.length; i < imax; ++i) {
                        x.add(cxs[i]);
                    }
                }
                else {
                    x.add(cxs);
                }
            }
            var cys = options.y;
            if (cys) {
                if (isArray(cys)) {
                    for (var i = 0, imax = cys.length; i < imax; ++i) {
                        y.add(cys[i]);
                    }
                }
                else {
                    y.add(cys);
                }
            }
        }
    }
    Object.defineProperty(DChartCoordinateContainerImpl.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartCoordinateContainerImpl.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartCoordinateContainerImpl.prototype, "plotArea", {
        get: function () {
            return this._plotArea;
        },
        enumerable: true,
        configurable: true
    });
    DChartCoordinateContainerImpl.prototype.fit = function (domainFrom, domainTo, rangeFrom, rangeTo) {
        this._x.fit(domainFrom, domainTo);
        this._y.fit(rangeFrom, rangeTo);
        return this;
    };
    DChartCoordinateContainerImpl.prototype.mark = function (domainFrom, domainTo, rangeFrom, rangeTo) {
        this._x.mark(domainFrom, domainTo);
        this._y.mark(rangeFrom, rangeTo);
        return this;
    };
    DChartCoordinateContainerImpl.prototype.blend = function (ratio) {
        this._x.blend(ratio);
        this._y.blend(ratio);
        return this;
    };
    return DChartCoordinateContainerImpl;
}());
export { DChartCoordinateContainerImpl };
//# sourceMappingURL=d-chart-coordinate-container-impl.js.map