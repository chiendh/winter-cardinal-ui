/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
var EShapeActionRuntimeChangeColorCodeFill = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorCodeFill, _super);
    function EShapeActionRuntimeChangeColorCodeFill(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_FILL) || this;
    }
    EShapeActionRuntimeChangeColorCodeFill.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.fill, EShapeActionBases.toBaseFill(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorCodeFill;
}(EShapeActionRuntimeChangeColorCode));
export { EShapeActionRuntimeChangeColorCodeFill };
//# sourceMappingURL=e-shape-action-runtime-change-color-code-fill.js.map