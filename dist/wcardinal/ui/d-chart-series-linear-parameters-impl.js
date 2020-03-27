var DChartSeriesExpressionParametersImpl = /** @class */ (function () {
    function DChartSeriesExpressionParametersImpl(a, b, x0, y0) {
        this._id = 0;
        this._idUpdated = NaN;
        this._a = a;
        this._b = b;
        this._x0 = x0;
        this._y0 = y0;
    }
    Object.defineProperty(DChartSeriesExpressionParametersImpl.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (a) {
            if (this._a !== a) {
                this._id += 1;
                this._a = a;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesExpressionParametersImpl.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (b) {
            if (this._b !== b) {
                this._id += 1;
                this._b = b;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesExpressionParametersImpl.prototype, "x0", {
        get: function () {
            return this._x0;
        },
        set: function (x0) {
            if (this._x0 !== x0) {
                this._id += 1;
                this._x0 = x0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartSeriesExpressionParametersImpl.prototype, "y0", {
        get: function () {
            return this._y0;
        },
        set: function (y0) {
            if (this._y0 !== y0) {
                this._id += 1;
                this._y0 = y0;
            }
        },
        enumerable: true,
        configurable: true
    });
    DChartSeriesExpressionParametersImpl.prototype.toDirty = function () {
        this._id += 1;
    };
    DChartSeriesExpressionParametersImpl.prototype.isDirty = function () {
        return this._id !== this._idUpdated;
    };
    DChartSeriesExpressionParametersImpl.prototype.toClean = function () {
        this._idUpdated = this._id;
    };
    DChartSeriesExpressionParametersImpl.from = function (options) {
        if (options) {
            return new DChartSeriesExpressionParametersImpl((options.a != null ? options.a : 1), (options.b != null ? options.b : 1), (options.x0 != null ? options.x0 : 0), (options.y0 != null ? options.y0 : 0));
        }
        return new DChartSeriesExpressionParametersImpl(1, 1, 0, 0);
    };
    return DChartSeriesExpressionParametersImpl;
}());
export { DChartSeriesExpressionParametersImpl };
//# sourceMappingURL=d-chart-series-linear-parameters-impl.js.map