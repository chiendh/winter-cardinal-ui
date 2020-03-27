/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
var EShapeActionRuntimeChangeColorBrightnessTextOutline = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorBrightnessTextOutline, _super);
    function EShapeActionRuntimeChangeColorBrightnessTextOutline(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_TEXT_OUTLINE) || this;
    }
    EShapeActionRuntimeChangeColorBrightnessTextOutline.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.text.outline, EShapeActionBases.toBaseTextOutline(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorBrightnessTextOutline;
}(EShapeActionRuntimeChangeColorBrightness));
export { EShapeActionRuntimeChangeColorBrightnessTextOutline };
//# sourceMappingURL=e-shape-action-runtime-change-color-brightness-text-outline.js.map