/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteChartAxisX } from "./d-theme-white-chart-axis-x";
var DThemeWhiteChartAxisXDatetime = /** @class */ (function (_super) {
    __extends(DThemeWhiteChartAxisXDatetime, _super);
    function DThemeWhiteChartAxisXDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteChartAxisXDatetime.prototype.getMajorTickTextFormat = function () {
        return "%YMD\n%Hms.%mi";
    };
    return DThemeWhiteChartAxisXDatetime;
}(DThemeWhiteChartAxisX));
export { DThemeWhiteChartAxisXDatetime };
//# sourceMappingURL=d-theme-white-chart-axis-x-datetime.js.map