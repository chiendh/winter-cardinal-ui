/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
var DChartSelectionGridlineY = /** @class */ (function (_super) {
    __extends(DChartSelectionGridlineY, _super);
    function DChartSelectionGridlineY() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DChartSelectionGridlineY.prototype.update = function (container, mappedPosition) {
        var shape = this._shape;
        if (shape) {
            var mappedY = mappedPosition.y;
            var width = container.plotArea.width;
            shape.transform.position.set(width * 0.5, mappedY);
            shape.size.set(width, 0);
            shape.visible = this.isVisible(container, mappedY);
        }
    };
    DChartSelectionGridlineY.prototype.isVisible = function (container, mappedY) {
        return (0 <= mappedY && mappedY <= container.plotArea.height);
    };
    DChartSelectionGridlineY.prototype.getType = function () {
        return "DChartSelectionGridlineY";
    };
    return DChartSelectionGridlineY;
}(DChartSelectionShapeBase));
export { DChartSelectionGridlineY };
//# sourceMappingURL=d-chart-selection-gridline-y.js.map