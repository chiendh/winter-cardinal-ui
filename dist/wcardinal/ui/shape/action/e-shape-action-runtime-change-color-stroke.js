/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColor } from "./e-shape-action-runtime-change-color";
var EShapeActionRuntimeChangeColorStroke = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorStroke, _super);
    function EShapeActionRuntimeChangeColorStroke(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_STROKE) || this;
    }
    EShapeActionRuntimeChangeColorStroke.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.stroke, EShapeActionBases.toBaseStroke(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorStroke;
}(EShapeActionRuntimeChangeColor));
export { EShapeActionRuntimeChangeColorStroke };
//# sourceMappingURL=e-shape-action-runtime-change-color-stroke.js.map