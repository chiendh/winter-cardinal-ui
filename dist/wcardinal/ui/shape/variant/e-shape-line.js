/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeType } from "../e-shape-type";
import { EShapeLineBase } from "./e-shape-line-base";
import { EShapeLinePoints } from "./e-shape-line-points";
var EShapeLine = /** @class */ (function (_super) {
    __extends(EShapeLine, _super);
    function EShapeLine(lineOrPoints, segments, width, style) {
        var _this = _super.call(this, EShapeType.LINE) || this;
        if (lineOrPoints instanceof EShapeLine) {
            _this.copy(lineOrPoints);
        }
        else {
            _this.fill.enable = false;
            _this.stroke.set(true, undefined, undefined, width);
            _this.points = new EShapeLinePoints(_this, lineOrPoints, segments, style);
            _this.transform.position.copyFrom(_this.points.position);
            _this.size.copyFrom(_this.points.size);
        }
        return _this;
    }
    EShapeLine.prototype.clone = function () {
        return new EShapeLine(this);
    };
    return EShapeLine;
}(EShapeLineBase));
export { EShapeLine };
//# sourceMappingURL=e-shape-line.js.map