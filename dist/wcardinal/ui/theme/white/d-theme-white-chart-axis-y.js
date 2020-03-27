/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartAxisPosition } from "../../d-chart-axis-position";
import { EShapeTextDirection } from "../../shape/e-shape-text-direction";
import { DThemeWhiteChartAxisBase } from "./d-theme-white-chart-axis-base";
var DThemeWhiteChartAxisY = /** @class */ (function (_super) {
    __extends(DThemeWhiteChartAxisY, _super);
    function DThemeWhiteChartAxisY() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteChartAxisY.prototype.getPosition = function () {
        return DChartAxisPosition.LEFT;
    };
    DThemeWhiteChartAxisY.prototype.getLabelDirection = function () {
        return EShapeTextDirection.BOTTOM_TO_TOP;
    };
    return DThemeWhiteChartAxisY;
}(DThemeWhiteChartAxisBase));
export { DThemeWhiteChartAxisY };
//# sourceMappingURL=d-theme-white-chart-axis-y.js.map