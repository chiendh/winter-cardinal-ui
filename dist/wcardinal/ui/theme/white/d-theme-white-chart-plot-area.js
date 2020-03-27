/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteChartPlotArea = /** @class */ (function (_super) {
    __extends(DThemeWhiteChartPlotArea, _super);
    function DThemeWhiteChartPlotArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteChartPlotArea.prototype.getWidth = function () {
        return "100%";
    };
    DThemeWhiteChartPlotArea.prototype.getHeight = function () {
        return "100%";
    };
    DThemeWhiteChartPlotArea.prototype.getPaddingTop = function () {
        return 10;
    };
    DThemeWhiteChartPlotArea.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeWhiteChartPlotArea.prototype.getPaddingBottom = function () {
        return 10;
    };
    DThemeWhiteChartPlotArea.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeWhiteChartPlotArea.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteChartPlotArea.prototype.isOverflowMaskEnabled = function () {
        return true;
    };
    return DThemeWhiteChartPlotArea;
}(DThemeWhiteBase));
export { DThemeWhiteChartPlotArea };
//# sourceMappingURL=d-theme-white-chart-plot-area.js.map