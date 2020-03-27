/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
import { DChartPlotArea } from "./d-chart-plot-area";
var DChart = /** @class */ (function (_super) {
    __extends(DChart, _super);
    function DChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DChart.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        var plotArea = new DChartPlotArea(this, options && options.plotArea);
        this._plotArea = plotArea;
        this.addChild(plotArea);
    };
    Object.defineProperty(DChart.prototype, "plotArea", {
        get: function () {
            return this._plotArea;
        },
        enumerable: true,
        configurable: true
    });
    DChart.prototype.getType = function () {
        return "DChart";
    };
    DChart.prototype.destroy = function () {
        if (!this._destroyed) {
            this._plotArea.destroy();
            _super.prototype.destroy.call(this);
        }
    };
    return DChart;
}(DBase));
export { DChart };
//# sourceMappingURL=d-chart.js.map