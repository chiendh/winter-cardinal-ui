/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
var EShapeActionRuntimeChangeColorCodeFillAndStroke = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorCodeFillAndStroke, _super);
    function EShapeActionRuntimeChangeColorCodeFillAndStroke(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_FILL_AND_STROKE) || this;
    }
    EShapeActionRuntimeChangeColorCodeFillAndStroke.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.sets(shape, runtime, time, shape.fill, shape.stroke, EShapeActionBases.toBaseFill(shape, runtime), EShapeActionBases.toBaseStroke(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorCodeFillAndStroke;
}(EShapeActionRuntimeChangeColorCode));
export { EShapeActionRuntimeChangeColorCodeFillAndStroke };
//# sourceMappingURL=e-shape-action-runtime-change-color-code-fill-and-stroke.js.map