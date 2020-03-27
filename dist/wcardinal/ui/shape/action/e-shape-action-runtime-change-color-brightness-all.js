/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
var EShapeActionRuntimeChangeColorBrightnessAll = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorBrightnessAll, _super);
    function EShapeActionRuntimeChangeColorBrightnessAll(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR) || this;
    }
    EShapeActionRuntimeChangeColorBrightnessAll.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.setAll(shape, runtime, time, shape.fill, shape.stroke, shape.text, shape.text.outline, EShapeActionBases.toBaseFill(shape, runtime), EShapeActionBases.toBaseStroke(shape, runtime), EShapeActionBases.toBaseText(shape, runtime), EShapeActionBases.toBaseTextOutline(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorBrightnessAll;
}(EShapeActionRuntimeChangeColorBrightness));
export { EShapeActionRuntimeChangeColorBrightnessAll };
//# sourceMappingURL=e-shape-action-runtime-change-color-brightness-all.js.map