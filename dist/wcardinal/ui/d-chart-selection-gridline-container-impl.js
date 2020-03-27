/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartSelectionGridlineX } from "./d-chart-selection-gridline-x";
import { DChartSelectionGridlineY } from "./d-chart-selection-gridline-y";
var DChartSelectionGridlineContainerImpl = /** @class */ (function () {
    function DChartSelectionGridlineContainerImpl(options) {
        this._x = new DChartSelectionGridlineX(options && options.x);
        this._y = new DChartSelectionGridlineY(options && options.y);
    }
    Object.defineProperty(DChartSelectionGridlineContainerImpl.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSelectionGridlineContainerImpl.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    DChartSelectionGridlineContainerImpl.prototype.bind = function (container) {
        this._x.bind(container);
        this._y.bind(container);
    };
    DChartSelectionGridlineContainerImpl.prototype.unbind = function () {
        this._x.unbind();
        this._y.unbind();
    };
    DChartSelectionGridlineContainerImpl.prototype.set = function (container, mappedPosition, series) {
        this._x.set(container, mappedPosition, series);
        this._y.set(container, mappedPosition, series);
    };
    DChartSelectionGridlineContainerImpl.prototype.unset = function () {
        this._x.unset();
        this._y.unset();
    };
    DChartSelectionGridlineContainerImpl.prototype.update = function (container, mappedPosition) {
        this._x.update(container, mappedPosition);
        this._y.update(container, mappedPosition);
    };
    return DChartSelectionGridlineContainerImpl;
}());
export { DChartSelectionGridlineContainerImpl };
//# sourceMappingURL=d-chart-selection-gridline-container-impl.js.map