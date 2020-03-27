/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorBrightness } from "./e-shape-action-runtime-change-color-brightness";
var EShapeActionRuntimeChangeColorBrightnessFill = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorBrightnessFill, _super);
    function EShapeActionRuntimeChangeColorBrightnessFill(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_FILL) || this;
    }
    EShapeActionRuntimeChangeColorBrightnessFill.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.fill, EShapeActionBases.toBaseFill(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorBrightnessFill;
}(EShapeActionRuntimeChangeColorBrightness));
export { EShapeActionRuntimeChangeColorBrightnessFill };
//# sourceMappingURL=e-shape-action-runtime-change-color-brightness-fill.js.map