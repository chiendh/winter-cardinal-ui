/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartAxisPosition } from "../../d-chart-axis-position";
import { EShapeTextDirection } from "../../shape/e-shape-text-direction";
import { DThemeDarkChartAxisBase } from "./d-theme-dark-chart-axis-base";
var DThemeDarkChartAxisY = /** @class */ (function (_super) {
    __extends(DThemeDarkChartAxisY, _super);
    function DThemeDarkChartAxisY() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkChartAxisY.prototype.getPosition = function () {
        return DChartAxisPosition.LEFT;
    };
    DThemeDarkChartAxisY.prototype.getLabelDirection = function () {
        return EShapeTextDirection.BOTTOM_TO_TOP;
    };
    return DThemeDarkChartAxisY;
}(DThemeDarkChartAxisBase));
export { DThemeDarkChartAxisY };
//# sourceMappingURL=d-theme-dark-chart-axis-y.js.map