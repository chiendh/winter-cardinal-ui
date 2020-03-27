/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
var EShapeCircle = /** @class */ (function (_super) {
    __extends(EShapeCircle, _super);
    function EShapeCircle(type) {
        if (type === void 0) { type = EShapeType.CIRCLE; }
        return _super.call(this, type) || this;
    }
    EShapeCircle.prototype.clone = function () {
        return new EShapeCircle().copy(this);
    };
    EShapeCircle.prototype.containsAbs = function (x, y, ax, ay) {
        if (_super.prototype.containsAbsBBox.call(this, x, y, ax, ay)) {
            var fill = this.fill;
            var stroke = this.stroke;
            if (fill.enable) {
                var x2 = x * x;
                var y2 = y * y;
                var ax2 = ax * ax;
                var ay2 = ay * ay;
                if (x2 * ay2 + y2 * ax2 <= ax2 * ay2) {
                    return true;
                }
            }
            else {
                var strokeWidth = stroke.width;
                if (stroke.enable && 0 < strokeWidth) {
                    var x2 = x * x;
                    var y2 = y * y;
                    var wx = Math.max(0.0, ax - strokeWidth);
                    var wy = Math.max(0.0, ay - strokeWidth);
                    var wx2 = wx * wx;
                    var wy2 = wy * wy;
                    if (wx2 * wy2 <= x2 * wy2 + y2 * wx2) {
                        var ax2 = ax * ax;
                        var ay2 = ay * ay;
                        if (x2 * ay2 + y2 * ax2 <= ax2 * ay2) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    return EShapeCircle;
}(EShapePrimitive));
export { EShapeCircle };
//# sourceMappingURL=e-shape-circle.js.map