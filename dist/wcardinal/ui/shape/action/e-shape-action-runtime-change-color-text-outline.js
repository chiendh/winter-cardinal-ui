/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColor } from "./e-shape-action-runtime-change-color";
var EShapeActionRuntimeChangeColorTextOutline = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorTextOutline, _super);
    function EShapeActionRuntimeChangeColorTextOutline(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_TEXT_OUTLINE) || this;
    }
    EShapeActionRuntimeChangeColorTextOutline.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.text.outline, EShapeActionBases.toBaseTextOutline(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorTextOutline;
}(EShapeActionRuntimeChangeColor));
export { EShapeActionRuntimeChangeColorTextOutline };
//# sourceMappingURL=e-shape-action-runtime-change-color-text-outline.js.map