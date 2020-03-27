/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteChart = /** @class */ (function (_super) {
    __extends(DThemeWhiteChart, _super);
    function DThemeWhiteChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteChart.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteChart;
}(DThemeWhiteBase));
export { DThemeWhiteChart };
//# sourceMappingURL=d-theme-white-chart.js.map