/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
var EShapeActionRuntimeChangeColorBrightnessFillAndStroke = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorBrightnessFillAndStroke, _super);
    function EShapeActionRuntimeChangeColorBrightnessFillAndStroke(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_FILL_AND_STROKE) || this;
    }
    EShapeActionRuntimeChangeColorBrightnessFillAndStroke.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.sets(shape, runtime, time, shape.fill, shape.stroke, EShapeActionBases.toBaseFill(shape, runtime), EShapeActionBases.toBaseStroke(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorBrightnessFillAndStroke;
}(EShapeActionRuntimeChangeColorBrightness));
export { EShapeActionRuntimeChangeColorBrightnessFillAndStroke };
//# sourceMappingURL=e-shape-action-runtime-change-color-brightness-fill-and-stroke.js.map