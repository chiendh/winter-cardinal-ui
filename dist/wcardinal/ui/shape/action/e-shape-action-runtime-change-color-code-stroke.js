/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
var EShapeActionRuntimeChangeColorCodeStroke = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorCodeStroke, _super);
    function EShapeActionRuntimeChangeColorCodeStroke(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_STROKE) || this;
    }
    EShapeActionRuntimeChangeColorCodeStroke.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.stroke, EShapeActionBases.toBaseStroke(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorCodeStroke;
}(EShapeActionRuntimeChangeColorCode));
export { EShapeActionRuntimeChangeColorCodeStroke };
//# sourceMappingURL=e-shape-action-runtime-change-color-code-stroke.js.map