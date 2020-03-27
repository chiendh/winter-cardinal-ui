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
var DThemeWhiteChartAxisBase = /** @class */ (function () {
    function DThemeWhiteChartAxisBase() {
    }
    DThemeWhiteChartAxisBase.prototype.getPosition = function () {
        return DChartAxisPosition.BOTTOM;
    };
    DThemeWhiteChartAxisBase.prototype.getPadding = function () {
        return 75;
    };
    DThemeWhiteChartAxisBase.prototype.getLabelAlignHorizontal = function (position) {
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
    DThemeWhiteChartAxisBase.prototype.getLabelAlignVertical = function (position) {
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
    DThemeWhiteChartAxisBase.prototype.getLabelPaddingHorizontal = function () {
        return 75;
    };
    DThemeWhiteChartAxisBase.prototype.getLabelPaddingVertical = function () {
        return 50;
    };
    DThemeWhiteChartAxisBase.prototype.getLabelDirection = function () {
        return EShapeTextDirection.LEFT_TO_RIGHT;
    };
    DThemeWhiteChartAxisBase.prototype.getLabelColor = function () {
        return this.getStrokeColor();
    };
    DThemeWhiteChartAxisBase.prototype.getStyle = function () {
        return EShapePointsStyle.NONE;
    };
    DThemeWhiteChartAxisBase.prototype.getStrokeEnable = function () {
        return true;
    };
    DThemeWhiteChartAxisBase.prototype.getStrokeColor = function () {
        return EShapeDefaults.STROKE_COLOR;
    };
    DThemeWhiteChartAxisBase.prototype.getStrokeAlpha = function () {
        return EShapeDefaults.STROKE_ALPHA;
    };
    DThemeWhiteChartAxisBase.prototype.getStrokeWidth = function () {
        return EShapeDefaults.STROKE_WIDTH;
    };
    DThemeWhiteChartAxisBase.prototype.getStrokeAlign = function () {
        return EShapeDefaults.STROKE_ALIGN;
    };
    DThemeWhiteChartAxisBase.prototype.getStrokeSide = function () {
        return EShapeStrokeSide.ALL;
    };
    DThemeWhiteChartAxisBase.prototype.getTickEnable = function () {
        return true;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickCount = function () {
        return 3;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickSize = function () {
        return 10;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickPosition = function () {
        return DChartAxisTickPosition.OUTSIDE;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickStyle = function () {
        return EShapePointsStyle.NONE;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickTextAlignHorizontal = function (position) {
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
    DThemeWhiteChartAxisBase.prototype.getMajorTickTextAlignVertical = function (position) {
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
    DThemeWhiteChartAxisBase.prototype.getMajorTickTextDirection = function () {
        return EShapeTextDirection.LEFT_TO_RIGHT;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickTextColor = function () {
        return this.getStrokeColor();
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickTextFormat = function () {
        return "%fsi";
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickTextPaddingHorizontal = function () {
        return 15;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickTextPaddingVertical = function () {
        return 15;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeEnable = function () {
        return true;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeColor = function () {
        return this.getStrokeColor();
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeAlpha = function () {
        return this.getStrokeAlpha();
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeWidth = function () {
        return this.getStrokeWidth();
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeAlign = function () {
        return this.getStrokeAlign();
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeSide = function () {
        return this.getStrokeSide();
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineEnable = function () {
        return true;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStyle = function () {
        return EShapePointsStyle.NONE;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeEnable = function () {
        return true;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeColor = function () {
        return this.getStrokeColor();
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeAlpha = function () {
        return 0.1;
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeWidth = function () {
        return this.getStrokeWidth();
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeAlign = function () {
        return this.getStrokeAlign();
    };
    DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeSide = function () {
        return this.getStrokeSide();
    };
    DThemeWhiteChartAxisBase.prototype.getMinorTickCount = function () {
        return 3;
    };
    DThemeWhiteChartAxisBase.prototype.getMinorTickSize = function () {
        return 5;
    };
    DThemeWhiteChartAxisBase.prototype.getMinorTickPosition = function () {
        return DChartAxisTickPosition.OUTSIDE;
    };
    DThemeWhiteChartAxisBase.prototype.getMinorTickStyle = function () {
        return EShapePointsStyle.NONE;
    };
    DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeEnable = function () {
        return true;
    };
    DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeColor = function () {
        return this.getStrokeColor();
    };
    DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeAlpha = function () {
        return this.getStrokeAlpha();
    };
    DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeWidth = function () {
        return this.getStrokeWidth();
    };
    DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeAlign = function () {
        return this.getStrokeAlign();
    };
    DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeSide = function () {
        return this.getStrokeSide();
    };
    return DThemeWhiteChartAxisBase;
}());
export { DThemeWhiteChartAxisBase };
//# sourceMappingURL=d-theme-white-chart-axis-base.js.map