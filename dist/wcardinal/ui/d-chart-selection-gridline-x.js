/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
var DChartSelectionGridlineX = /** @class */ (function (_super) {
    __extends(DChartSelectionGridlineX, _super);
    function DChartSelectionGridlineX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DChartSelectionGridlineX.prototype.update = function (container, mappedPosition) {
        var shape = this._shape;
        if (shape) {
            var mappedX = mappedPosition.x;
            var height = container.plotArea.height;
            shape.transform.position.set(mappedX, height * 0.5);
            shape.size.set(0, height);
            shape.visible = this.isVisible(container, mappedX);
        }
    };
    DChartSelectionGridlineX.prototype.isVisible = function (container, mappedX) {
        return (0 <= mappedX && mappedX <= container.plotArea.width);
    };
    DChartSelectionGridlineX.prototype.getType = function () {
        return "DChartSelectionGridlineX";
    };
    return DChartSelectionGridlineX;
}(DChartSelectionShapeBase));
export { DChartSelectionGridlineX };
//# sourceMappingURL=d-chart-selection-gridline-x.js.map