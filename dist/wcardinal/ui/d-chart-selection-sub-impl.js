/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseState } from "./d-base-state";
import { DChartSelectionPoint } from "./d-chart-selection";
import { DChartSelectionGridlineContainerImpl } from "./d-chart-selection-gridline-container-impl";
import { DChartSelectionMarker } from "./d-chart-selection-marker";
import { DChartSeriesHitResult } from "./d-chart-series";
var DChartSelectionSubImpl = /** @class */ (function (_super) {
    __extends(DChartSelectionSubImpl, _super);
    function DChartSelectionSubImpl(options) {
        var _this = _super.call(this) || this;
        _this._container = null;
        _this._series = null;
        _this._isEnabled = (options.enable != null ? options.enable : true);
        _this._gridline = new DChartSelectionGridlineContainerImpl(options.gridline);
        _this._marker = new DChartSelectionMarker(options.marker);
        _this._state = (options.state != null ? options.state : DBaseState.HOVERED);
        _this._coordinateX = null;
        _this._coordinateY = null;
        _this._position = new Point();
        _this._point = (options.point != null ? options.point : DChartSelectionPoint.CLOSER);
        _this._work = new Point();
        // Events
        var on = options.on;
        if (on) {
            for (var name_1 in on) {
                var handler = on[name_1];
                if (handler) {
                    _this.on(name_1, handler);
                }
            }
        }
        return _this;
    }
    DChartSelectionSubImpl.prototype.bind = function (container) {
        if (this._isEnabled) {
            this._container = container;
            this._gridline.bind(container);
            this._marker.bind(container);
        }
    };
    DChartSelectionSubImpl.prototype.unbind = function () {
        this._marker.unbind();
        this._gridline.unbind();
        this._container = null;
        this._coordinateX = null;
        this._coordinateY = null;
    };
    Object.defineProperty(DChartSelectionSubImpl.prototype, "series", {
        get: function () {
            return this._series;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSelectionSubImpl.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSelectionSubImpl.prototype, "gridline", {
        get: function () {
            return this._gridline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSelectionSubImpl.prototype, "marker", {
        get: function () {
            return this._marker;
        },
        enumerable: true,
        configurable: true
    });
    DChartSelectionSubImpl.prototype.set = function (series, result) {
        var container = this._container;
        var coordinateX = this._coordinateX = series.coordinate.x;
        var coordinateY = this._coordinateY = series.coordinate.y;
        if (container && coordinateX && coordinateY) {
            var transform = container.plotArea.container.localTransform;
            var position = this._position;
            var work = this._work;
            if (result instanceof DChartSeriesHitResult) {
                var x = result.x;
                var y = result.y;
                switch (this._point) {
                    case DChartSelectionPoint.PREVIOUS:
                        x = result.p0x;
                        y = result.p0y;
                        break;
                    case DChartSelectionPoint.NEXT:
                        x = result.p1x;
                        y = result.p1y;
                        break;
                    case DChartSelectionPoint.CLOSER:
                        if (Math.abs(result.p0x - result.x) < Math.abs(result.p1x - result.x)) {
                            x = result.p0x;
                            y = result.p0y;
                        }
                        else {
                            x = result.p1x;
                            y = result.p1y;
                        }
                }
                work.set(x, y);
                transform.apply(work, work);
                position.set(coordinateX.unmap(coordinateX.transform.unmap(x)), coordinateY.unmap(coordinateY.transform.unmap(y)));
            }
            else {
                position.copyFrom(result.position);
                work.set(coordinateX.transform.map(coordinateX.map(position.x)), coordinateY.transform.map(coordinateY.map(position.y)));
                transform.apply(work, work);
            }
            this._gridline.set(container, work, series);
            this._marker.set(container, work, series);
            DApplications.update(container.plotArea);
        }
        var oldSeries = this._series;
        if (oldSeries !== series) {
            var state = this._state;
            if (oldSeries) {
                oldSeries.setState(state, false);
            }
            this._series = series;
            series.setState(state, true);
        }
        this.emit("change", this);
    };
    DChartSelectionSubImpl.prototype.setStyle = function (shape, series) {
        var seriesShape = series.shape;
        if (seriesShape) {
            shape.stroke.color = seriesShape.stroke.color;
        }
    };
    DChartSelectionSubImpl.prototype.unset = function () {
        var series = this._series;
        if (series) {
            this._series = null;
            this._coordinateX = null;
            this._coordinateY = null;
            series.setState(this._state, false);
            this._gridline.unset();
            this._marker.unset();
            this.emit("change", this);
        }
    };
    DChartSelectionSubImpl.prototype.update = function () {
        var container = this._container;
        var coordinateX = this._coordinateX;
        var coordinateY = this._coordinateY;
        if (container && coordinateX && coordinateY) {
            var position = this._position;
            var work = this._work;
            work.set(coordinateX.transform.map(coordinateX.map(position.x)), coordinateY.transform.map(coordinateY.map(position.y)));
            container.plotArea.container.localTransform.apply(work, work);
            this._gridline.update(container, work);
            this._marker.update(container, work);
        }
    };
    return DChartSelectionSubImpl;
}(utils.EventEmitter));
export { DChartSelectionSubImpl };
//# sourceMappingURL=d-chart-selection-sub-impl.js.map