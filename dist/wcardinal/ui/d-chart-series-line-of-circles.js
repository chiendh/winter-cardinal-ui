/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfCircles } from "./shape/variant/e-shape-line-of-circles";
/**
 * A series represents a line of circles.
 * Data points must be sorted in ascending order on the X axis.
 */
var DChartSeriesLineOfCircles = /** @class */ (function (_super) {
    __extends(DChartSeriesLineOfCircles, _super);
    function DChartSeriesLineOfCircles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DChartSeriesLineOfCircles.prototype.newLineOfAny = function () {
        return new EShapeLineOfCircles();
    };
    return DChartSeriesLineOfCircles;
}(DChartSeriesLineOfAny));
export { DChartSeriesLineOfCircles };
//# sourceMappingURL=d-chart-series-line-of-circles.js.map