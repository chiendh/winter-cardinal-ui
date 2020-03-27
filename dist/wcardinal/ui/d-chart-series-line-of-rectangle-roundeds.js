/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfRectangleRoundeds } from "./shape/variant/e-shape-line-of-rectangle-roundeds";
/**
 * A series represents a line of rounded rectangles.
 * Data points must be sorted in ascending order on the X axis.
 */
var DChartSeriesLineOfRectangleRoundeds = /** @class */ (function (_super) {
    __extends(DChartSeriesLineOfRectangleRoundeds, _super);
    function DChartSeriesLineOfRectangleRoundeds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DChartSeriesLineOfRectangleRoundeds.prototype.newLineOfAny = function () {
        return new EShapeLineOfRectangleRoundeds();
    };
    return DChartSeriesLineOfRectangleRoundeds;
}(DChartSeriesLineOfAny));
export { DChartSeriesLineOfRectangleRoundeds };
//# sourceMappingURL=d-chart-series-line-of-rectangle-roundeds.js.map