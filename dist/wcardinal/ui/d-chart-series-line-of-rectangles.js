/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfRectangles } from "./shape/variant/e-shape-line-of-rectangles";
/**
 * A series represents a line of rectangles.
 * Data points must be sorted in ascending order on the X axis.
 */
var DChartSeriesLineOfRectangles = /** @class */ (function (_super) {
    __extends(DChartSeriesLineOfRectangles, _super);
    function DChartSeriesLineOfRectangles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DChartSeriesLineOfRectangles.prototype.newLineOfAny = function () {
        return new EShapeLineOfRectangles();
    };
    return DChartSeriesLineOfRectangles;
}(DChartSeriesLineOfAny));
export { DChartSeriesLineOfRectangles };
//# sourceMappingURL=d-chart-series-line-of-rectangles.js.map