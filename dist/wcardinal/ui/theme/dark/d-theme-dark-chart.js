/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkChart = /** @class */ (function (_super) {
    __extends(DThemeDarkChart, _super);
    function DThemeDarkChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkChart.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkChart;
}(DThemeDarkBase));
export { DThemeDarkChart };
//# sourceMappingURL=d-theme-dark-chart.js.map