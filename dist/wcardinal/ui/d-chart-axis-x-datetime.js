/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartAxisX } from "./d-chart-axis-x";
/**
 * An X axis for datetimes.
 */
var DChartAxisXDatetime = /** @class */ (function (_super) {
    __extends(DChartAxisXDatetime, _super);
    function DChartAxisXDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DChartAxisXDatetime.prototype.getType = function () {
        return "DChartAxisXDatetime";
    };
    return DChartAxisXDatetime;
}(DChartAxisX));
export { DChartAxisXDatetime };
//# sourceMappingURL=d-chart-axis-x-datetime.js.map