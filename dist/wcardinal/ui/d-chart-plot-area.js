/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point, Rectangle } from "pixi.js";
import { DAnimationTimings } from "./d-animation-timings";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DChartAxisContainerImpl } from "./d-chart-axis-container-impl";
import { DChartCoordinateContainerImpl } from "./d-chart-coordinate-container-impl";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartSeriesContainerImpl } from "./d-chart-series-container-impl";
import { DViewImpl } from "./d-view-impl";
var DChartPlotArea = /** @class */ (function (_super) {
    __extends(DChartPlotArea, _super);
    function DChartPlotArea(chart, options) {
        var _this = _super.call(this, options) || this;
        _this._chart = chart;
        _this._blendStartTime = 0;
        _this._blendDuration = 1000;
        _this._blendTimeout = null;
        _this._onBlendBound = function () {
            _this.onBlend();
        };
        return _this;
    }
    DChartPlotArea.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        var container = new DChartPlotAreaContainer(function () {
            _this._isViewDirty = true;
            _this._isBoundsInContainerDirty = true;
            DApplications.update(_this);
        });
        this._container = container;
        this._coordinate = new DChartCoordinateContainerImpl(this, options && options.coordinate);
        var series = new DChartSeriesContainerImpl(this, options && options.series);
        this._series = series;
        var axis = new DChartAxisContainerImpl(this, options && options.axis);
        this._axis = axis;
        this._isViewDirty = true;
        this._isBoundsInContainerDirty = true;
        this._boundsInContainer = new Rectangle();
        this._workPoint = new Point();
        this.addChild(container);
        this.addChild(axis.container);
        this._view = new DViewImpl(this, function () { return container; }, options && options.view);
        var selection = series.selection;
        if (selection) {
            selection.bind(series);
        }
        // Overflow mask
        this._overflowMask = null;
        if (options && options.mask != null ? options.mask :
            this.theme.isOverflowMaskEnabled()) {
            this._container.mask = this.getOrCreateOverflowMask();
        }
    };
    DChartPlotArea.prototype.onResize = function (newWidth, newHeight, oldWidth, oldHeight) {
        this._isViewDirty = true;
        this._isBoundsInContainerDirty = true;
        _super.prototype.onResize.call(this, newWidth, newHeight, oldWidth, oldHeight);
    };
    DChartPlotArea.prototype.getOrCreateOverflowMask = function () {
        if (this._overflowMask == null) {
            this._overflowMask = new DBaseOverflowMask(this);
            this.addReflowable(this._overflowMask);
            this.toDirty();
        }
        return this._overflowMask;
    };
    Object.defineProperty(DChartPlotArea.prototype, "coordinate", {
        get: function () {
            return this._coordinate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartPlotArea.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartPlotArea.prototype, "series", {
        get: function () {
            return this._series;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartPlotArea.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartPlotArea.prototype, "axis", {
        get: function () {
            return this._axis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartPlotArea.prototype, "view", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    DChartPlotArea.prototype.onWheel = function (e, deltas, global) {
        var vresult = this._view.onWheel(e, deltas, global);
        var sresult = _super.prototype.onWheel.call(this, e, deltas, global);
        return vresult || sresult;
    };
    DChartPlotArea.prototype.onDblClick = function (e, interactionManager) {
        var vresult = this._view.onDblClick(e, interactionManager);
        var sresult = _super.prototype.onDblClick.call(this, e, interactionManager);
        return vresult || sresult;
    };
    DChartPlotArea.prototype.onDown = function (e) {
        this._view.onDown(e);
        _super.prototype.onDown.call(this, e);
    };
    DChartPlotArea.prototype.render = function (renderer) {
        if (this._isViewDirty) {
            this._isViewDirty = false;
            this._axis.update();
            var selection = this._series.selection;
            if (selection) {
                selection.update();
            }
        }
        _super.prototype.render.call(this, renderer);
    };
    DChartPlotArea.prototype.destroy = function () {
        this._container.destroy();
        this._series.destroy();
        this._axis.destroy();
    };
    DChartPlotArea.prototype.getType = function () {
        return "DChartPlotArea";
    };
    DChartPlotArea.prototype.getBoundsInContainer = function () {
        var result = this._boundsInContainer;
        if (this._isBoundsInContainerDirty) {
            this._isBoundsInContainerDirty = false;
            var container = this.container;
            container.updateTransform();
            var transform = container.transform.localTransform;
            var work = this._workPoint;
            work.set(0, 0);
            transform.applyInverse(work, work);
            result.x = work.x;
            result.y = work.y;
            work.set(this.width, this.height);
            transform.applyInverse(work, work);
            result.width = work.x - result.x;
            result.height = work.y - result.y;
        }
        return result;
    };
    DChartPlotArea.prototype.fit = function (duration, domainFrom, domainTo, rangeFrom, rangeTo) {
        var coordinate = this._coordinate;
        var axis = this._axis;
        var series = this._series;
        if (duration != null && duration <= 0) {
            coordinate.fit(domainFrom, domainTo, rangeFrom, rangeTo);
            axis.update();
            series.update();
        }
        else {
            this._blendDuration = duration != null ? duration : 200;
            this._blendStartTime = Date.now();
            coordinate.mark(domainFrom, domainTo, rangeFrom, rangeTo);
            var blendTimeout = this._blendTimeout;
            if (blendTimeout != null) {
                window.clearTimeout(blendTimeout);
            }
            this._blendTimeout = window.setTimeout(this._onBlendBound, 0);
        }
        return this;
    };
    DChartPlotArea.prototype.onBlend = function () {
        var now = Date.now();
        var ratio = (now - this._blendStartTime) / this._blendDuration;
        if (ratio < 1) {
            this._blendTimeout = window.setTimeout(this._onBlendBound, 0);
        }
        else {
            this._blendTimeout = null;
            ratio = 1;
        }
        this._coordinate.blend(DAnimationTimings.ELASTIC(ratio));
        this._axis.update();
        this._series.update();
    };
    return DChartPlotArea;
}(DBase));
export { DChartPlotArea };
//# sourceMappingURL=d-chart-plot-area.js.map