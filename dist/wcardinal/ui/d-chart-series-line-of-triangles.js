/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfTriangles } from "./shape/variant/e-shape-line-of-triangles";
/**
 * A series represents a line of triangles.
 * Data points must be sorted in ascending order on the X axis.
 */
var DChartSeriesLineOfTriangles = /** @class */ (function (_super) {
    __extends(DChartSeriesLineOfTriangles, _super);
    function DChartSeriesLineOfTriangles(options) {
        var _this = _super.call(this, options) || this;
        _this._sizeId = 0;
        return _this;
    }
    DChartSeriesLineOfTriangles.prototype.newLineOfAny = function () {
        return new EShapeLineOfTriangles();
    };
    DChartSeriesLineOfTriangles.prototype.applyLine = function (line, xcoordinate, ycoordinate, sx, sy, cx, cy, values) {
        // Offset
        var size = this._size;
        var offset = this._offset;
        if (size && offset && this._sizeId !== size.y) {
            this._sizeId = size.y;
            line.points.offset.y = offset.y - size.y * 0.2;
        }
        //
        _super.prototype.applyLine.call(this, line, xcoordinate, ycoordinate, sx, sy, cx, cy, values);
    };
    return DChartSeriesLineOfTriangles;
}(DChartSeriesLineOfAny));
export { DChartSeriesLineOfTriangles };
//# sourceMappingURL=d-chart-series-line-of-triangles.js.map