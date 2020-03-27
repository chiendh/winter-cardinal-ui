/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DChartSelectionShapeBase } from "./d-chart-selection-shape-base";
var DChartSelectionMarker = /** @class */ (function (_super) {
    __extends(DChartSelectionMarker, _super);
    function DChartSelectionMarker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DChartSelectionMarker.prototype.update = function (container, mappedPosition) {
        var shape = this._shape;
        if (shape) {
            shape.transform.position.copyFrom(mappedPosition);
            shape.visible = this.isVisible(container, mappedPosition);
        }
    };
    DChartSelectionMarker.prototype.isVisible = function (container, mappedPosition) {
        var x = mappedPosition.x;
        var y = mappedPosition.y;
        var plotArea = container.plotArea;
        return (0 <= x && x <= plotArea.width && 0 <= y && y <= plotArea.height);
    };
    DChartSelectionMarker.prototype.getType = function () {
        return "DChartSelectionMarker";
    };
    return DChartSelectionMarker;
}(DChartSelectionShapeBase));
export { DChartSelectionMarker };
//# sourceMappingURL=d-chart-selection-marker.js.map