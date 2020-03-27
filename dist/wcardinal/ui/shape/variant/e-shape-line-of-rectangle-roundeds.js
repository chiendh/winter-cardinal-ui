/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeRectangleRounded } from "./e-shape-rectangle-rounded";
import { toHitThreshold } from "./to-hit-threshold";
var EShapeLineOfRectangleRoundeds = /** @class */ (function (_super) {
    __extends(EShapeLineOfRectangleRoundeds, _super);
    function EShapeLineOfRectangleRoundeds(other) {
        var _this = _super.call(this, EShapeType.LINE_OF_RECTANGLE_ROUNDEDS) || this;
        if (other) {
            _this.copy(other);
        }
        else {
            _this.points = new EShapeLineOfAnyPointsImpl(_this);
        }
        _this._tester = function (x, y, ax, ay, ox, oy, px, py) {
            return _this.containsPointAbs(x, y, ax, ay, ox, oy, px, py);
        };
        _this._testerBBox = function (x, y, ax, ay, ox, oy, px, py) {
            return _this.containsPointAbsBBox(x, y, ax, ay, ox, oy, px, py);
        };
        return _this;
    }
    EShapeLineOfRectangleRoundeds.prototype.clone = function () {
        return new EShapeLineOfRectangleRoundeds(this);
    };
    EShapeLineOfRectangleRoundeds.prototype.containsAbs = function (x, y, ax, ay) {
        var threshold = toHitThreshold(this, null);
        if (this.containsAbsBBox(x, y, ax + threshold, ay + threshold)) {
            return this.points.calcHitPointAbs(x, y, threshold, null, this._tester, null);
        }
        return false;
    };
    EShapeLineOfRectangleRoundeds.prototype.containsPointAbs = function (x, y, ax, ay, ox, oy, px, py) {
        return _super.prototype.containsAbs.call(this, x - px - ox, y - py - oy, ax, ay);
    };
    EShapeLineOfRectangleRoundeds.prototype.containsPointAbsBBox = function (x, y, ax, ay, ox, oy, px, py) {
        return _super.prototype.containsAbsBBox.call(this, x - px - ox, y - py - oy, ax, ay);
    };
    EShapeLineOfRectangleRoundeds.prototype.calcHitPoint = function (point, toThreshold, range, tester, result) {
        var rect = this.toLocalRect(point, EShapeBase.WORK_RECT);
        var threshold = toHitThreshold(this, toThreshold);
        if (this.containsAbsBBox(rect.x, rect.y, rect.width + threshold, rect.height + threshold)) {
            return this.points.calcHitPointAbs(rect.x, rect.y, threshold, range, tester || this._tester, result);
        }
        return false;
    };
    return EShapeLineOfRectangleRoundeds;
}(EShapeRectangleRounded));
export { EShapeLineOfRectangleRoundeds };
//# sourceMappingURL=e-shape-line-of-rectangle-roundeds.js.map