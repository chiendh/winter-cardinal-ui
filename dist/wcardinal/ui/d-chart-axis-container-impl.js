/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeContainer } from "./shape/e-shape-container";
var DChartAxisContainerImpl = /** @class */ (function () {
    function DChartAxisContainerImpl(plotArea, options) {
        this._plotArea = plotArea;
        this._container = new EShapeContainer();
        this._list = new Map();
        var list = options && options.list;
        if (list) {
            for (var i = 0, imax = list.length; i < imax; ++i) {
                this.add(list[i]);
            }
        }
    }
    Object.defineProperty(DChartAxisContainerImpl.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartAxisContainerImpl.prototype, "plotArea", {
        get: function () {
            return this._plotArea;
        },
        enumerable: true,
        configurable: true
    });
    DChartAxisContainerImpl.prototype.add = function (axis) {
        var list = this._list;
        var axes = list.get(axis.position);
        if (axes == null) {
            axes = [];
            list.set(axis.position, axes);
        }
        axes.push(axis);
        axis.bind(this, axes.length - 1);
    };
    DChartAxisContainerImpl.prototype.get = function (position, index) {
        var list = this._list;
        var axes = list.get(position);
        if (axes) {
            if (0 <= index && index < axes.length) {
                return axes[index];
            }
        }
        return null;
    };
    DChartAxisContainerImpl.prototype.indexOf = function (axis) {
        var list = this._list;
        var axes = list.get(axis.position);
        if (axes) {
            return axes.indexOf(axis);
        }
        return -1;
    };
    DChartAxisContainerImpl.prototype.clear = function (position) {
        var list = this._list;
        var axes = list.get(position);
        if (axes) {
            for (var i = 0, imax = axes.length; i < imax; ++i) {
                axes[i].destroy();
            }
            axes.length = 0;
        }
        return this;
    };
    DChartAxisContainerImpl.prototype.size = function (position) {
        var list = this._list;
        var axes = list.get(position);
        if (axes) {
            return axes.length;
        }
        return 0;
    };
    DChartAxisContainerImpl.prototype.update = function () {
        this._list.forEach(function (axes) {
            for (var i = 0, imax = axes.length; i < imax; ++i) {
                axes[i].update();
            }
        });
    };
    DChartAxisContainerImpl.prototype.destroy = function () {
        this._list.forEach(function (axes) {
            for (var i = 0, imax = axes.length; i < imax; ++i) {
                axes[i].destroy();
            }
            axes.length = 0;
        });
    };
    return DChartAxisContainerImpl;
}());
export { DChartAxisContainerImpl };
//# sourceMappingURL=d-chart-axis-container-impl.js.map