/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DChartSeriesBaseCoordinateContainer = /** @class */ (function () {
    function DChartSeriesBaseCoordinateContainer(parent, options) {
        this._parent = parent;
        this._coordinateIndexX = (options && options.x != null ? options.x : 0);
        this._coordinateIndexY = (options && options.y != null ? options.y : 0);
        this._coordinateIdUpdatedX = NaN;
        this._coordinateIdUpdatedY = NaN;
        this._coordinateTransformIdUpdatedX = NaN;
        this._coordinateTransformIdUpdatedY = NaN;
    }
    Object.defineProperty(DChartSeriesBaseCoordinateContainer.prototype, "x", {
        get: function () {
            var container = this._parent.container;
            if (container) {
                return container.plotArea.coordinate.x.get(this._coordinateIndexX);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesBaseCoordinateContainer.prototype, "y", {
        get: function () {
            var container = this._parent.container;
            if (container) {
                return container.plotArea.coordinate.y.get(this._coordinateIndexY);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    DChartSeriesBaseCoordinateContainer.prototype.isDirty = function (coordinateX, coordinateY) {
        var coordinateIdX = coordinateX.id;
        var coordinateIdY = coordinateY.id;
        var isCoordinateXChanged = (coordinateIdX !== this._coordinateIdUpdatedX);
        var isCoordinateYChanged = (coordinateIdY !== this._coordinateIdUpdatedY);
        this._coordinateIdUpdatedX = coordinateIdX;
        this._coordinateIdUpdatedY = coordinateIdY;
        return (isCoordinateXChanged || isCoordinateYChanged);
    };
    DChartSeriesBaseCoordinateContainer.prototype.isTransformDirty = function (coordinateX, coordinateY) {
        var coordinateTransformIdX = coordinateX.transform.id;
        var coordinateTransformIdY = coordinateY.transform.id;
        var isCoordinateTransformXChanged = (coordinateTransformIdX !== this._coordinateTransformIdUpdatedX);
        var isCoordinateTransformYChanged = (coordinateTransformIdY !== this._coordinateTransformIdUpdatedY);
        this._coordinateTransformIdUpdatedX = coordinateTransformIdX;
        this._coordinateTransformIdUpdatedY = coordinateTransformIdY;
        return (isCoordinateTransformXChanged || isCoordinateTransformYChanged);
    };
    DChartSeriesBaseCoordinateContainer.prototype.reset = function () {
        this._coordinateIdUpdatedX = NaN;
        this._coordinateIdUpdatedY = NaN;
    };
    DChartSeriesBaseCoordinateContainer.prototype.destroy = function () {
        this.reset();
    };
    return DChartSeriesBaseCoordinateContainer;
}());
export { DChartSeriesBaseCoordinateContainer };
//# sourceMappingURL=d-chart-series-base-coordinate-container.js.map