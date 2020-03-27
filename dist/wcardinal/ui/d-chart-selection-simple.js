/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionSubImpl } from "./d-chart-selection-sub-impl";
import { DChartSeriesHitResult } from "./d-chart-series";
import { isString } from "./util/is-string";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DChartSelectionSimple = /** @class */ (function (_super) {
    __extends(DChartSelectionSimple, _super);
    function DChartSelectionSimple(options) {
        var _this = _super.call(this) || this;
        _this._container = null;
        var point = (options && options.point != null ?
            (isString(options.point) ? DChartSelectionPoint[options.point] : options.point) :
            DChartSelectionPoint.CLOSER);
        _this._selected = _this.newSelected(point, options && options.selected);
        _this._hovered = _this.newHovered(point, options && options.hovered);
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
        //
        _this._onMoveBound = function (e) {
            _this.onMove(e);
        };
        _this._onClickBound = function (e) {
            _this.onClick(e);
        };
        return _this;
    }
    DChartSelectionSimple.prototype.newSelected = function (point, options) {
        return new DChartSelectionSubImpl(this.toSubOptions(point, options, DBaseState.ACTIVE));
    };
    DChartSelectionSimple.prototype.newHovered = function (point, options) {
        return new DChartSelectionSubImpl(this.toSubOptions(point, options, DBaseState.HOVERED));
    };
    DChartSelectionSimple.prototype.toSubOptions = function (point, options, state) {
        options = options || {};
        if (options.point == null) {
            options.point = point;
        }
        if (options.state == null) {
            options.state = state;
        }
        var gridline = options.gridline || {};
        var gridlineX = gridline.x || {};
        if (gridlineX.state == null) {
            gridlineX.state = state;
        }
        var gridlineY = gridline.y || {};
        if (gridlineY.state == null) {
            gridlineY.state = state;
        }
        var marker = options.marker || {};
        if (marker.state == null) {
            marker.state = state;
        }
        return options;
    };
    DChartSelectionSimple.prototype.onClick = function (e) {
        var container = this._container;
        if (container && e.target === container.plotArea) {
            var hovered = this._hovered;
            var series = hovered.series;
            var selected = this._selected;
            if (series) {
                selected.set(series, hovered);
            }
            else {
                selected.unset();
            }
        }
    };
    DChartSelectionSimple.prototype.onMove = function (e) {
        var container = this._container;
        if (container) {
            var hovered = this._hovered;
            if (e.target === container.plotArea) {
                var result = DChartSelectionSimple.WORK_SELECT;
                var series = container.calcHitPoint(e.data.global, result);
                if (series) {
                    hovered.set(series, result);
                }
                else {
                    hovered.unset();
                }
            }
            else {
                hovered.unset();
            }
        }
    };
    DChartSelectionSimple.prototype.bind = function (container) {
        this._container = container;
        this._selected.bind(container);
        this._hovered.bind(container);
        var plotArea = container.plotArea;
        plotArea.on(UtilPointerEvent.move, this._onMoveBound);
        UtilPointerEvent.onClick(plotArea, this._onClickBound);
    };
    DChartSelectionSimple.prototype.unbind = function () {
        var container = this._container;
        this._container = null;
        if (container) {
            var plotArea = container.plotArea;
            plotArea.off(UtilPointerEvent.move, this._onMoveBound);
        }
        this._selected.unbind();
        this._hovered.unbind();
    };
    Object.defineProperty(DChartSelectionSimple.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSelectionSimple.prototype, "hovered", {
        get: function () {
            return this._hovered;
        },
        enumerable: true,
        configurable: true
    });
    DChartSelectionSimple.prototype.update = function () {
        this._selected.update();
        this._hovered.update();
    };
    DChartSelectionSimple.WORK_SELECT = new DChartSeriesHitResult();
    return DChartSelectionSimple;
}(utils.EventEmitter));
export { DChartSelectionSimple };
//# sourceMappingURL=d-chart-selection-simple.js.map