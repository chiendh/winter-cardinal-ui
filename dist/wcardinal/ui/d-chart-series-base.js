/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseState } from "./d-base-state";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartSeriesBaseCoordinateContainer } from "./d-chart-series-base-coordinate-container";
/**
 * A series represents a polyline.
 */
var DChartSeriesBase = /** @class */ (function (_super) {
    __extends(DChartSeriesBase, _super);
    function DChartSeriesBase(options) {
        var _this = _super.call(this) || this;
        _this._coordinate = new DChartSeriesBaseCoordinateContainer(_this, options && options.coordinate);
        _this._index = 0;
        _this._domain = new DChartRegionImpl(NaN, NaN);
        _this._range = new DChartRegionImpl(NaN, NaN);
        _this._regionPointId = NaN;
        _this._state = DBaseState.NONE;
        _this._stateLocal = DBaseState.NONE;
        // Events
        if (options) {
            var on = options.on;
            if (on != null) {
                for (var name_1 in on) {
                    var handler = on[name_1];
                    if (handler) {
                        _this.on(name_1, handler);
                    }
                }
            }
        }
        return _this;
    }
    DChartSeriesBase.prototype.bind = function (container, index) {
        this._container = container;
        this._coordinate.reset();
        this._index = index;
    };
    DChartSeriesBase.prototype.unbind = function () {
        this._container = undefined;
    };
    Object.defineProperty(DChartSeriesBase.prototype, "domain", {
        get: function () {
            this.updateRegion();
            return this._domain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesBase.prototype, "range", {
        get: function () {
            this.updateRegion();
            return this._range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesBase.prototype, "container", {
        get: function () {
            return this._container || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesBase.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesBase.prototype, "coordinate", {
        get: function () {
            return this._coordinate;
        },
        enumerable: true,
        configurable: true
    });
    DChartSeriesBase.prototype.destroy = function () {
        this._container = undefined;
        this._coordinate.destroy();
    };
    DChartSeriesBase.prototype.hitTest = function (global) {
        return false;
    };
    DChartSeriesBase.prototype.calcHitPoint = function (global, result) {
        return false;
    };
    DChartSeriesBase.prototype.setState = function (state, isOn) {
        var oldStateLocal = this._stateLocal;
        var newStateLocal = (isOn ? (oldStateLocal | state) : (oldStateLocal & ~state));
        if (oldStateLocal !== newStateLocal) {
            this._stateLocal = newStateLocal;
            this.updateState();
        }
    };
    DChartSeriesBase.prototype.updateState = function () {
        var container = this._container;
        var chart = container && container.plotArea.chart;
        var stateLocal = this._stateLocal;
        var newState = (chart ?
            this.mergeState(stateLocal, chart.state) :
            stateLocal);
        var oldState = this._state;
        if (oldState !== newState) {
            this._state = newState;
            this.onStateChange(newState, oldState);
        }
    };
    DChartSeriesBase.prototype.mergeState = function (stateLocal, stateParent) {
        return stateLocal | (stateParent & DBaseState.DISABLED) |
            (stateParent & (DBaseState.FOCUSED | DBaseState.FOCUSED_IN) ? DBaseState.FOCUSED_IN : DBaseState.NONE) |
            (stateParent & (DBaseState.ACTIVE | DBaseState.ACTIVE_IN) ? DBaseState.ACTIVE_IN : DBaseState.NONE);
    };
    DChartSeriesBase.prototype.onStateChange = function (newState, oldState) {
        this.toDirty();
        var container = this._container;
        var chart = container && container.plotArea.chart;
        DApplications.update(chart);
        this.emit("statechange", newState, oldState, this);
    };
    return DChartSeriesBase;
}(utils.EventEmitter));
export { DChartSeriesBase };
//# sourceMappingURL=d-chart-series-base.js.map