/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
var EShapeRectangle = /** @class */ (function (_super) {
    __extends(EShapeRectangle, _super);
    function EShapeRectangle(type) {
        if (type === void 0) { type = EShapeType.RECTANGLE; }
        return _super.call(this, type) || this;
    }
    EShapeRectangle.prototype.clone = function () {
        return new EShapeRectangle().copy(this);
    };
    EShapeRectangle.prototype.containsAbs = function (x, y, ax, ay) {
        if (_super.prototype.containsAbsBBox.call(this, x, y, ax, ay)) {
            var fill = this.fill;
            var stroke = this.stroke;
            if (fill.enable) {
                return true;
            }
            else {
                var strokeWidth = stroke.width;
                var strokeSide = stroke.side;
                if (stroke.enable && 0 < strokeWidth && strokeSide !== EShapeStrokeSide.NONE) {
                    var wx = Math.max(0.0, ax - strokeWidth);
                    var wy = Math.max(0.0, ay - strokeWidth);
                    if (!this.containsAbsBBox(x, y, wx, wy)) {
                        if (strokeSide === EShapeStrokeSide.ALL) {
                            return true;
                        }
                        else {
                            if (x <= -wx) {
                                if (y <= -wy) {
                                    return (strokeSide & EShapeStrokeSide.TOP_OR_LEFT) !== 0;
                                }
                                else if (+wy <= y) {
                                    return (strokeSide & EShapeStrokeSide.BOTTOM_OR_LEFT) !== 0;
                                }
                                else {
                                    return (strokeSide & EShapeStrokeSide.LEFT) !== 0;
                                }
                            }
                            else if (+wx <= x) {
                                if (y <= -wy) {
                                    return (strokeSide & EShapeStrokeSide.TOP_OR_RIGHT) !== 0;
                                }
                                else if (+wy <= y) {
                                    return (strokeSide & EShapeStrokeSide.BOTTOM_OR_RIGHT) !== 0;
                                }
                                else {
                                    return (strokeSide & EShapeStrokeSide.RIGHT) !== 0;
                                }
                            }
                            else {
                                if (y <= -wy) {
                                    return (strokeSide & EShapeStrokeSide.TOP) !== 0;
                                }
                                else if (+wy <= y) {
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
        return false;
    };
    return EShapeRectangle;
}(EShapePrimitive));
export { EShapeRectangle };
//# sourceMappingURL=e-shape-rectangle.js.map