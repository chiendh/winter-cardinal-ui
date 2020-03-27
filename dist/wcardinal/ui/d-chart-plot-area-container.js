/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Rectangle } from "pixi.js";
import { DBasePoint } from "./d-base-point";
import { EShapeContainer } from "./shape/e-shape-container";
var DChartPlotAreaContainer = /** @class */ (function (_super) {
    __extends(DChartPlotAreaContainer, _super);
    function DChartPlotAreaContainer(onChange) {
        var _this = _super.call(this) || this;
        var transform = _this.transform;
        _this._position = new DBasePoint(transform.position, onChange);
        _this._scale = new DBasePoint(transform.scale, onChange);
        _this._workRect = new Rectangle();
        return _this;
    }
    Object.defineProperty(DChartPlotAreaContainer.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartPlotAreaContainer.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        enumerable: true,
        configurable: true
    });
    DChartPlotAreaContainer.prototype.getBounds = function (skipUpdate, rect) {
        this._lastBoundsID = -1;
        return _super.prototype.getBounds.call(this, skipUpdate, rect);
    };
    DChartPlotAreaContainer.prototype.calculateBounds = function () {
        var bounds = this._bounds;
        var work = this._work;
        var rect = this._workRect;
        var worldTransform = this.transform.worldTransform;
        var xmin = 0;
        var xmax = 0;
        var ymin = 0;
        var ymax = 0;
        var children = this.children;
        if (0 < children.length) {
            var isFirst = true;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child.visible) {
                    child.getBoundsInternal(work, false, rect);
                    if (isFirst) {
                        isFirst = false;
                        xmin = rect.x;
                        ymin = rect.y;
                        xmax = rect.x + rect.width;
                        ymax = rect.y + rect.height;
                    }
                    else {
                        xmin = Math.min(xmin, rect.x);
                        ymin = Math.min(ymin, rect.y);
                        xmax = Math.max(xmax, rect.x + rect.width);
                        ymax = Math.max(ymax, rect.y + rect.height);
                    }
                }
            }
        }
        bounds.clear();
        work.set(xmin, ymin);
        worldTransform.apply(work, work);
        bounds.addPoint(work);
        work.set(xmax, ymax);
        worldTransform.apply(work, work);
        bounds.addPoint(work);
    };
    return DChartPlotAreaContainer;
}(EShapeContainer));
export { DChartPlotAreaContainer };
//# sourceMappingURL=d-chart-plot-area-container.js.map