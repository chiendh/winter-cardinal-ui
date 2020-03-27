/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isArray } from "./util/is-array";
import { isFunction } from "./util/is-function";
var DChartSeriesScalars = /** @class */ (function () {
    function DChartSeriesScalars() {
    }
    DChartSeriesScalars.from = function (value, def) {
        if (isArray(value)) {
            return function (index) { return value[index % value.length]; };
        }
        else if (isFunction(value)) {
            return value;
        }
        else if (value != null) {
            return function () { return value; };
        }
        else if (isArray(def)) {
            return function (index) { return def[index % def.length]; };
        }
        else if (isFunction(def)) {
            return def;
        }
        else {
            return function () { return def; };
        }
    };
    return DChartSeriesScalars;
}());
export { DChartSeriesScalars };
//# sourceMappingURL=d-chart-series-scalar.js.map