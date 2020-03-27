/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
var EShapeActionRuntimeChangeColorBrightnessText = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorBrightnessText, _super);
    function EShapeActionRuntimeChangeColorBrightnessText(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_TEXT) || this;
    }
    EShapeActionRuntimeChangeColorBrightnessText.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.text, EShapeActionBases.toBaseText(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorBrightnessText;
}(EShapeActionRuntimeChangeColorBrightness));
export { EShapeActionRuntimeChangeColorBrightnessText };
//# sourceMappingURL=e-shape-action-runtime-change-color-brightness-text.js.map