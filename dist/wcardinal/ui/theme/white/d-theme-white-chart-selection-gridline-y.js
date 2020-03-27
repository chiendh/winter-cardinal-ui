/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeDefaults } from "../../shape/e-shape-defaults";
import { EShapePointsStyle } from "../../shape/e-shape-points-style";
import { EShapeBar } from "../../shape/variant/e-shape-bar";
import { EShapeBarPosition } from "../../shape/variant/e-shape-bar-position";
import { DThemeWhiteChartSelectionGridline } from "./d-theme-white-chart-selection-gridline";
var DThemeWhiteChartSelectionGridlineY = /** @class */ (function (_super) {
    __extends(DThemeWhiteChartSelectionGridlineY, _super);
    function DThemeWhiteChartSelectionGridlineY() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteChartSelectionGridlineY.prototype.newShape = function (state) {
        var result = new EShapeBar(EShapeBarPosition.LEFT, -1, EShapeDefaults.STROKE_WIDTH, EShapePointsStyle.NONE);
        result.stroke.alpha = 0.5;
        return result;
    };
    return DThemeWhiteChartSelectionGridlineY;
}(DThemeWhiteChartSelectionGridline));
export { DThemeWhiteChartSelectionGridlineY };
//# sourceMappingURL=d-theme-white-chart-selection-gridline-y.js.map