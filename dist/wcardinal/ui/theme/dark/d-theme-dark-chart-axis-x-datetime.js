/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkChartAxisX } from "./d-theme-dark-chart-axis-x";
var DThemeDarkChartAxisXDatetime = /** @class */ (function (_super) {
    __extends(DThemeDarkChartAxisXDatetime, _super);
    function DThemeDarkChartAxisXDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkChartAxisXDatetime.prototype.getMajorTickTextFormat = function () {
        return "%YMD\n%Hms.%mi";
    };
    return DThemeDarkChartAxisXDatetime;
}(DThemeDarkChartAxisX));
export { DThemeDarkChartAxisXDatetime };
//# sourceMappingURL=d-theme-dark-chart-axis-x-datetime.js.map