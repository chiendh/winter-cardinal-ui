/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeBase } from "./e-shape-base";
import { EShapePrimitive } from "./e-shape-primitive";
var EShapeLineBase = /** @class */ (function (_super) {
    __extends(EShapeLineBase, _super);
    function EShapeLineBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeLineBase.prototype.serialize = function (manager) {
        var result = _super.prototype.serialize.call(this, manager);
        result[15] = this.points.serialize(manager);
        return result;
    };
    EShapeLineBase.prototype.getPixelScale = function () {
        var container = this.root.parent;
        if (container != null && container.getPixelScale != null) {
            return container.getPixelScale();
        }
        return 1.0;
    };
    EShapeLineBase.prototype.getStrokeWidthScale = function (points) {
        var style = points.style;
        if (style & EShapePointsStyle.NON_EXPANDING_WIDTH) {
            if (style & EShapePointsStyle.NON_SHRINKING_WIDTH) {
                return this.getPixelScale();
            }
            else {
                return Math.min(1.0, this.getPixelScale());
            }
        }
        else {
            if (style & EShapePointsStyle.NON_SHRINKING_WIDTH) {
                return Math.max(1.0, this.getPixelScale());
            }
            else {
                return 1.0;
            }
        }
    };
    EShapeLineBase.prototype.toHitThreshold = function (toThreshold) {
        var stroke = this.stroke;
        var strokeWidth = (stroke.enable ? stroke.width : 0);
        var strokeScale = this.getStrokeWidthScale(this.points);
        return (toThreshold ?
            toThreshold(strokeWidth, strokeScale) :
            strokeWidth * strokeScale * 0.5);
    };
    EShapeLineBase.prototype.containsAbs = function (x, y, ax, ay) {
        var points = this.points;
        var threshold = this.toHitThreshold(null);
        if (this.containsAbsBBox(x, y, ax + threshold, ay + threshold)) {
            return points.calcHitPointAbs(x, y, ax, ay, threshold, null, this.calcHitPointAbsHitTester, null);
        }
        return false;
    };
    EShapeLineBase.prototype.calcHitPoint = function (point, toHitThreshold, range, tester, result) {
        var points = this.points;
        var threshold = this.toHitThreshold(toHitThreshold);
        var rect = this.toLocalRect(point, EShapeBase.WORK_RECT);
        if (this.containsAbsBBox(rect.x, rect.y, rect.width + threshold, rect.height + threshold)) {
            return points.calcHitPointAbs(rect.x, rect.y, rect.width, rect.height, threshold, range, tester, result);
        }
        return false;
    };
    EShapeLineBase.prototype.calcHitPointAbsHitTester = function (x, y, p0x, p0y, p1x, p1y, index, threshold, result) {
        // (x, y) = p0 + (p1 - p0) * t where 0 <= t <= 1
        // d0 := p1 - p0
        // d1 := v - p0
        // (p0.x + d0.x * t - x)^2 + (p0.y + d0.y * t - y)^2
        // (d0.x t - d1.x)^2 + (d0.y t - d1.y)^2
        // (d0.x^2 + d0.y^2) t^2 - 2 (d0.x * d1.x + d0.y * d1.y) t + (d1.x^2 + d1.y^2)
        // a := dot( d0, d0 )
        // b := dot( d0, d1 )
        // c := dot( d1, d1 )
        // a t^2 - 2 b t + c = a (t - b / a)^2 + c - b * b / a
        // t0 = b / a  min = c - b * b / a
        var d0x = p1x - p0x;
        var d0y = p1y - p0y;
        var d1x = x - p0x;
        var d1y = y - p0y;
        var a = d0x * d0x + d0y * d0y;
        var b = d0x * d1x + d0y * d1y;
        var c = d1x * d1x + d1y * d1y;
        if (0.0001 < a) {
            var t = Math.max(0, Math.min(1, b / a));
            var d = a * t * t - 2 * b * t + c;
            if (d < threshold * threshold) {
                return true;
            }
        }
        return false;
    };
    EShapeLineBase.WORK_RANGE = [0, 0];
    return EShapeLineBase;
}(EShapePrimitive));
export { EShapeLineBase };
//# sourceMappingURL=e-shape-line-base.js.map