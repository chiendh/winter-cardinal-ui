/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartSeriesLineOfTriangles } from "./d-chart-series-line-of-triangles";
import { EShapeLineOfTriangleRoundeds } from "./shape/variant/e-shape-line-of-triangle-roundeds";
/**
 * A series represents a line of rounded triangles.
 * Data points must be sorted in ascending order on the X axis.
 */
var DChartSeriesLineOfTriangleRoundeds = /** @class */ (function (_super) {
    __extends(DChartSeriesLineOfTriangleRoundeds, _super);
    function DChartSeriesLineOfTriangleRoundeds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DChartSeriesLineOfTriangleRoundeds.prototype.newLineOfAny = function () {
        return new EShapeLineOfTriangleRoundeds();
    };
    return DChartSeriesLineOfTriangleRoundeds;
}(DChartSeriesLineOfTriangles));
export { DChartSeriesLineOfTriangleRoundeds };
//# sourceMappingURL=d-chart-series-line-of-triangle-roundeds.js.map