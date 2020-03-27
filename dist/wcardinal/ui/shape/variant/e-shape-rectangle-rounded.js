/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
var EShapeRectangleRounded = /** @class */ (function (_super) {
    __extends(EShapeRectangleRounded, _super);
    function EShapeRectangleRounded(type) {
        if (type === void 0) { type = EShapeType.RECTANGLE_ROUNDED; }
        return _super.call(this, type) || this;
    }
    EShapeRectangleRounded.prototype.clone = function () {
        return new EShapeRectangleRounded().copy(this);
    };
    EShapeRectangleRounded.prototype.containsAbs_ = function (x, y, ax, ay, r, corner) {
        var bx0 = -ax + r;
        if (x <= bx0) {
            var by0 = -ay + r;
            if (y <= by0 && (corner & EShapeCorner.TOP_LEFT)) {
                // Top-left corner
                var dx = x - bx0;
                var dy = y - by0;
                return dx * dx + dy * dy <= r * r;
            }
            else {
                var by1 = +ay - r;
                if (by1 <= y && (corner & EShapeCorner.BOTTOM_LEFT)) {
                    // Bottom-left corner
                    var dx = x - bx0;
                    var dy = y - by1;
                    return dx * dx + dy * dy <= r * r;
                }
                else {
                    // Middle-left box
                    return -ax <= x;
                }
            }
        }
        else {
            var bx1 = +ax - r;
            if (bx1 <= x) {
                var by0 = -ay + r;
                if (y <= by0 && (corner & EShapeCorner.TOP_RIGHT)) {
                    // Top-right corner
                    var dx = x - bx1;
                    var dy = y - by0;
                    return dx * dx + dy * dy <= r * r;
                }
                else {
                    var by1 = +ay - r;
                    if (by1 <= y && (corner & EShapeCorner.BOTTOM_RIGHT)) {
                        // Bottom-right corner
                        var dx = x - bx1;
                        var dy = y - by1;
                        return dx * dx + dy * dy <= r * r;
                    }
                    else {
                        // Middle-right box
                        return x <= +ax;
                    }
                }
            }
            else {
                return -ay <= y && y <= +ay;
            }
        }
    };
    EShapeRectangleRounded.prototype.containsAbs = function (x, y, ax, ay) {
        if (_super.prototype.containsAbsBBox.call(this, x, y, ax, ay)) {
            var fill = this.fill;
            var stroke = this.stroke;
            var strokeWidth = (stroke.enable ? stroke.width : 0);
            if (fill.enable || 0 < strokeWidth) {
                var r = this.radius * Math.min(ax, ay);
                var corner = this.corner;
                var strokeSide = stroke.side;
                if (this.containsAbs_(x, y, ax, ay, r, corner)) {
                    if (fill.enable) {
                        return true;
                    }
                    else {
                        var wx = Math.max(0.0, ax - strokeWidth);
                        var wy = Math.max(0.0, ay - strokeWidth);
                        var wr = Math.max(0.0, r - strokeWidth);
                        if (!this.containsAbs_(x, y, wx, wy, wr, corner)) {
                            if (strokeSide === EShapeStrokeSide.ALL) {
                                return true;
                            }
                            else {
                                if (x <= -wx + wr) {
                                    var hasLeftSide = (strokeSide & EShapeStrokeSide.LEFT) !== 0;
                                    if (y <= -wy + wr) {
                                        var hasTopSide = (strokeSide & EShapeStrokeSide.TOP);
                                        if (hasTopSide && hasLeftSide) {
                                            return true;
                                        }
                                        else if (hasTopSide) {
                                            return -wx <= y;
                                        }
                                        else if (hasLeftSide) {
                                            return x <= -wx;
                                        }
                                        else {
                                            return false;
                                        }
                                    }
                                    else if (+wy - wr <= y) {
                                        var hasBottomSide = (strokeSide & EShapeStrokeSide.BOTTOM);
                                        if (hasBottomSide && hasLeftSide) {
                                            return true;
                                        }
                                        else if (hasBottomSide) {
                                            return +wx <= y;
                                        }
                                        else if (hasLeftSide) {
                                            return x <= -wx;
                                        }
                                        else {
                                            return false;
                                        }
                                    }
                                    else {
                                        return hasLeftSide;
                                    }
                                }
                                else if (+wx - wr <= x) {
                                    var hasRightSide = (strokeSide & EShapeStrokeSide.RIGHT) !== 0;
                                    if (y <= -wy + wr) {
                                        var hasTopSide = (strokeSide & EShapeStrokeSide.TOP);
                                        if (hasTopSide && hasRightSide) {
                                            return true;
                                        }
                                        else if (hasTopSide) {
                                            return -wx <= y;
                                        }
                                        else if (hasRightSide) {
                                            return +wx <= x;
                                        }
                                        else {
                                            return false;
                                        }
                                    }
                                    else if (+wy - wr <= y) {
                                        var hasBottomSide = (strokeSide & EShapeStrokeSide.BOTTOM);
                                        if (hasBottomSide && hasRightSide) {
                                            return true;
                                        }
                                        else if (hasBottomSide) {
                                            return +wx <= y;
                                        }
                                        else if (hasRightSide) {
                                            return +wx <= x;
                                        }
                                        else {
                                            return false;
                                        }
                                    }
                                    else {
                                        return hasRightSide;
                                    }
                                }
                                else {
                                    if (y <= -wy + wr) {
                                        return (strokeSide & EShapeStrokeSide.TOP) !== 0;
                                    }
                                    else if (+wy - wr <= y) {
                                        return (strokeSide & EShapeStrokeSide.BOTTOM) !== 0;
                                    }
                                    else {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    };
    return EShapeRectangleRounded;
}(EShapePrimitive));
export { EShapeRectangleRounded };
//# sourceMappingURL=e-shape-rectangle-rounded.js.map