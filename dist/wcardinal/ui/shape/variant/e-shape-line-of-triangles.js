/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeTriangle } from "./e-shape-triangle";
import { toHitThreshold } from "./to-hit-threshold";
var EShapeLineOfTriangles = /** @class */ (function (_super) {
    __extends(EShapeLineOfTriangles, _super);
    function EShapeLineOfTriangles(other) {
        var _this = _super.call(this, EShapeType.LINE_OF_TRIANGLES) || this;
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
    EShapeLineOfTriangles.prototype.clone = function () {
        return new EShapeLineOfTriangles(this);
    };
    EShapeLineOfTriangles.prototype.containsAbs = function (x, y, ax, ay) {
        var threshold = toHitThreshold(this, null);
        if (this.containsAbsBBox(x, y, ax + threshold, ay + threshold)) {
            return this.points.calcHitPointAbs(x, y, threshold, null, this._tester, null);
        }
        return false;
    };
    EShapeLineOfTriangles.prototype.containsPointAbs = function (x, y, ax, ay, ox, oy, px, py) {
        return _super.prototype.containsAbs.call(this, x - px - ox, y - py - oy, ax, ay);
    };
    EShapeLineOfTriangles.prototype.containsPointAbsBBox = function (x, y, ax, ay, ox, oy, px, py) {
        return _super.prototype.containsAbsBBox.call(this, x - px - ox, y - py - oy, ax, ay);
    };
    EShapeLineOfTriangles.prototype.calcHitPoint = function (point, toThreshold, range, tester, result) {
        var rect = this.toLocalRect(point, EShapeBase.WORK_RECT);
        var threshold = toHitThreshold(this, toThreshold);
        if (this.containsAbsBBox(rect.x, rect.y, rect.width + threshold, rect.height + threshold)) {
            return this.points.calcHitPointAbs(rect.x, rect.y, threshold, range, tester || this._tester, result);
        }
        return false;
    };
    return EShapeLineOfTriangles;
}(EShapeTriangle));
export { EShapeLineOfTriangles };
//# sourceMappingURL=e-shape-line-of-triangles.js.map