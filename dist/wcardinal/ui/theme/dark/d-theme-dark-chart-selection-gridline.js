/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDefaults } from "../../shape/e-shape-defaults";
import { EShapePointsStyle } from "../../shape/e-shape-points-style";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";
var DThemeDarkChartSelectionGridline = /** @class */ (function () {
    function DThemeDarkChartSelectionGridline() {
    }
    DThemeDarkChartSelectionGridline.prototype.isEnabled = function (state) {
        return true;
    };
    DThemeDarkChartSelectionGridline.prototype.newShape = function (state) {
        var result = new EShapeBar(EShapeBarPosition.TOP, -1, EShapeDefaults.STROKE_WIDTH, EShapePointsStyle.NONE);
        result.stroke.alpha = 0.5;
        return result;
    };
    return DThemeDarkChartSelectionGridline;
}());
export { DThemeDarkChartSelectionGridline };
//# sourceMappingURL=d-theme-dark-chart-selection-gridline.js.map