/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBaseStates } from "../../d-base-states";
import { EShapeCircle } from "../../shape/variant/e-shape-circle";
var DThemeWhiteChartSelectionMarker = /** @class */ (function () {
    function DThemeWhiteChartSelectionMarker() {
    }
    DThemeWhiteChartSelectionMarker.prototype.isEnabled = function (state) {
        return false;
    };
    DThemeWhiteChartSelectionMarker.prototype.newShape = function (state) {
        var result = new EShapeCircle();
        if (DBaseStates.isHovered(state)) {
            result.size.set(14, 14);
        }
        else {
            result.size.set(20, 20);
        }
        return result;
    };
    return DThemeWhiteChartSelectionMarker;
}());
export { DThemeWhiteChartSelectionMarker };
//# sourceMappingURL=d-theme-white-chart-selection-marker.js.map