/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColor } from "./e-shape-action-runtime-change-color";
var EShapeActionRuntimeChangeColorFill = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorFill, _super);
    function EShapeActionRuntimeChangeColorFill(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_FILL) || this;
    }
    EShapeActionRuntimeChangeColorFill.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.fill, EShapeActionBases.toBaseFill(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorFill;
}(EShapeActionRuntimeChangeColor));
export { EShapeActionRuntimeChangeColorFill };
//# sourceMappingURL=e-shape-action-runtime-change-color-fill.js.map