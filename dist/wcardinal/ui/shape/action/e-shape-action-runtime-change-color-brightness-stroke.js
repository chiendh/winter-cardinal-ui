/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
var EShapeActionRuntimeChangeColorBrightnessStroke = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorBrightnessStroke, _super);
    function EShapeActionRuntimeChangeColorBrightnessStroke(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_STROKE) || this;
    }
    EShapeActionRuntimeChangeColorBrightnessStroke.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.stroke, EShapeActionBases.toBaseStroke(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorBrightnessStroke;
}(EShapeActionRuntimeChangeColorBrightness));
export { EShapeActionRuntimeChangeColorBrightnessStroke };
//# sourceMappingURL=e-shape-action-runtime-change-color-brightness-stroke.js.map