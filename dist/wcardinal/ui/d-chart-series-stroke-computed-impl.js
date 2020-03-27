/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapePointsStyles } from "./shape/e-shape-points-styles";
var DChartSeriesStrokeComputedImpl = /** @class */ (function () {
    function DChartSeriesStrokeComputedImpl(enable, color, alpha, width, align, side, style) {
        this.enable = enable;
        this.color = color;
        this.alpha = alpha;
        this.width = width;
        this.align = align;
        this.side = side;
        this.style = style;
    }
    DChartSeriesStrokeComputedImpl.from = function (base, index, stroke) {
        if (stroke) {
            return new DChartSeriesStrokeComputedImpl((stroke.enable != null ? stroke.enable : base.enable(index)), (stroke.color != null ? stroke.color : base.color(index)), (stroke.alpha != null ? stroke.alpha : base.alpha(index)), (stroke.width != null ? stroke.width : base.width(index)), (stroke.align != null ? stroke.align : base.align(index)), (stroke.side != null ? stroke.side : base.side(index)), EShapePointsStyles.from(stroke.style != null ? stroke.style : base.style(index)));
        }
        else {
            return new DChartSeriesStrokeComputedImpl(base.enable(index), base.color(index), base.alpha(index), base.width(index), base.align(index), base.side(index), EShapePointsStyles.from(base.style(index)));
        }
    };
    return DChartSeriesStrokeComputedImpl;
}());
export { DChartSeriesStrokeComputedImpl };
//# sourceMappingURL=d-chart-series-stroke-computed-impl.js.map