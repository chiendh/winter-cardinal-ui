/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeType } from "../e-shape-type";
import { EShapeBarPoints } from "./e-shape-bar-points";
import { EShapeLineBase } from "./e-shape-line-base";
var EShapeBar = /** @class */ (function (_super) {
    __extends(EShapeBar, _super);
    function EShapeBar(position, size, width, style) {
        var _this = _super.call(this, EShapeType.BAR) || this;
        _this.fill.enable = false;
        _this.stroke.set(true, undefined, undefined, width);
        _this.points = new EShapeBarPoints(_this, position, size, style);
        return _this;
    }
    EShapeBar.prototype.clone = function () {
        var points = this.points;
        return new EShapeBar(points.position, points.size, this.stroke.width, points.style).copy(this);
    };
    EShapeBar.prototype.containsAbsBBox = function (x, y, ax, ay) {
        var size = Math.max(0, this.points.size);
        return _super.prototype.containsAbsBBox.call(this, x, y, ax + size, ay + size);
    };
    return EShapeBar;
}(EShapeLineBase));
export { EShapeBar };
//# sourceMappingURL=e-shape-bar.js.map