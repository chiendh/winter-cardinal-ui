/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeDefaults } from "../../shape/e-shape-defaults";
import { EShapePointsStyle } from "../../shape/e-shape-points-style";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";
import { DThemeDarkChartSelectionGridline } from "./d-theme-dark-chart-selection-gridline";
var DThemeDarkChartSelectionGridlineY = /** @class */ (function (_super) {
    __extends(DThemeDarkChartSelectionGridlineY, _super);
    function DThemeDarkChartSelectionGridlineY() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkChartSelectionGridlineY.prototype.newShape = function (state) {
        var result = new EShapeBar(EShapeBarPosition.LEFT, -1, EShapeDefaults.STROKE_WIDTH, EShapePointsStyle.NONE);
        result.stroke.alpha = 0.5;
        return result;
    };
    return DThemeDarkChartSelectionGridlineY;
}(DThemeDarkChartSelectionGridline));
export { DThemeDarkChartSelectionGridlineY };
//# sourceMappingURL=d-theme-dark-chart-selection-gridline-y.js.map