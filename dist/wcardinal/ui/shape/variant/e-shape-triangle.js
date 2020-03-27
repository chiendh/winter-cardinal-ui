/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
var EShapeTriangle = /** @class */ (function (_super) {
    __extends(EShapeTriangle, _super);
    function EShapeTriangle(type) {
        if (type === void 0) { type = EShapeType.TRIANGLE; }
        return _super.call(this, type) || this;
    }
    EShapeTriangle.prototype.clone = function () {
        return new EShapeTriangle().copy(this);
    };
    EShapeTriangle.prototype.containsAbs_ = function (x, y, a, ay1, ay2) {
        // a = 2 * ay / ax
        // y = + a * x + ay1
        // y = - a * x + ay1
        // y = ay2;
        return (+a * x + ay1 - y <= 0 && -a * x + ay1 - y <= 0 && y <= ay2);
    };
    EShapeTriangle.prototype.containsAbs = function (x, y, ax, ay) {
        if (_super.prototype.containsAbsBBox.call(this, x, y, ax, ay)) {
            var a = 2 * ay / ax;
            var fill = this.fill;
            if (fill.enable) {
                if (this.containsAbs_(x, y, a, -ay, +ay)) {
                    return true;
                }
            }
            else {
                var stroke = this.stroke;
                var strokeWidth = stroke.width;
                if (stroke.enable && 0 < strokeWidth) {
                    if (this.containsAbs_(x, y, a, -ay, +ay)) {
                        var az = Math.sqrt(ax * ax + 4 * ay * ay);
                        var aw = 2 * ax * ay / (ax + az);
                        var cy = ay - aw;
                        var ay1 = cy + (-ay - cy) * Math.max(0.0, aw - strokeWidth) / aw;
                        var ay2 = ay - strokeWidth;
                        if (!this.containsAbs_(x, y, a, ay1, ay2)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    return EShapeTriangle;
}(EShapePrimitive));
export { EShapeTriangle };
//# sourceMappingURL=e-shape-triangle.js.map