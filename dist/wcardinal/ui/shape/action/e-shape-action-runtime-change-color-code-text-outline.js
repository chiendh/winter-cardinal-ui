/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
var EShapeActionRuntimeChangeColorCodeTextOutline = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorCodeTextOutline, _super);
    function EShapeActionRuntimeChangeColorCodeTextOutline(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_TEXT_OUTLINE) || this;
    }
    EShapeActionRuntimeChangeColorCodeTextOutline.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.text.outline, EShapeActionBases.toBaseTextOutline(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorCodeTextOutline;
}(EShapeActionRuntimeChangeColorCode));
export { EShapeActionRuntimeChangeColorCodeTextOutline };
//# sourceMappingURL=e-shape-action-runtime-change-color-code-text-outline.js.map