/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeType } from "../e-shape-type";
import { EShapeTriangle } from "./e-shape-triangle";
var FMIN = 0.00001;
var EShapeTriangleRounded = /** @class */ (function (_super) {
    __extends(EShapeTriangleRounded, _super);
    function EShapeTriangleRounded(type) {
        if (type === void 0) { type = EShapeType.TRIANGLE_ROUNDED; }
        return _super.call(this, type) || this;
    }
    EShapeTriangleRounded.prototype.clone = function () {
        return new EShapeTriangleRounded().copy(this);
    };
    EShapeTriangleRounded.prototype.containsCorner_ = function (x, y, r, aw) {
        var fill = this.fill;
        if (fill.enable) {
            if (x * x + y * y <= r * r) {
                return true;
            }
        }
        else {
            var stroke = this.stroke;
            var strokeWidth = stroke.width;
            if (stroke.enable && 0 < strokeWidth) {
                var d = x * x + y * y;
                if (d <= r * r) {
                    var w = Math.max(0.0, r * (1 - strokeWidth / aw));
                    if (w * w <= d) {
                        return true;
                    }
                }
            }
        }
    };
    EShapeTriangleRounded.prototype.containsCorner = function (x, y, x0, y0, x1, y1, x2, y2, x3, y3, r12, r13, aw, radius) {
        var xl = x1 + r12 * (x2 - x1) - x0;
        var yl = y1 + r12 * (y2 - y1) - y0;
        var n = Math.sqrt(xl * xl + yl * yl);
        if (FMIN < n) {
            var ni = 1 / n;
            var nlx = xl * ni;
            var nly = yl * ni;
            var xr = x1 + r13 * (x3 - x1) - x0;
            var yr = y1 + r13 * (y3 - y1) - y0;
            var nrx = xr * ni;
            var nry = yr * ni;
            var det = nlx * nry - nrx * nly;
            if (FMIN < Math.abs(det)) {
                var deti = 1 / det;
                var xc = x - x0;
                var yc = y - y0;
                var dx = (+nry * xc - nrx * yc) * deti;
                var dy = (-nly * xc + nlx * yc) * deti;
                if (this.containsCorner_(dx, dy, n, aw * radius)) {
                    return true;
                }
            }
        }
    };
    EShapeTriangleRounded.prototype.containsAbs = function (x, y, ax, ay) {
        if (_super.prototype.containsAbsBBox.call(this, x, y, ax, ay)) {
            var a = 2 * ay / ax;
            if (this.containsAbs_(x, y, a, -ay, +ay)) {
                var az = Math.sqrt(ax * ax + 4 * ay * ay);
                var aw = 2 * ax * ay / (ax + az);
                var radius = this.radius;
                var x0 = 0;
                var y0 = ay - aw;
                var x1 = 0;
                var y1 = -ay;
                var x4 = +ax;
                var y4 = +ay;
                var x7 = -x4;
                var y7 = +y4;
                var x10 = x1 + radius * (x0 - x1);
                var y10 = y1 + radius * (y0 - y1);
                var x11 = x4 + radius * (x0 - x4);
                var y11 = y4 + radius * (y0 - y4);
                var y12 = +y11;
                var x12 = -x11;
                var c0 = -a * x + y10 - y <= 0;
                var c1 = +a * x + y10 - y <= 0;
                var c2 = y <= y11;
                var corner = this.corner;
                if (!c0 && !c1 && (corner & EShapeCorner.TOP)) {
                    // Top corner
                    var rz = (0.5 * (az - aw) * radius) / (az);
                    if (this.containsCorner(x, y, x10, y10, x1, y1, x7, y7, x4, y4, rz, rz, aw, radius)) {
                        return true;
                    }
                }
                else if (!c0 && !c2 && (corner & EShapeCorner.BOTTOM_LEFT)) {
                    // Bottom-left corner
                    var ry = (aw * radius) / (2 * ay);
                    var rx = (ry * az) / (2 * ax);
                    if (this.containsCorner(x, y, x12, y12, x7, y7, x4, y4, x1, y1, rx, ry, aw, radius)) {
                        return true;
                    }
                }
                else if (!c1 && !c2 && (corner & EShapeCorner.BOTTOM_RIGHT)) {
                    // Bottom-right corner
                    var ry = (aw * radius) / (2 * ay);
                    var rx = (ry * az) / (2 * ax);
                    if (this.containsCorner(x, y, x11, y11, x4, y4, x1, y1, x7, y7, ry, rx, aw, radius)) {
                        return true;
                    }
                }
                else {
                    // Others
                    var fill = this.fill;
                    if (fill.enable) {
                        return true;
                    }
                    else {
                        var stroke = this.stroke;
                        var strokeWidth = stroke.width;
                        if (stroke.enable && 0 < strokeWidth) {
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
        }
        return false;
    };
    return EShapeTriangleRounded;
}(EShapeTriangle));
export { EShapeTriangleRounded };
//# sourceMappingURL=e-shape-triangle-rounded.js.map