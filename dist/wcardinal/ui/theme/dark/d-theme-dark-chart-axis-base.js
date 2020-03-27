/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartAxisPosition } from "../../d-chart-axis-position";
import { DChartAxisTickPosition } from "../../d-chart-axis-tick-position";
import { EShapeDefaults } from "../../shape/e-shape-defaults";
import { EShapePointsStyle } from "../../shape/e-shape-points-style";
import { EShapeStrokeSide } from "../../shape/e-shape-stroke-side";
import { EShapeTextAlignHorizontal } from "../../shape/e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../../shape/e-shape-text-align-vertical";
import { EShapeTextDirection } from "../../shape/e-shape-text-direction";
var DThemeDarkChartAxisBase = /** @class */ (function () {
    function DThemeDarkChartAxisBase() {
    }
    DThemeDarkChartAxisBase.prototype.getPosition = function () {
        return DChartAxisPosition.BOTTOM;
    };
    DThemeDarkChartAxisBase.prototype.getPadding = function () {
        return 75;
    };
    DThemeDarkChartAxisBase.prototype.getLabelAlignHorizontal = function (position) {
        switch (position) {
            case DChartAxisPosition.TOP:
                return EShapeTextAlignHorizontal.CENTER;
            case DChartAxisPosition.BOTTOM:
                return EShapeTextAlignHorizontal.CENTER;
            case DChartAxisPosition.LEFT:
                return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
            case DChartAxisPosition.RIGHT:
                return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
        }
    };
    DThemeDarkChartAxisBase.prototype.getLabelAlignVertical = function (position) {
        switch (position) {
            case DChartAxisPosition.TOP:
                return EShapeTextAlignVertical.OUTSIDE_TOP;
            case DChartAxisPosition.BOTTOM:
                return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
            case DChartAxisPosition.LEFT:
                return EShapeTextAlignVertical.MIDDLE;
            case DChartAxisPosition.RIGHT:
                return EShapeTextAlignVertical.MIDDLE;
        }
    };
    DThemeDarkChartAxisBase.prototype.getLabelPaddingHorizontal = function () {
        return 75;
    };
    DThemeDarkChartAxisBase.prototype.getLabelPaddingVertical = function () {
        return 50;
    };
    DThemeDarkChartAxisBase.prototype.getLabelDirection = function () {
        return EShapeTextDirection.LEFT_TO_RIGHT;
    };
    DThemeDarkChartAxisBase.prototype.getLabelColor = function () {
        return this.getStrokeColor();
    };
    DThemeDarkChartAxisBase.prototype.getStyle = function () {
        return EShapePointsStyle.NONE;
    };
    DThemeDarkChartAxisBase.prototype.getStrokeEnable = function () {
        return true;
    };
    DThemeDarkChartAxisBase.prototype.getStrokeColor = function () {
        return 0xdedede;
    };
    DThemeDarkChartAxisBase.prototype.getStrokeAlpha = function () {
        return EShapeDefaults.STROKE_ALPHA;
    };
    DThemeDarkChartAxisBase.prototype.getStrokeWidth = function () {
        return EShapeDefaults.STROKE_WIDTH;
    };
    DThemeDarkChartAxisBase.prototype.getStrokeAlign = function () {
        return EShapeDefaults.STROKE_ALIGN;
    };
    DThemeDarkChartAxisBase.prototype.getStrokeSide = function () {
        return EShapeStrokeSide.ALL;
    };
    DThemeDarkChartAxisBase.prototype.getTickEnable = function () {
        return true;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickCount = function () {
        return 3;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickSize = function () {
        return 10;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickPosition = function () {
        return DChartAxisTickPosition.OUTSIDE;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickStyle = function () {
        return EShapePointsStyle.NONE;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickTextAlignHorizontal = function (position) {
        switch (position) {
            case DChartAxisPosition.TOP:
                return EShapeTextAlignHorizontal.CENTER;
            case DChartAxisPosition.BOTTOM:
                return EShapeTextAlignHorizontal.CENTER;
            case DChartAxisPosition.LEFT:
                return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
            case DChartAxisPosition.RIGHT:
                return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
        }
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickTextAlignVertical = function (position) {
        switch (position) {
            case DChartAxisPosition.TOP:
                return EShapeTextAlignVertical.OUTSIDE_TOP;
            case DChartAxisPosition.BOTTOM:
                return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
            case DChartAxisPosition.LEFT:
                return EShapeTextAlignVertical.MIDDLE;
            case DChartAxisPosition.RIGHT:
                return EShapeTextAlignVertical.MIDDLE;
        }
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickTextDirection = function () {
        return EShapeTextDirection.LEFT_TO_RIGHT;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickTextColor = function () {
        return this.getStrokeColor();
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickTextFormat = function () {
        return "%fsi";
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickTextPaddingHorizontal = function () {
        return 15;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickTextPaddingVertical = function () {
        return 15;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickStrokeEnable = function () {
        return true;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickStrokeColor = function () {
        return this.getStrokeColor();
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickStrokeAlpha = function () {
        return this.getStrokeAlpha();
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickStrokeWidth = function () {
        return this.getStrokeWidth();
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickStrokeAlign = function () {
        return this.getStrokeAlign();
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickStrokeSide = function () {
        return this.getStrokeSide();
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickGridlineEnable = function () {
        return true;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStyle = function () {
        return EShapePointsStyle.NONE;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeEnable = function () {
        return true;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeColor = function () {
        return this.getStrokeColor();
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeAlpha = function () {
        return 0.1;
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeWidth = function () {
        return this.getStrokeWidth();
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeAlign = function () {
        return this.getStrokeAlign();
    };
    DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeSide = function () {
        return this.getStrokeSide();
    };
    DThemeDarkChartAxisBase.prototype.getMinorTickCount = function () {
        return 3;
    };
    DThemeDarkChartAxisBase.prototype.getMinorTickSize = function () {
        return 5;
    };
    DThemeDarkChartAxisBase.prototype.getMinorTickPosition = function () {
        return DChartAxisTickPosition.OUTSIDE;
    };
    DThemeDarkChartAxisBase.prototype.getMinorTickStyle = function () {
        return EShapePointsStyle.NONE;
    };
    DThemeDarkChartAxisBase.prototype.getMinorTickStrokeEnable = function () {
        return true;
    };
    DThemeDarkChartAxisBase.prototype.getMinorTickStrokeColor = function () {
        return this.getStrokeColor();
    };
    DThemeDarkChartAxisBase.prototype.getMinorTickStrokeAlpha = function () {
        return this.getStrokeAlpha();
    };
    DThemeDarkChartAxisBase.prototype.getMinorTickStrokeWidth = function () {
        return this.getStrokeWidth();
    };
    DThemeDarkChartAxisBase.prototype.getMinorTickStrokeAlign = function () {
        return this.getStrokeAlign();
    };
    DThemeDarkChartAxisBase.prototype.getMinorTickStrokeSide = function () {
        return this.getStrokeSide();
    };
    return DThemeDarkChartAxisBase;
}());
export { DThemeDarkChartAxisBase };
//# sourceMappingURL=d-theme-dark-chart-axis-base.js.map