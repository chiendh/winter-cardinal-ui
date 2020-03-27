/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isNumber } from "./util/is-number";
var DChartCoordinateContainerSubImpl = /** @class */ (function () {
    function DChartCoordinateContainerSubImpl(container, direction) {
        this._container = container;
        this._direction = direction;
        this._list = [];
    }
    Object.defineProperty(DChartCoordinateContainerSubImpl.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    DChartCoordinateContainerSubImpl.prototype.add = function (coordinate, index) {
        var list = this._list;
        if (index == null) {
            list.push(coordinate);
        }
        else if (0 <= index && index < list.length) {
            list.splice(index, 0, coordinate);
        }
        else {
            list.push(coordinate);
        }
        coordinate.bind(this, this._direction);
        return this;
    };
    DChartCoordinateContainerSubImpl.prototype.get = function (index) {
        var list = this._list;
        if (0 <= index && index < list.length) {
            return list[index];
        }
        return null;
    };
    DChartCoordinateContainerSubImpl.prototype.indexOf = function (coordinate) {
        return this._list.indexOf(coordinate);
    };
    DChartCoordinateContainerSubImpl.prototype.remove = function (coordinateOrIndex) {
        var list = this._list;
        if (isNumber(coordinateOrIndex)) {
            var index = coordinateOrIndex;
            if (0 <= index && index < list.length) {
                var removed = list.splice(index, 1)[0];
                removed.unbind();
                return removed;
            }
        }
        else {
            var coordinate = coordinateOrIndex;
            var index = list.indexOf(coordinate);
            if (0 <= index) {
                list.splice(index, 1);
                coordinate.unbind();
                return coordinate;
            }
        }
        return null;
    };
    DChartCoordinateContainerSubImpl.prototype.clear = function () {
        var list = this._list;
        for (var i = 0, imax = list.length; i < imax; ++i) {
            list[i].unbind();
        }
        list.length = 0;
        return this;
    };
    DChartCoordinateContainerSubImpl.prototype.destroy = function () {
        return this.clear();
    };
    DChartCoordinateContainerSubImpl.prototype.size = function () {
        return this._list.length;
    };
    DChartCoordinateContainerSubImpl.prototype.fit = function (from, to) {
        var list = this._list;
        for (var i = 0, imax = list.length; i < imax; ++i) {
            list[i].fit(from, to);
        }
        return this;
    };
    DChartCoordinateContainerSubImpl.prototype.mark = function (from, to) {
        var list = this._list;
        for (var i = 0, imax = list.length; i < imax; ++i) {
            list[i].mark(from, to);
        }
        return this;
    };
    DChartCoordinateContainerSubImpl.prototype.blend = function (ratio) {
        var list = this._list;
        for (var i = 0, imax = list.length; i < imax; ++i) {
            list[i].blend(ratio);
        }
        return this;
    };
    return DChartCoordinateContainerSubImpl;
}());
export { DChartCoordinateContainerSubImpl };
//# sourceMappingURL=d-chart-coordinate-container-sub-impl.js.map